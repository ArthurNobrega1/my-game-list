const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid');

const app = express()
const port = 8888

const usersFilePath = path.join(__dirname, '../data/users.txt')
const userDataFilePath = path.join(__dirname, '../data/userData.txt')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/signup', (req, res) => {
    const { username, email, password, confirmPassword } = req.body

    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' })
    }

    fs.readFile(usersFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read user data' })
        }

        const users = data.split('\n').filter(line => line.trim() !== '')

        const emailExists = users.some(line => {
            const [, , emailLine] = line.split(', ')
            const [emailKey, emailValue] = emailLine.split(': ')
            return emailKey === 'Email' && emailValue === email
        })

        if (emailExists) {
            return res.status(400).json({ error: 'Email already exists' })
        }

        const id = uuidv4()

        const user = {
            id,
            username,
            email,
            password
        }

        const userData = {
            id,
            username,
            bio: '',
            games: []
        }

        const userRecord = `ID: ${user.id}, Username: ${user.username}, Email: ${user.email}, Password: ${user.password}\n`
        const userDataRecord = `ID: ${userData.id}, Username: ${userData.username}, Bio: ${userData.bio}, Games: ${JSON.stringify(userData.games)}\n`

        fs.appendFile(usersFilePath, userRecord, (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save user data' })
            }

            fs.appendFile(userDataFilePath, userDataRecord, (err) => {
                if (err) {
                    return res.status(500).json({ error: 'Failed to save additional user data' })
                }

                res.status(200).json({ message: 'User registered successfully' })
            })
        })
    })
})

app.post('/login', (req, res) => {
    const { username, password } = req.body

    fs.readFile(usersFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read user data' })
        }

        const lines = data.split('\n')
        const userData = lines.map(line => {
            const [userId, userUsername, , userPassword] = line.split(', ').map(part => part.split(': ')[1]?.trim())
            return { username: userUsername, password: userPassword, id: userId }
        }).filter(user => user.username && user.password && user.id)

        const user = userData.find(user => user.username === username && user.password === password)

        if (user) {
            res.status(200).json({ id: user.id })
        } else {
            res.status(400).json({ error: 'Invalid username or password' })
        }
    })
})

app.post('/updatebio', (req, res) => {
    const { id, bio } = req.body

    fs.readFile(userDataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read user data' })
        }

        const lines = data.split('\n').filter(line => line.trim() !== '')
        const updatedLines = lines.map(line => {
            const [idLine, userLine, , gamesLine] = line.split(', ')
            const [userKey, userValue] = idLine.split(': ')
            if (userKey === 'ID' && userValue === id) {
                return `ID: ${id}, Username: ${userLine.split(': ')[1]}, Bio: ${bio}, Games: ${gamesLine.split(': ')[1]}`
            }
            return line
        })

        fs.writeFile(userDataFilePath, updatedLines.join('\n') + '\n', (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to update bio' })
            }

            res.status(200).json({ message: 'Bio updated successfully' })
        })
    })
})

app.post('/updategames', (req, res) => {
    const { id, game, status } = req.body

    fs.readFile(userDataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read user data' })
        }

        const lines = data.split('\n').filter(line => line.trim() !== '')
        const updatedLines = lines.map(line => {
            const [idLine, userLine, bioLine, gamesLine] = line.split(', ')
            const [userKey, userValue] = idLine.split(': ')
            if (userKey === 'ID' && userValue === id) {
                const gamesArray = JSON.parse(gamesLine.split(': ')[1]) || []

                const gameIndex = gamesArray.findIndex(item => item.nome === game)

                if (gameIndex !== -1 && gamesArray[gameIndex].status !== status) {
                    gamesArray.splice(gameIndex, 1)
                    if (status !== 'nao-jogado') gamesArray.push({ nome:game, status })
                }

                else if (gameIndex === -1) gamesArray.push({ nome:game, status })

                return `ID: ${id}, Username: ${userLine.split(': ')[1]}, Bio: ${bioLine.split(': ')[1]}, Games: ${JSON.stringify(gamesArray)}`
            }
            return line
        })

        fs.writeFile(userDataFilePath, updatedLines.join('\n') + '\n', (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to update games' })
            }

            res.status(200).json({ message: 'Games updated successfully' })
        })
    })
})

app.get('/userdata', (req, res) => {
    const { id } = req.query

    fs.readFile(userDataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read user data' })
        }

        const lines = data.split('\n').filter(line => line.trim() !== '')
        const userLine = lines.find(line => line.startsWith(`ID: ${id},`))

        if (userLine) {
            const [, usernameLinePart, bioLinePart, gamesLinePart] = userLine.split(', ')
            const username = usernameLinePart.split(': ')[1]
            const bio = bioLinePart.split(': ')[1]
            const games = JSON.parse(gamesLinePart.split(': ')[1])
            res.status(200).json({ username, bio, games })
        } else {
            res.status(404).json({ error: 'User not found' })
        }
    })
})

app.get('/validateId', (req, res) => {
    const { id } = req.query

    fs.readFile(userDataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read user data' })
        }

        const lines = data.split('\n').filter(line => line.trim() !== '')
        const isValid = lines.some(line => line.startsWith(`ID: ${id},`))

        if (isValid) res.status(200).json({ valid: true })
        else res.status(404).json({ valid: false })
    })
})

app.listen(port, () => {
    console.log(`Servidor escutando porta: ${port}`)
})

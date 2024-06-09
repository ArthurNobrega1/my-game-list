const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
const port = 8888

const USERS_FILE_PATH = path.join(__dirname, '../data/users.txt')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/signup/add', (req, res) => {
    const { username, email, password, confirmPassword } = req.body

    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' })
    }

    const user = {
        username,
        email,
        password
    }

    const userData = `Username: ${user.username}, Email: ${user.email}, Password: ${user.password}\n`

    fs.appendFile(USERS_FILE_PATH, userData, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to save user data' })
        }

        res.status(200).json({ message: 'User registered successfully' })
    })
})

app.post('/login', (req, res) => {
    const { username, password } = req.body

    fs.readFile(USERS_FILE_PATH, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read user data' })
        }

        const lines = data.split('\n')
        const user = lines.find(line => {
            const [userUsername, , userPassword] = line.split(', ').map(part => part.split(': ')[1])
            return userUsername === username && userPassword === password
        })

        if (user) {
            res.status(200).json({ username })
        } else {
            res.status(400).json({ error: 'Invalid username or password' })
        }
    })
})

app.listen(port, () => {
    console.log(`Servidor escutando porta: ${port}`)
})

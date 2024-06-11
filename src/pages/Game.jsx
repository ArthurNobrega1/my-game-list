import React, { useEffect, useState } from "react";
import ButtonSair from "../components/ButtonSair";
import Button from "../components/Button";
import { useAuth } from "../assets/AuthContext";
import ImgHeader from "../components/ImgHeader";
import Nav from "../components/Nav";
import Select from "../components/Select";
import { useParams } from "react-router-dom";
import { kebabToCamelCase } from "../assets/tools";
import { games } from "../data/games";

function Game() {
    const { isLoged, setIsLoged } = useAuth()

    const { gameId } = useParams()
    const camelGameId = kebabToCamelCase(gameId)

    const game = games[camelGameId] || games['default']

    const [status, setStatus] = useState("")

    useEffect(() => {
        if (isLoged) {
            fetch(`http://localhost:8888/validateId?id=${isLoged}`)
                .then(response => response.json())
                .then(data => {
                    if (data.valid) {
                        fetch(`http://localhost:8888/userdata?id=${isLoged}`)
                            .then(response => response.json())
                            .then(data => {
                                setStatus(data?.games.filter(game => game.nome === camelGameId)[0]?.status)
                            })
                    } else {
                        console.error('Invalid ID');
                    }
                })
                .catch(error => console.error('Error validating ID:', error));
        }
    }, [isLoged]) // eslint-disable-line
    

    useEffect(() => {
        if (status) {
            fetch('http://localhost:8888/updategames', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: isLoged, game: camelGameId, status })
            })
        }
    }, [status, isLoged, camelGameId])

    const handleStausChange = (e) => {
        setStatus(e.target.value)
    }
    
    const navNotLogged = [<Button label="CADASTRAR" redirect="/signup" />, <Button label="ENTRAR" redirect="/login" />]
    const navLogged =
        [<ButtonSair set={setIsLoged} />,
        <a href="/profile"><img className="my-auto h-[max(4.157vh,1.50625rem)]  transition duration-300 ease-in-out transform hover:scale-110" src="
        /user.png" alt="Icon de Usuário" /></a>]


    return (
        <div className="font-inter">
            <header className="font-inter w-[max(100%,9.7rem)] h-[max(6.434vh,2.33675rem)] flex justify-between bg-dark-green ">
                <ImgHeader />
                <Nav elements={isLoged ? navLogged : navNotLogged} />
            </header>
            <main className="bg-light-green w-[max(100%,9.7rem)] h-min min-h-[max(93.208vh,34rem)] pt-10 pl-5 *:max-lg:w-full">
                <section className="inline-block w-[18vw] mr-[2vw] max-lg:mr-0 ">
                    <div className="max-lg:flex items-center">
                        <div className="mb-3 max-lg:inline-block max-lg:mb-0 *:border-4 *:border-light-green-700 *:min-h-[42.28vh] *:mx-auto">
                            {game.telaDoJogo || games['default'].telaDoJogo}
                        </div>
                        <div className="max-lg:inline-block text-light-green-500 uppercase font-normal w-min *:w-[18vw] *:max-lg:w-[55vw] max-lg:ml-3">
                            <p>Data do lançamento: <span className="font-extralight">{game.lancamento}</span></p>
                            <p>Plataformas: <span className="font-extralight">{game.plataformas}</span></p>
                            <p>Desenvolvedor(es): <span className="font-extralight">{game.desenvolvedor}</span></p>
                        </div>
                    </div>
                    <div className="max-lg:my-3 max-lg:w-[45vw] max-lg:mx-auto">
                        <Select value={status} onChange={handleStausChange}/>
                    </div>
                </section>
                <section className="inline-block align-top w-[77.5vw] text-light-green-500">
                    <header className="uppercase">
                        <h1 className="font-normal border-b-4 border-light-green-500 pb-1 text-[1.5rem]">{game.titulo}</h1>
                        <h2 className="font-light py-1 text-[1.25rem]">Sinopse</h2>
                    </header>
                    <p className="font-normal w-[52.01vw] pl-1 pb-3" dangerouslySetInnerHTML={{ __html: game.sinopse.replace(/\n/g, '<br />') }} />
                </section>
            </main>
        </div>
    )
}

export default Game
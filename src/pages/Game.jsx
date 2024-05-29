import React from "react";
import ButtonSair from "../components/ButtonSair";
import Button from "../components/Button";
import { useAuth } from "../assets/AuthContext";
import ImgHome from "../components/ImgHome";
import Nav from "../components/Nav";
import Select from "../components/Select";
import { useParams } from "react-router-dom";
import { kebabToCamelCase } from "../assets/tools";
import { games } from "../data/games";

function Game() {
    const { isLoged, setIsLoged } = useAuth();

    const navNotLogged = [<Button label="CADASTRAR" redirect="/signup" />, <Button label="ENTRAR" redirect="/login" />]
    const navLogged =
        [<ButtonSair set={setIsLoged} />,
        <a href="/profile"><img className="my-auto h-[max(4.157vh,1.50625rem)]  transition duration-300 ease-in-out transform hover:scale-110" src="
        /user.png" alt="Icon de Usuário" /></a>]

    const { gameId } = useParams()
    const camelGameId = kebabToCamelCase(gameId)

    const game = games[camelGameId] || games['default']

    return (
        <div className="font-inter">
            <header className="font-inter w-[max(100%,9.7rem)] h-[max(6.434vh,2.33675rem)] flex justify-between bg-dark-green ">
                <ImgHome />
                <Nav elements={isLoged ? navLogged : navNotLogged} />
            </header>
            <main className="bg-light-green w-[max(100%,9.7rem)] h-min min-h-[max(93.208vh,34rem)] pt-10 pl-5 *:max-lg:w-full">
                <section className="inline-block w-[18vw] mr-[2vw] max-lg:mr-0 ">
                    <div className="max-lg:inline-block w-min h-min">
                        {game.telaDoJogo}
                    </div>
                    <div className="max-lg:inline-block text-light-green-500 uppercase font-normal w-min *:w-[18vw] *:max-lg:w-[55vw] max-lg:ml-3">
                        <p>Data do lançamento:</p>
                        <p>Plataformas:</p>
                        <p>Desenvolvedoras:</p>
                    </div>
                    <div className="max-lg:my-3 max-lg:w-[45vw] max-lg:mx-auto">
                        <Select />
                    </div>
                </section>
                <section className="inline-block align-top w-[78vw] text-light-green-500">
                    <header className="uppercase">
                        <h1 className="font-normal border-b-4 border-light-green-500 pb-1">{game.titulo}</h1>
                        <h2 className="font-light py-1">Sinopse</h2>
                    </header>
                    <p className="font-normal w-[52.01vw] pl-1">
                        {game.sinopse}
                    </p>
                </section>
            </main>
        </div>
    )
}

export default Game
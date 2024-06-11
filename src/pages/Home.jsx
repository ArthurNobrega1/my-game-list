import { useAuth } from "../assets/AuthContext";

import Nav from '../components/Nav';
import Button from '../components/Button';
import Card from '../components/Card'
import InputSearch from '../components/InputSearch'
import ImgHeader from "../components/ImgHeader";
import ButtonSair from "../components/ButtonSair";
import { useEffect, useState } from "react";
import { nomeToKebabCase } from "../assets/tools";
import { games } from "../data/games";

function Home(props) {
    const defaultArray = Array(10).fill("Nome do Jogo")

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredGames, setFilteredGames] = useState([])

    const topAvaliados = defaultArray.map((jogo, index) => props.topAvaliados ? props.topAvaliados[index] : jogo)
    const topJogados = defaultArray.map((jogo, index) => props.topJogados ? props.topJogados[index] : jogo)
    const topJogando = defaultArray.map((jogo, index) => props.topJogando ? props.topJogando[index] : jogo)

    const { isLoged, setIsLoged } = useAuth()

    const navNotLogged = [<Button label="CADASTRAR" redirect="/signup" />, <Button label="ENTRAR" redirect="/login" />]
    const navLogged =
        [<ButtonSair set={setIsLoged} />,
        <a href="/profile"><img className="my-auto h-[max(4.157vh,1.50625rem)] transition duration-300 ease-in-out transform hover:scale-110" src="./user.png" alt="Icon de Usuário" /></a>]

    useEffect(() => {
        if (searchTerm) {
            const filtered = Object.values(games).filter(game => game.titulo !== 'Título do jogo').filter(game => game.titulo.toLowerCase().includes(searchTerm.toLowerCase()))
            setFilteredGames(filtered)
        } else {
            setFilteredGames([])
        }
    }, [searchTerm, props.topAvaliados, props.topJogados, props.topJogando])
    return (
        <div>
            <header className="font-inter w-[max(100%,9.7rem)] h-[max(6.434vh,2.33675rem)] flex justify-between bg-dark-green">
                <ImgHeader />
                <Nav elements={isLoged ? navLogged : navNotLogged} />
            </header>
            <main className="bg-home w-[max(100%,9.7rem)] h-[max(93.208vh,34rem)]">
                <section className="flex flex-col justify-center h-[47.506vh] min-h-[63%] gap-8 2xl:mb-5">
                    <a className="w-min mx-auto" href="/"><img className="w-[clamp(14rem,36.91445vw,40.0625rem)] min-w-[clamp(14rem,36.91445vw,40.0625rem)] mx-auto" src="./logo-big.png" alt="Logo Grande do My Game List Contraste" /></a>
                    <div className="*:mx-auto">
                        <InputSearch onChange={setSearchTerm}/>
                        {searchTerm && (
                            <div className="bg-light-gray h-[24vh] w-[47.5vw] max-sm:w-[63vw] overflow-y-auto border border-gray-300 z-10">
                                <ul>
                                    {filteredGames.map((game, index) => (
                                        <li key={index}>
                                            <a href={`/game/${nomeToKebabCase(game.titulo)}`} className="block px-4 py-2 hover:bg-gray-200">
                                                {game.titulo}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </section>
                <aside className="flex max-sm:flex-col justify-around items-start max-sm:items-center max-sm:gap-5 bg-dark-green w-full h-min rounded-t-lg py-4">
                    <Card subtitle="Top Avaliados" games={topAvaliados} id={0} />
                    <Card subtitle="Top Jogados" games={topJogados} id={1} />
                    <Card subtitle="Top Jogando" games={topJogando} id={2} />
                </aside>
            </main>
        </div>
    )
}
export default Home
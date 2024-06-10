import React, { useState, useEffect } from "react";
import { useAuth } from "../assets/AuthContext";
import Nav from "../components/Nav";
import ImgHeader from "../components/ImgHeader";
import Button from "../components/Button";
import ButtonSair from "../components/ButtonSair";
import Button2 from "../components/Button2";
import SectionGame from "../components/SectionGame";
import { games } from "../data/games";
import { camelToKebabCase } from "../assets/tools";

function Profile() {
    const { isLoged, setIsLoged } = useAuth()

    const [bio, setBio] = useState("")
    const [isEditingBio, setIsEditingBio] = useState(false)
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        if (isLoged) {
            fetch(`http://localhost:8888/userdata?id=${isLoged}`)
                .then(response => response.json())
                .then(data => {
                    setUserData(data)
                    setBio(data.bio)
                })
        }
    }, [isLoged])

    const handleBioSave = () => {
        fetch('http://localhost:8888/updatebio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: isLoged, bio })
        }).then(response => {
            if (response.ok) {
                setIsEditingBio(false)
            }
        })
    }

    const navNotLogged = [<Button label="CADASTRAR" redirect="/signup" />, <Button label="ENTRAR" redirect="/login" />]
    const navLogged = [<ButtonSair set={setIsLoged} />]
    const subSessoes = ['perfil', 'jogados', 'jogando', 'completo', 'platinados', 'dropado', 'planejado']
    
    const getTelas = nomes => nomes?.map(game => games[game].telaDoJogo)
    const getLinks = nomes => nomes?.map(game => `/game/${camelToKebabCase(game)}`)

    const atividadeRecenteNomes = userData?.games.filter(game => game.status !== 'nao-jogado' && game.status !== 'quero-jogar').map(game => game.nome).reverse().slice(0, 5)
    const completoNomes = userData?.games.filter(game => game.status === 'zerado').map(game => game.nome).reverse().slice(0, 5)
    const platinadosNomes = userData?.games.filter(game => game.status === 'platinado').map(game => game.nome).reverse().slice(0, 5)

    const sectionGames = {
        titles: ['atividade recente', 'completo', 'platinados'],
        icons: ['./icon-relogio.png', './icon-completo.png', './icon-trofeu.png'],
        descricao: ['Imagem de Relógio', 'Imagem de Concluido', 'Imagem de Trofeu'],
        telas: [getTelas(atividadeRecenteNomes), getTelas(completoNomes), getTelas(platinadosNomes)],
        links: [getLinks(atividadeRecenteNomes), getLinks(completoNomes), getLinks(platinadosNomes)]
    }

    const infos = {
        jogados: userData?.games.filter(game => game.status !== 'nao-jogado' && game.status !== 'quero-jogar').length || 0,
        completo: userData?.games.filter(game => game.status === 'completo').length || 0,
        platinados: userData?.games.filter(game => game.status === 'platinado').length || 0
    }

    return (
        <div>
            <header className="font-inter w-[max(100%,9.7rem)] h-[max(6.434vh,2.33675rem)] flex justify-between bg-dark-green ">
                <ImgHeader />
                <Nav elements={isLoged ? navLogged : navNotLogged} />
            </header>
            <main className="bg-light-green min-h-[93.566vh] h-min">
                <div className="flex relative min-h-[10rem] w-full">
                    <div className="flex flex-col w-[70%] justify-center max-sm:w-screen">
                        <div className="flex max-sm:flex-col justify-between ml-10 max-sm:ml-0 items-center font-josefin font-normal text-light-green-700 max-sm:gap-3">
                            <div className="flex items-center gap-5 w-min">
                                <img className="size-[max(7.9028vw,4.089rem)]" src="./user-big.png" alt="Usuário Grande" />
                                <header>
                                    <h1 className="text-[max(2.22222vw,.9rem)]">{userData?.username || 'Nome'}</h1>
                                    {isEditingBio ? (
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                value={bio}
                                                onChange={e => setBio(e.target.value)}
                                                className="text-[max(1.38889vw,.6189rem)]"
                                            />
                                            <button onClick={handleBioSave}>✔</button>
                                        </div>
                                    ) : (
                                        <div className="flex">
                                            <h2 className="text-[max(1.38889vw,.6189rem)] w-[10rem] break-all">{bio || 'Bio'}</h2>
                                            {isLoged && <button onClick={() => setIsEditingBio(true)}>✎</button>}
                                        </div>
                                    )}
                                </header>
                            </div>
                            <div className="flex gap-5 text-[max(1.38889vw,.6189rem)]">
                                {Object.keys(infos).map((key, index) =>
                                    <div key={`div-${index}`} className="flex flex-col items-center">
                                        <p>{infos[key]}</p>
                                        <p className="border-t border-light-green-700">{key}</p>
                                    </div>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 w-[70%] max-sm:w-screen">
                    {subSessoes.map((subSessao, index) => <Button2 key={`button-${index}`} label={subSessao} />)}
                </div>
                <div className="min-h-[69%] h-min bg-light-green-700">
                    <div className="flex flex-col ml-5 pt-8 max-sm:ml-0">
                        {sectionGames.titles.map((titulo, index) => (
                            <SectionGame
                                key={`sectionGame-${index}`}
                                title={titulo}
                                icon={<img className="inline" src={sectionGames.icons[index]} alt={sectionGames.descricao[index]}/>}
                                telas={sectionGames.telas[index]}
                                links={sectionGames.links[index]}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Profile;

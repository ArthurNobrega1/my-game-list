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
    const [activeSubSessao, setActiveSubSessao] = useState("perfil")

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
    const getFilteredGames = status => userData?.games.filter(game => status.includes(game.status)).map(game => game.nome).reverse().slice(0, 5)

    const sectionGames = {
        perfil: {
            titles: ['atividade recente', 'completo', 'platinados'],
            icons: ['./icon-relogio.png', './icon-completo.png', './icon-trofeu.png'],
            descricao: ['Imagem de Relógio', 'Imagem de Concluido', 'Imagem de Trofeu'],
            telas: [getTelas(getFilteredGames(['zerado', 'platinado', 'dropado', 'jogando'])), getTelas(getFilteredGames('zerado')), getTelas(getFilteredGames('platinado'))],
            links: [getLinks(getFilteredGames(['zerado', 'platinado', 'dropado', 'jogando'])), getLinks(getFilteredGames('zerado')), getLinks(getFilteredGames('platinado'))]
        },
        jogados: {
            telas: getTelas(getFilteredGames(['zerado', 'platinado', 'dropado', 'jogando'])),
            links: getLinks(getFilteredGames(['zerado', 'platinado', 'dropado', 'jogando']))
        },
        jogando: {
            telas: getTelas(getFilteredGames('jogando')),
            links: getLinks(getFilteredGames('jogando'))
        },
        completo: {
            telas: getTelas(getFilteredGames('zerado')),
            links: getLinks(getFilteredGames('zerado'))
        },
        platinados: {
            telas: getTelas(getFilteredGames('platinado')),
            links: getLinks(getFilteredGames('platinado'))
        },
        dropado: {
            telas: getTelas(getFilteredGames('dropado')),
            links: getLinks(getFilteredGames('dropado'))
        },
        planejado: {
            telas: getTelas(getFilteredGames('quero-jogar')),
            links: getLinks(getFilteredGames('quero-jogar'))
        }
    }

    const infos = {
        jogados: userData?.games.filter(game => game.status !== 'nao-jogado' && game.status !== 'quero-jogar').length || 0,
        completo: userData?.games.filter(game => game.status === 'completo').length || 0,
        platinados: userData?.games.filter(game => game.status === 'platinado').length || 0
    }

    const renderGames = () => {
        if (activeSubSessao === 'perfil') {
            return sectionGames.perfil.titles.map((titulo, index) => (
                <SectionGame
                    key={`sectionGame-${index}`}
                    title={titulo}
                    icon={<img className="inline" src={sectionGames.perfil.icons[index]} alt={sectionGames.perfil.descricao[index]} />}
                    telas={sectionGames.perfil.telas[index]}
                    links={sectionGames.perfil.links[index]}
                />
            ))
        } else {
            const section = sectionGames[activeSubSessao]
            return (
                <div className="flex flex-wrap gap-4 mb-6 ml-7">
                    {section.telas.map((_, index) => (
                        <a className="*:h-[6.125rem] *:w-[11.375rem] *:transition *:duration-300 *:ease-in-out *:transform *:hover:scale-110" key={`a-${index}`} href={section.links[index]}>
                            {section.telas[index]}
                        </a>
                    ))}
                </div>
            )
        }
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
                    {subSessoes.map((subSessao, index) => <Button2 key={`button-${index}`} onClick={setActiveSubSessao} label={subSessao} />)}
                </div>
                <div className="min-h-[76.7vh] bg-light-green-700">
                    <div className="flex flex-col ml-5 pt-8 max-sm:ml-0">
                        {renderGames()}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Profile;

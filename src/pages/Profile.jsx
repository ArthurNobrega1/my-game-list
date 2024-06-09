import React, { useState, useEffect } from "react";
import { useAuth } from "../assets/AuthContext";
import Nav from "../components/Nav";
import ImgHeader from "../components/ImgHeader";
import Button from "../components/Button";
import ButtonSair from "../components/ButtonSair";
import Button2 from "../components/Button2";
import SectionGame from "../components/SectionGame";

function Profile() {
    const { isLoged, setIsLoged } = useAuth()

    const [bio, setBio] = useState("")
    const [isEditingBio, setIsEditingBio] = useState(false)
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        if (isLoged) {
            fetch(`http://localhost:8888/userdata?username=${isLoged}`)
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
            body: JSON.stringify({ username: isLoged, bio })
        }).then(response => {
            if (response.ok) {
                setIsEditingBio(false)
            }
        })
    }

    const navNotLogged = [<Button label="CADASTRAR" redirect="/signup" />, <Button label="ENTRAR" redirect="/login" />]
    const navLogged = [<ButtonSair set={setIsLoged} />]
    const subSessoes = ['perfil', 'jogados', 'jogando', 'completo', 'platinados', 'dropado', 'planejado']

    const sectionGames = {
        titles: ['atividade recente', 'completo', 'platinados'],
        icons: ['./icon-relogio.png', './icon-completo.png', './icon-trofeu.png'],
        descricao: ['Imagem de Relógio', 'Imagem de Concluido', 'Imagem de Trofeu'],
        games: [[], [], []]
    }

    const infos = {
        jogados: userData?.games.length || 0,
        completo: userData?.games.filter(game => game.status === 'completo').length || 0,
        platinados: userData?.games.filter(game => game.status === 'platinado').length || 0
    }

    const nome = isLoged || 'Nome'

    return (
        <div>
            <header className="font-inter w-[max(100%,9.7rem)] h-[max(6.434vh,2.33675rem)] flex justify-between bg-dark-green ">
                <ImgHeader />
                <Nav elements={isLoged ? navLogged : navNotLogged} />
            </header>
            <main className="bg-light-green h-[93.566vh]">
                <div className="relative h-[31%] w-[70%]">
                    <div className="flex flex-col h-[max(24.38vh,8.216rem)] justify-center max-sm:w-screen">
                        <div className="flex max-sm:flex-col justify-between ml-10 max-sm:ml-0 items-center font-josefin font-normal text-light-green-700 max-sm:gap-3">
                            <div className="flex items-center gap-5">
                                <img className="size-[max(7.9028vw,4.089rem)]" src="./user-big.png" alt="Usuário Grande" />
                                <header>
                                    <h1 className="text-[max(2.22222vw,.9rem)]">{nome}</h1>
                                    {isEditingBio ? (
                                        <>
                                            <input
                                                type="text"
                                                value={bio}
                                                onChange={e => setBio(e.target.value)}
                                                className="text-[max(1.38889vw,.6189rem)]"
                                            />
                                            <button onClick={handleBioSave}>Salvar</button>
                                        </>
                                    ) : (
                                        <>
                                            <h2 className="text-[max(1.38889vw,.6189rem)]">{bio || 'Bio'}</h2>
                                            <button onClick={() => setIsEditingBio(true)}>Editar</button>
                                        </>
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
                    <div className="flex absolute bottom-0 gap-2 w-full max-sm:w-screen">
                        {subSessoes.map((subSessao, index) => <Button2 key={`button-${index}`} label={subSessao} />)}
                    </div>
                </div>
                <div className="min-h-[69%] h-min bg-light-green-700">
                    <div className="flex flex-col ml-5 pt-8 max-sm:ml-0">
                        {sectionGames.titles.map((titulo, index) => (
                            <SectionGame
                                key={`sectionGame-${index}`}
                                title={titulo}
                                icon={<img className="inline" src={sectionGames.icons[index]} alt={sectionGames.descricao[index]} games={sectionGames.games[index]} />}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Profile;

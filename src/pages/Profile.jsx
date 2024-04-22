import React from "react";
import { useAuth } from "../assets/AuthContext";
import Nav from "../components/Nav";
import ImgHome from "../components/ImgHome";
import ButtonSair from "../components/ButtonSair";
import Button2 from "../components/Button2";


function Profile() {
    const { isLoged, setIsLoged } = useAuth();

    const navNotLogged = []
    const navLogged = [<ButtonSair set={setIsLoged}/>]
    const subSessoes = ['perfil', 'jogados', 'jogando', 'completo', 'platinados', 'dropado', 'planejado']
    return (
        <div>
            <header className="font-inter w-[max(100%,9.7rem)] h-[max(6.434vh,2.33675rem)] flex justify-between bg-dark-green ">
                <ImgHome />
                <Nav elements={isLoged ? navLogged : navNotLogged}/>
            </header>
            <main className="bg-light-green h-[93.566vh]">
                <div className="relative h-[31%]">
                    <div className="flex absolute bottom-0 gap-2">
                        {subSessoes.map((subSessao, index) => <Button2 key={`button-${index}`} label={subSessao}/>)}
                    </div>
                </div>
                <div className="h-[69%] bg-light-green-700"></div>
            </main>
        </div>
    )
}

export default Profile
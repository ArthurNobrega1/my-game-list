import React from "react";
import { useAuth } from "../assets/AuthContext";
import Nav from "../components/Nav";
import ImgHome from "../components/ImgHome";
import ButtonSair from "../components/ButtonSair";


function Profile() {
    const { isLoged, setIsLoged } = useAuth();

    const navNotLogged = []
    const navLogged = [<ButtonSair set={setIsLoged}/>]

    return (
        <div>
            <header className="font-inter w-[max(100%,9.7rem)] h-[max(6.434vh,2.33675rem)] flex justify-between bg-dark-green ">
                <ImgHome />
                <Nav elements={isLoged ? navLogged : navNotLogged}/>
            </header>
            <main className="bg-light-green h-[93.566vh]">
                <div className="h-[31%]"></div>
                <div className="h-[69%] bg-light-green-600"></div>
            </main>
        </div>
    )
}

export default Profile
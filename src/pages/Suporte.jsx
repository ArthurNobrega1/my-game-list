import React from "react";
import ImgHome from "../components/ImgHome";
import Nav from "../components/Nav";
import Button from "../components/Button";
import { useAuth } from "../assets/AuthContext";
import ButtonSair from "../components/ButtonSair";

function Suporte() {
    const { isLoged, setIsLoged } = useAuth();

    const navNotLogged = [<Button label="CADASTRAR" redirect="/signup"/>, <Button label="ENTRAR" redirect="/login"/>]
    const navLogged = 
        [<ButtonSair set={setIsLoged}/>, 
        <a href="/profile"><img className="my-auto h-[max(4.157vh,1.50625rem)]  transition duration-300 ease-in-out transform hover:scale-110" src="./user.png" alt="Icon de Usuário" /></a>]

    return (
        <div>
            <header className="font-inter w-[max(100%,9.7rem)] h-[max(6.434vh,2.33675rem)] flex justify-between bg-dark-green ">
                <ImgHome />
                <Nav semSuporte={true} elements={isLoged ? navLogged : navNotLogged}/>
            </header>
        </div>
    )
}

export default Suporte
import React from "react";

import Nav from "../components/Nav";
import Button from '../components/Button';
import Card from '../components/Card'

function Home() {
    const defaultArray = Array(5).fill("Nome do Jogo")

    return (
        <div>
            <header className="font-inter w-[max(100%,9.7rem)] h-[max(6.434vh,2.33675rem)] flex justify-between bg-dark-green ">
                <img className="h-[max(8.557vh,3.3109375rem)] my-auto " src="./logo-contrast.png" alt="Logo do My Game List Contraste" />
                <Nav elements={[<Button label="CADASTRAR" redirect="signup"/>, <Button label="ENTRAR" redirect="login"/>]}/>
            </header>
            <main className="bg-home w-[max(100%,9.7rem)] h-[max(93.528vh,33rem)]">
                <section className="h-[47.506vh]"></section>
                <aside className="flex max-sm:flex-col justify-around max-sm:items-center bg-dark-green w-full h-[29.0625rem] max-sm:h-[170vh] rounded-t-lg">
                    <Card subtitle="Top Avaliados" games={defaultArray}/>
                    <Card subtitle="Top Jogados" games={defaultArray}/>
                    <Card subtitle="Top Jogando" games={defaultArray}/>
                </aside>
            </main>
        </div>
    )
}

export default Home
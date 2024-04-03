import React from "react";

import Header from '../components/Header'
import Button from '../components/Button';
import Card from '../components/Card'

function Home() {
    const defaultArray = Array(5).fill("Nome do Jogo")

    return (
        <div>
            <Header elements={[<Button label="CADASTRAR" redirect="signup"/>, <Button label="ENTRAR" redirect="login"/>]} />
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
import React from "react";

import Header from '../components/Header'
import Button from '../components/Button';

function Home() {
    return (
        <div>
            <Header elements={[<Button label="CADASTRAR" redirect="signup"/>, <Button label="ENTRAR" redirect="login"/>]} />
            <main className="bg-home w-[max(100%,9.7rem)] h-[max(93.528vh,33rem)]">
                <section></section>
                <aside className="bg-dark-green w-"></aside>
            </main>
        </div>
    )
}

export default Home
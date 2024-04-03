import React from "react";

import Header from '../components/Header'
import Button from '../components/Button';

function Home() {
    return (
        <div>
            <Header elements={[<Button label="CADASTRAR" redirect="signup"/>, <Button label="ENTRAR" redirect="login"/>]} />
            <main className="bg-home w-[max(100%,9.7rem)] h-[max(93.528vh,33rem)]">
                <section className="h-[47.506vh]"></section>
                <aside className="bg-dark-green w-full h-[46.022vh] rounded-t-lg"></aside>
            </main>
        </div>
    )
}

export default Home
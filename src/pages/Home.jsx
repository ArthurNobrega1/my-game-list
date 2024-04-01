import React from "react";

import Header from '../components/Header'
import Button from '../components/Button';

function Home() {
    return (
        <div>
            <Header elements={[<Button label="CADASTRAR" redirect="signup"/>, <Button label="ENTRAR" redirect="login"/>]} />
            <main className="bg-home w-100vw h-[93.528vh]">
                <aside></aside>
            </main>
        </div>
    )
}

export default Home
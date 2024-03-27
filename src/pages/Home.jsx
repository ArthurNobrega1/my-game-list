import React from "react";

import Header from '../components/Header'
import Button from '../components/Button';

function Home() {
    return (
        <div>
            <Header elements={[<Button label="CADASTRAR" redirect="SignUp.jsx"/>, <Button label="ENTRAR" redirect="Login.jsx"/>]} />
            <main>
                <aside></aside>
            </main>
        </div>
    )
}

export default Home
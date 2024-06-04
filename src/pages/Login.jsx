import React from "react";

import LeftSide from '../components/LeftSide';
import InputGroup from '../components/InputGroup'
import ButtonSubmit from "../components/ButtonSubmit";

function Login() {
    return (
        <div className="flex">
            <LeftSide/>
            <section className="w-[calc(100vw-47.569vw)] max-sm:w-screen h-[100vh] flex flex-col justify-center bg-dark-green">
                <main className="font-inter w-[69.14%] h-[31.543%] mx-auto">
                    <h1 className="font-extralight w-[79.695%] h-[6.45834vw] mx-auto mb-[1.736112vw] text-[max(5.27778vw,.98125rem)] text-light-green text-center">Bem-vindo!</h1>
                    <form className="w-full h-[63.47%]" action="">
                        <div className="font-extralight w-full h-[58.537%] mb-[1.736112vw] flex flex-col gap-18px">
                            <InputGroup inputs={[{type:"text", placeholder:"Nome de usuário"}, {type:"password", placeholder:"Senha"}]}/>
                        </div>
                        <ButtonSubmit label="ENTRAR"/>
                    </form>
                </main>
            </section>
        </div>
    )
}

export default Login
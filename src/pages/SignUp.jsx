import React, { useState } from "react";

import LeftSide from '../components/LeftSide'
import InputGroup from '../components/InputGroup';
import ButtonSubmit from '../components/ButtonSubmit'
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword')
        }

        try {
            const response = await fetch("http://localhost:8888/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            const result = await response.json()

            if (response.ok) {
                navigate("/")
            } else {
                setError(result.error)
            }
        } catch (error) {
            setError("An error occurred. Please try again.")
        }
    }

    return (
        <div className="flex">
            <LeftSide/>
            <section className="w-[calc(100vw-47.569vw)] max-sm:w-screen h-[100vh] flex flex-col justify-center bg-dark-green">
                <main className="font-inter w-[69.14%] h-[51.075%] mx-auto">
                    <header className="font-extralight w-[88.123%] h-[23.327%] mx-auto mb-calc(42px,header) text-light-green">
                        <h1 className="w-[90.435%] h-[75.41%] mx-auto mb-calc(-18px) text-[max(5.27778vw,1.30625rem)] text-center">Bem-vindo!</h1>
                        <h2 className="w-full h-[39.35%] mx-auto text-[max(2.77778vw,.6875rem)] text-center">Vamos criar a sua conta?</h2>
                    </header>
                    <form className="w-full h-[68.834%]" method="POST" onSubmit={handleSubmit}>
                        <div className="font-extralight w-full h-[71.67%] flex flex-col gap-18px mb-calc(42px,inputGroup)">
                            <InputGroup 
                                inputs={[
                                    {type:"text", name:"username", placeholder:"Nome de usuário"}, 
                                    {type:"email", name:"email", placeholder:"E-mail"}, 
                                    {type:"password", name:"password", placeholder:"Senha"}, 
                                    {type:"password", name:"confirmPassword", placeholder:"Confirmar senha"}
                                ]}
                            />
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                        <ButtonSubmit label="CRIAR"/>
                    </form>
                </main>
            </section>
        </div>
    )
}

export default SignUp
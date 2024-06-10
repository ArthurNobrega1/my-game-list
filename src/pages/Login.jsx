import React, { useState } from "react"
import { useAuth } from "../assets/AuthContext"
import { useNavigate } from "react-router-dom"

import LeftSide from '../components/LeftSide'
import InputGroup from '../components/InputGroup'
import ButtonSubmit from "../components/ButtonSubmit"

function Login() {
    const [error, setError] = useState("")
    const { setIsLoged } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = {
            username: formData.get('username'),
            password: formData.get('password')
        }

        try {
            const response = await fetch("http://localhost:8888/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            const result = await response.json()

            if (response.ok) {
                setIsLoged(result.id)
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
            <LeftSide />
            <section className="w-[calc(100vw-47.569vw)] max-sm:w-screen h-[100vh] flex flex-col justify-center bg-dark-green">
                <main className="font-inter w-[69.14%] h-[31.543%] mx-auto">
                    <h1 className="font-extralight w-[79.695%] h-[6.45834vw] mx-auto mb-[1.736112vw] text-[max(5.27778vw,.98125rem)] text-light-green text-center">Bem-vindo!</h1>
                    <form className="w-full h-[63.47%]" method="POST" onSubmit={handleSubmit}>
                        <div className="mb-[1.736112vw]">
                            <div className="font-extralight w-full h-[58.537%] flex flex-col gap-18px">
                                <InputGroup 
                                    inputs={[
                                        { type: "text", name: "username", placeholder: "Nome de usuário" },
                                        { type: "password", name: "password", placeholder: "Senha" }
                                    ]}
                                />
                            </div>
                            <p className="text-light-green text-[max(1.111112vw,.674rem)] mt-3 hover:text-light-green-600 cursor-pointer focus:cursor-auto">Esqueceu sua senha?</p>
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                        <ButtonSubmit label="ENTRAR" />
                    </form>
                </main>
            </section>
        </div>
    );
}

export default Login

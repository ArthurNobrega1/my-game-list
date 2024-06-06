import React from "react";
import ImgHeader from "../components/ImgHeader";
import Nav from "../components/Nav";
import Button from "../components/Button";
import { useAuth } from "../assets/AuthContext";
import ButtonSair from "../components/ButtonSair";

function Suporte() {
    const { isLoged, setIsLoged } = useAuth();

    const navNotLogged = [<Button label="CADASTRAR" redirect="/signup" />, <Button label="ENTRAR" redirect="/login" />]
    const navLogged =
        [<ButtonSair set={setIsLoged} />,
        <a href="/profile"><img className="my-auto h-[max(4.157vh,1.50625rem)]  transition duration-300 ease-in-out transform hover:scale-110" src="./user.png" alt="Icon de Usuário" /></a>]

    return (
        <div className="font-inter font-light">
            <header className="w-[max(100%,9.7rem)] h-[max(6.434vh,2.33675rem)] flex justify-between bg-dark-green ">
                <ImgHeader />
                <Nav semSuporte={true} elements={isLoged ? navLogged : navNotLogged} />
            </header>
            <div className="bg-light-green">
                <main className="min-h-[93.566vh] text-dark-green px-10">
                    <div className="pt-4 mb-16">
                        <h1 className="uppercase text-[2.5rem] w-min border-b-2 border-dark-green mx-auto h-[3rem]">Suporte</h1>
                    </div>
                    <dl className="text-[1.5rem] *:mb-3">
                        <dt className="before:content-['•'] before:mr-3">Como cadastro a minha conta?</dt>
                        <dd className="text-[1.25rem] pl-7">Você deve clicar no botão "Cadastro" que está na barra de navegação do canto superior da tela inicial. Após isso, será pedido um nome de usuário que você deseja e um e-mail válido. Depois insira a senha que deseja para sua conta e clique no botão de "Criar" e está feito a sua conta!</dd>
                        <dt className="before:content-['•'] before:mr-3">Como posso entrar na minha conta?</dt>
                        <dd className="text-[1.25rem] pl-7">Você deve clicar no botão de "Entrar” que está na barra de navegação no canto superior da tela inicial. Depois será redirecionado em uma tela que irá pedir o seu e-mail e a senha da conta. Caso a senha esteja errada, vai aparecer um botão de "Redefinir senha" para que possa recuperar o acesso da conta.</dd>
                        <dt className="before:content-['•'] before:mr-3">Como posso adicionar jogos dentro da minha lista?</dt>
                        <dd className="text-[1.25rem] pl-7">Para adicionar o jogo que você deseja dentro da sua lista, é preciso que você pesquise dentro da barra de pesquisa o que quer ser adicionado. Você será redirecionado para a tela de exibição de jogo e terá um botão para que você escolha a situação do jogo em que você está por agora. Disso será adicionado automaticamente para sua lista pessoal.</dd>
                        <dt className="before:content-['•'] before:mr-3">Como posso ver a minha lista?</dt>
                        <dd className="text-[1.25rem] pl-7">Para que você possa ver a sua lista, é preciso que você clique no ícone que está no canto superior da tela inicial, ao clicar você poderá ver todos os jogos que estão na lista, dividido em categorias como Jogar, Completos, Platinados e etc...</dd>
                    </dl>
                </main>
                <footer className="text-dark-green px-10 py-6 text-center">
                    <p className="text-[1.5rem]">Tiramos a sua dúvida? Caso não, entre em contato conosco!</p>
                    <a href="mailto:mygamelist@gmail.com" className="text-[1.5rem] text-dark-green underline hover:text-light-green-600">mygamelist@gmail.com</a>
                </footer>
            </div>
        </div>
    )
}

export default Suporte
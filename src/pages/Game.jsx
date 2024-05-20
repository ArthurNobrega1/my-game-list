import React from "react";
import ButtonSair from "../components/ButtonSair";
import Button from "../components/Button";
import { useAuth } from "../assets/AuthContext";
import ImgHome from "../components/ImgHome";
import Nav from "../components/Nav";
import Select from "../components/Select";

function Game(props) {
    const { isLoged, setIsLoged } = useAuth();

    const navNotLogged = [<Button label="CADASTRAR" redirect="/signup" />, <Button label="ENTRAR" redirect="/login" />]
    const navLogged =
        [<ButtonSair set={setIsLoged} />,
        <a href="/profile"><img className="my-auto h-[max(4.157vh,1.50625rem)]  transition duration-300 ease-in-out transform hover:scale-110" src="./user.png" alt="Icon de Usuário" /></a>]

    const titulo = props.titulo || "Título do jogo"
    const sinopse = props.sinopse ||
        `Lorem ipsum justo dictum aenean maecenas cubilia senectus cras urna euismod, augue mauris dictum faucibus praesent lectus molestie inceptos dictumst taciti, etiam elit aenean magna lacus suspendisse aliquam donec praesent. at est amet vehicula curabitur augue diam mollis mattis tristique eleifend, at arcu turpis semper habitasse iaculis sed mauris eleifend urna, scelerisque donec fames feugiat hendrerit sollicitudin facilisis viverra sit. quam proin torquent facilisis integer massa auctor fringilla sollicitudin ut in, dictumst urna mauris sollicitudin dapibus est vulputate in nullam, duis velit magna tempus torquent aliquet sociosqu gravida a. etiam congue eget fermentum purus nostra mattis ut duis, lacinia tristique cursus rutrum lorem aptent curabitur luctus donec, ut nisl fermentum dictum nunc cubilia rhoncus.

        Dapibus vehicula eget dictum sagittis varius nunc risus nec nullam adipiscing, porttitor eget rutrum sed phasellus potenti placerat lacinia tincidunt habitant enim, rutrum est litora lacinia luctus convallis massa morbi suscipit. senectus fringilla curae lacinia posuere venenatis lacus gravida faucibus, tellus pharetra facilisis ut faucibus malesuada ullamcorper accumsan, ad tellus risus orci eros lobortis eu. cursus nunc ultrices lorem nibh congue curabitur tortor lacinia, mattis senectus vel aenean non habitasse. morbi litora nulla enim mi et lobortis odio maecenas, porttitor habitasse euismod magna placerat amet netus.`
    const telaDoJogo = props.telaDoJogo ||
        <div className="flex items-center justify-center w-[18vw] max-lg:w-[35vw] h-[42.28vh] bg-light-green-500">
            <p className="font-extralight px-4 text-white text-[2.5vw]">Tela Do Jogo</p>
        </div>

    return (
        <div className="font-inter">
            <header className="font-inter w-[max(100%,9.7rem)] h-[max(6.434vh,2.33675rem)] flex justify-between bg-dark-green ">
                <ImgHome />
                <Nav elements={isLoged ? navLogged : navNotLogged} />
            </header>
            <main className="bg-light-green w-[max(100%,9.7rem)] h-min min-h-[max(93.208vh,34rem)] pt-10 pl-5 *:max-lg:w-full">
                <section className="inline-block w-[18vw] mr-[2vw] max-lg:mr-0 ">
                    <div className="max-lg:inline-block w-min h-min">
                        {telaDoJogo}
                    </div>
                    <div className="max-lg:inline-block text-light-green-500 uppercase font-normal w-min *:w-[18vw] *:max-lg:w-[55vw] max-lg:ml-3">
                        <p>Data do lançamento:</p>
                        <p>Plataformas:</p>
                        <p>Desenvolvedoras:</p>
                    </div>
                    <div className="max-lg:my-3 max-lg:w-[45vw] max-lg:mx-auto">
                        <Select />
                    </div>
                </section>
                <section className="inline-block align-top w-[78.6vw] text-light-green-500">
                    <header className="uppercase">
                        <h1 className="font-normal border-b-4 border-light-green-500 pb-1">{titulo}</h1>
                        <h2 className="font-light py-1">Sinopse</h2>
                    </header>
                    <p className="font-normal w-[52.01vw] pl-1">
                        {sinopse}
                    </p>
                </section>
            </main>
        </div>
    )
}

export default Game
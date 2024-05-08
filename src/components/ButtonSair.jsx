import React from "react";

function ButtonSair(props) {
    function sairConta() {
        if (window.confirm('Tem certeza? ')) {
            props.set("")
        }
    }

    return <button onClick={sairConta}><u className="text-light-green text-[max(.90278vw,.73125rem)] uppercase hover:text-light-green-600">sair</u></button>
}

export default ButtonSair
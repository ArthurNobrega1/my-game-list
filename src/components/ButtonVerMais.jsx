import React from "react";
import { verMais } from "../assets/tools";

const ButtonVerMais = props => 
    <button onClick={() => verMais(props.setGamesVisiveis, props.games, props.id)} className="verMais cursor-pointer focus:cursor-auto hover:text-light-green-600">
        Ver mais...
    </button>

export default ButtonVerMais
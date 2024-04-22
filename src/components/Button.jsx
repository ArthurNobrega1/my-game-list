import React from "react";
import { Link } from 'react-router-dom';

const Button = props => 
    <Link to={`./${props.redirect}`}>
        <button className="w-[max(7.43056vw,3.63125rem)] h-[max(3.49069vh,1.4796875rem)] bg-light-green text-black text-[max(.90278vw,.53125rem)] rounded-xl border-light-green border-2 active:text-light-green-600 hover:bg-transparent hover:text-light-green active:bg-blue-500/10 focus:outline-none">
            {props.label}
        </button>
    </Link>

export default Button
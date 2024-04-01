import React from "react";
import { Link } from 'react-router-dom';

const Button = props => 
    <Link to={`./${props.redirect}`}>
        <button className="w-[max(7.43056vw,3.63125rem)] h-[3.49069vh] bg-light-green text-black text-[max(.90278vw,.43125rem)] rounded-xl">
            {props.label}
        </button>
    </Link>

export default Button
import React from "react";

const Button = props => 
    <button className="w-[7.43056vw] h-[2.92969vh] bg-light-green text-black text-[.90278vw] rounded-xl" onClick={`../pages/${props.redirect}`}>
        {props.label}
    </button>

export default Button
import React from "react";

const Button2 = props => 
    <button className="w-[max(10.76vw,2.73125rem)] h-[max(4.38vh,1.4796875rem)] bg-light-green-500 text-white text-[max(.90278vw,.33125rem)] border-light-green-500 border-t-2 border-x-2 active:text-light-green-500 hover:bg-transparent hover:text-light-green-500 active:bg-blue-500/50 focus:outline-none uppercase rounded-t-lg">
        {props.label}
    </button>

export default Button2
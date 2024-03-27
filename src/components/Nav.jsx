import React from "react";

const Nav = props =>
    <nav className="font-extralight text-[.90278vw]">
        <ul className="w-[20.6945vw] h-full flex gap-9px *:my-auto">
            <li className="text-light-green"><u>SUPORTE</u></li>
            {props.elements.map(element => <li>{element}</li> )}
        </ul>
    </nav>

export default Nav
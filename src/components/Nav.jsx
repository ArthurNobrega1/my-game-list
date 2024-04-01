import React from "react";

const Nav = props =>
    <nav className="font-extralight mr-[.9375rem] text-[.90278vw]">
        <ul className="h-full flex gap-9px *:my-auto">
            <li className="text-light-green text-[max(.90278vw,.43125rem)]"><u>SUPORTE</u></li>
            {props.elements.map((element, index) => <li key={index}>{element}</li> )}
        </ul>
    </nav>

export default Nav
import React from "react";

const Nav = props =>
    <nav>
        <ul>
            <li>SUPORTE</li>
            {props.elements.map(element => <li>{element}</li> )}
        </ul>
    </nav>

export default Nav
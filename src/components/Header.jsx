import React from "react";

import Nav from './Nav';

const Header = props => 
    <header className="font-inter w-[max(100%,9.7rem)] h-[max(6.046vh,2.33675rem)] flex justify-between bg-dark-green max-sm:justify-center">
        <img className="h-[max(8.557vh,3.3109375rem)] my-auto max-sm:hidden" src="./logo-contrast.png" alt="Logo do My Game List Contraste" />
        <Nav elements={props.elements}/>
    </header>

export default Header
import React from "react";

const Input = props => 
    <div className="flex relative font-inter font-extralight mx-auto space-x-[-2.9rem] items-center">
        <i className="top-0 left-0 fa-solid fa-search fa-flip-horizontal py-[1.545vh] pl-3 text-dark-green border-l-2 border-dark-green"></i>
        <input placeholder="PESQUISAR JOGOS" className="bg-light-gray w-[50.4862vw] h-[5.345vh] pl-14 text-[max(1.38889vw,.78125rem)] max-sm:w-[75vw] outline-none rounded-lg" {...props}/>
    </div>

export default Input
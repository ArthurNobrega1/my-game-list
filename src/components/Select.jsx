import React from "react";

const Select = props =>
    <select value={props.value} onChange={e => props.onChange(e)} className="bg-light-green-700 text-white text-center uppercase w-full py-1 font-extralight">
        <option value="nao-jogado">Não Jogado</option>
        <option value="quero-jogar">Quero jogar</option>
        <option value="zerado">Zerado</option>
        <option value="platinado">Platinado</option>
        <option value="dropado">Dropado</option>
        <option value="jogando">Jogando</option>
    </select>

export default Select
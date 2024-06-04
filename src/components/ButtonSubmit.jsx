import React from "react";

const ButtonSubmit = props => 
    <button className="font-semibold w-[max(14.09723vw,4.63125rem)] h-[max(4.16667vw,1.36875rem)] block bg-light-green mx-auto text-dark-green text-[max(1.805556vw,.78125rem)] rounded-md border-light-green border-2 active:text-light-green-600 hover:bg-transparent hover:text-light-green focus:ring" type="submit">
        {props.label}
    </button>

export default ButtonSubmit
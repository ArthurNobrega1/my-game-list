import React from "react";

const ButtonSubmit = props => 
    <button className="font-semibold w-[max(14.09723vw,4.63125rem)] h-[max(4.16667vw,1.36875rem)] block bg-light-green mx-auto text-dark-green text-[max(1.805556vw,.78125rem)] rounded-md" type="submit">
        {props.label}
    </button>

export default ButtonSubmit
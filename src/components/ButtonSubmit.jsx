import React from "react";

const ButtonSubmit = props => 
    <button className="font-semibold w-[38.89%] h-[4.16667vw] block bg-light-green mx-auto text-dark-green text-[max(1.805556vw,.78125rem)] rounded-md" type="submit">
        {props.label}
    </button>

export default ButtonSubmit
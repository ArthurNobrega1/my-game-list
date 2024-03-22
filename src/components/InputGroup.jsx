import React from "react";

import Input from './Input'

const InputGroup = (props) => 
    props.inputs.map((input, index) => <Input {...input} key={`input-${index}`}/>)       

export default InputGroup
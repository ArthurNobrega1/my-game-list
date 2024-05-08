import React from "react";

import Input from './Input'

const InputGroup = (props) => 
    props.inputs.map((input, index) => <Input required {...input} key={`input-${index}`}/>)       

export default InputGroup
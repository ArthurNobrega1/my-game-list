import React from "react";

import Input from './Input'

const InputGroup = (props) => 
    props.inputs.map(input => <Input {...input}/>)       

export default InputGroup
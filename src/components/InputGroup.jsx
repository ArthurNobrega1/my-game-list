import React from "react";

import Input from './Input'

export default props =>
    props.inputs.map(input => <Input {...input}/>)
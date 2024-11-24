import React from 'react'
import InputText from './InputText';
import InputTime from './InputTime';
function Input(props : any) : JSX.Element {
    const input : Input = props.input;
    const inputElement : JSX.Element = input.type === "text" ? <InputText input={input} error={props.error}/> : <InputTime input={input} error={props.error} />

  return inputElement;
}

export default Input

import React from 'react'

function InputTime(props : any) : JSX.Element {
    const input : Input = props.input;
  return (
   <>
    <label htmlFor="time">{input.placeholder}</label>
    <input type={input.type} name={input.name} placeholder={input.placeholder} defaultValue={input.defaultValue} ref={input.ref}/>
    <p className='error'>{props.error && props.error.message}</p>
   </>
  )
}

export default InputTime

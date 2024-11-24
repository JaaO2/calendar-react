import React from 'react'

function InputText(props : any) : JSX.Element {
    const input : Input = props.input;

  return (
    <>
      <input name={input.name} type={input.type} placeholder={input.placeholder} defaultValue={input.defaultValue} ref={input.ref}/>
      <p className='error'>{props.error && props.error.message}</p>
    </>
  )
}

export default InputText

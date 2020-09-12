import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextField, TextFieldMasked } from './index'


const GenericInput = ({type, label, name, ...inputProps}) => {
  const { register, control } = useFormContext()

  switch (type) {
    case 'textField': return <TextField  label={label} inputProps={{name}} inputRef={register} fullWidth />
    case 'textFieldMasked': return <Controller  as={TextFieldMasked} label={label} mask={inputProps.mask} name={name} fullWidth />
    default: return <p>p</p>
  }
  return (
    <p>{inputProps.label}</p> 
  )

}

export { GenericInput }
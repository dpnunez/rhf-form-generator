import React from 'react'
import { useFormContext } from 'react-hook-form'
import { TextField, TextFieldMasked } from './index'


const GenericInput = ({type, label, name, ...inputProps}) => {
  const { register, control, errors } = useFormContext()
  
  switch (type) {
    case 'textField': return <TextField label={label} inputProps={{name}} inputRef={register} error={!!errors[name]?.message} helperText={errors[name]?.message} fullWidth />
    case 'textFieldMasked': return <TextFieldMasked label={label} mask={inputProps.mask} error={!!errors[name]?.message} helperText={errors[name]?.message} name={name} control={control} fullWidth />
    default: return <p>p</p>
  }
  return (
    <p>{inputProps.label}</p> 
  )

}

export { GenericInput }
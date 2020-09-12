import React, { useCallback } from 'react'
import { Controller } from 'react-hook-form';
import { IMaskMixin } from 'react-imask';
import { TextField } from './TextField'

const TextFieldMasked = IMaskMixin(({inputRef, ...props}) => {

	const handleFocus = useCallback(() => {
		document.getElementsByName(props.name)[0].focus()
	}, [props.name])

	return (
		<Controller as={<TextField inputRef={inputRef} />} onFocus={handleFocus} {...props} />
		// WIP: <Controller as={<TextField inputRef={(e) => console.log(e) || inputRef(e)} />} onFocus={handleFocus} {...props} />
	)
})

 
export { TextFieldMasked }
import React, { useState, useCallback } from 'react'
import { Button, MenuItem } from '@material-ui/core'
import { useForm, Controller, FormProvider } from 'react-hook-form'
import styled from 'styled-components'

import { TextField } from '../components/TextField'
import { TextFieldMasked } from '../components/TextFieldMask'
import { SelectNative } from '../components/SelectNative'
import { Select } from '../components/Select'
// import { getFormData } from '../services'
import { FileInput } from '../components/FileInput'

let renderCount = 1



const Form = () => {
	const [isLoading, setIsLoading] = useState(false)

	const formMethods = useForm()
	const { register, control, reset, handleSubmit, setValue, watch, getValues } = formMethods

	// const getAsyncData = useCallback(async({loader}) => {
	// 	try {
	// 		if (loader) {
	// 			setIsLoading(true)
	// 		}
	// 		const data = await getFormData(true, 1999)
	// 		reset(data)
	// 	} catch (e) {
	// 		console.log(e)
	// 	} finally {
	// 		setIsLoading(false)
	// 	}
	// }, [reset])

	renderCount++

	return (
		<FormProvider {...formMethods}>
			<FormContainer onSubmit={handleSubmit((values) => console.log(values))}>
				<FieldsContainer>
					{isLoading ? <h1>loading</h1> : (
						<div>teste</div>
					)}
				</FieldsContainer>
				<Controls>
					<Button onClick={() => console.log(getValues())} color='primary' variant='outlined'>Show Values (LOG)</Button>
					{/* <Button onClick={() => getAsyncData({loader: false})} color='primary' variant='outlined'>Simulate Request</Button> */}
					{/* <Button onClick={() => getAsyncData({loader: true})} color='primary' variant='outlined'>Simulate Request (With loader)</Button> */}
					<Button type='submit' color='primary' variant='contained'>Submit form</Button>
				</Controls>
				<RenderCount>
					Re-renders: {renderCount}
				</RenderCount>
			</FormContainer>
		</FormProvider> 
	)
}

export { Form }


const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	height: 100vh;
`
const FieldsContainer = styled.section`
	flex-basis: 100%;
	overflow-y: auto;
	padding: 10px;
`

const Controls = styled.section`
	justify-content: space-between;
	display: flex;
	padding: 20px;
	box-shadow: -16px 14px 20px 0px black;
`

const RenderCount = styled.div`	
	position: absolute;
	top: 2%;
	right: 2%;
	color: white;
	opacity: 0.5;
	padding: 5px 15px;
	border-radius: 10px;
	background-color: ${({theme}) => theme.palette.secondary.main};
	transition: all 0.2s ease;

	&:hover {
		opacity: 0.8;
	}
`
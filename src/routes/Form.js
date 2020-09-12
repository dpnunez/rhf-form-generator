import React, { useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import styled from 'styled-components'
import { buildYup } from 'schema-to-yup'
import { yupResolver } from '@hookform/resolvers';

import { simple as formData } from '../data'
import { GenericInput } from '../components'


console.log(buildYup)

let renderCount = 0

const Form = () => {
	const [isLoading, setIsLoading] = useState(false)
	const schema = buildYup(formData.rules)
	
	const formMethods = useForm({
		resolver: yupResolver(schema)
	})
	const { handleSubmit, getValues } = formMethods

	renderCount++

	return (
		<FormProvider {...formMethods}>
			<FormContainer onSubmit={handleSubmit((values) => console.log(values) || alert('submited'))}>
				<FieldsContainer>
					{isLoading ? <h1>loading</h1> : formData.model.chapters.map(chapter => (
						<Grid container key={chapter.title}>
							<Grid item xs={12}>
								<h1>{chapter.title}</h1>
							</Grid>
							{chapter.inputs.map(inputProps => (
								<Grid item xs={inputProps.size || 6}>
									<GenericInput {...inputProps} />
								</Grid>
							))}
						</Grid>
					))}
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
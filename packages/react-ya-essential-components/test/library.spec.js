/* eslint-disable */
/* global describe, it, before */
``

import React from 'react'
import renderer from 'react-test-renderer'
import { Button, Form, FormTextInput, GenericForm, TextArea, TextInput } from '../lib/index.js'

const anyFun = () => null
const anyVal = 'any-val'
const anyName = 'any-name'

const anyContent = (<div/>)
const anyErrorTranslator = () => 'error'

const anyInputProps = {value: anyVal, onChange: anyFun, name: anyName}

Form.setGlobalErrorTranslator(anyErrorTranslator)

it('Can instantiate Form', () => {
    renderer.create(
        <Form onSubmit={anyFun}>
            {anyContent}
        </Form>)
})

it('Can instantiate GenericForm', () => {
    const schema = {fields: []}
    renderer.create(
        <GenericForm schema={schema} onSubmit={anyFun}>
            {anyContent}
        </GenericForm>)
})

it('Can instantiate basic components', () => {

    renderer.create(<Button/>)
    renderer.create(<TextInput {...anyInputProps}/>)
    renderer.create(<TextArea {...anyInputProps}/>)
})

it('Can instantiate form input components', () => {
    renderer.create(<FormTextInput {...anyInputProps}/>)
})




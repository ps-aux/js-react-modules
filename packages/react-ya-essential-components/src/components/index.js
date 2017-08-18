import _genericForm from 'src/components/form/GenericForm'
import _button from 'src/components/basic/Button'
import _textArea from 'src/components/basic/TextArea'
import _textInput from 'src/components/basic/TextInput'

import { FormTextInput as _formTextInput } from 'src/components/form/inputs'

import { validation, Form as yaForm } from 'react-ya-forms'

if (!validation)
    throw new Error('Could not import validation from react-ya-forms')

import  _Form from 'src/components/form/Form'

export const GenericForm = _genericForm

export const Form = _Form

export const FormTextInput = _formTextInput

export const Button = _button

export const TextArea = _textArea

export const TextInput = _textInput

export const formValidation = validation

export const configureForms =({errorTranslator}) => {
    yaForm.setGlobalErrorTranslator(errorTranslator)
}

import React from "react";
import {asFormInput} from 'src/lib/forms/components/formInputWrapper'
import TextArea from 'src/lib/controls/TextArea'
import TextInput from 'src/lib/controls/TextInput'
import f from 'src/lib/forms/components/Form'

export const FormTextArea = asFormInput(TextArea)

export const FormTextInput = asFormInput(TextInput)

export const Form = f



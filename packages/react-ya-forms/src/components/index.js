import { asFormInput as _asFormInput } from 'src/components/formInputWrapper'
import _form from 'src/components/Form'

import { errorCodes, rules } from 'src/validation/validator'

export const Form = _form

export const asFormInput = _asFormInput

export const validation = {rules, errorCodes}

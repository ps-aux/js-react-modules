import validator from 'validator'

export const errorCodes = {
    EMPTY: 'validator/EMPTY',
    INVALID_EMAIL: 'validator/INVALID_EMAIL',
    TOO_SHORT: 'validator/TOO_SHORT',
    TOO_LONG: 'validator/TOO_LONG',
    PASSWORDS_MISMATCH: 'validator/PASSWORDS_MISMATCH',
    INVALID_FORMAT: 'validator/INVALID_FORMAT',
    TOO_SMALL: 'validator/TOO_SMALL'
}

const EMAIL_PATTERN = /[a-zA-Z0-9\+\.\_\%\-\+]{1,256}\@[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}(\.[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25})/

const defaultRule = {
    required: true
}

const validateValue = (value, rule = defaultRule) => {
    if (!value)
        value = ''
    value = value.toString()

    rule = {...defaultRule, ...rule}

    // If not required and is empty
    if (!rule.required && !value)
        return

    if (!value)
        return errorCodes.EMPTY


    if (rule.email && !isEmail(value))
        return errorCodes.INVALID_EMAIL

    if (rule.minLen && !validator.isLength(value,
            {min: rule.minLen}))
        return errorCodes.TOO_SHORT

    if (rule.maxLen && !validator.isLength(value,
            {max: rule.maxLen}))
        return errorCodes.TOO_LONG

    if (rule.format && !rule.format.test(value))
        return errorCodes.INVALID_FORMAT

    if (rule.gt != null) {
        if (!isNumber(value))
            return errorCodes.INVALID_FORMAT
        if (value <= rule.gt)
            return errorCodes.TOO_SMALL
    }
}

const isEmail = str => EMAIL_PATTERN.test(str)


const isNumber = str => {
    if (!str)
        return false

    if (!str.length)
        return false

    return !isNaN(str)
}

export const validate = (vals, rules) => {
    let errors = {}

    Object.keys(vals).forEach(f => {
        const error = validateValue(vals[f], rules[f])
        if (error)
            errors[f] = error

    })

    const customRules = rules._custom
    if (customRules) {
        customRules.forEach(r => {
            const error = r(vals)

            if (error)
                errors[error.field] = error.code
        })

    }

    return errors
}

export const customRules = {
    passwordMatches: vals => {
        const {password, confirmedPassword} = vals

        if (password !== confirmedPassword)
            return {
                field: 'password',
                code: errorCodes.PASSWORDS_MISMATCH
            }

    }
}

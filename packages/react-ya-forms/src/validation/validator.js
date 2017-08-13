import validator from 'validator';

export const errorCodes = {
    EMPTY: 'validator/EMPTY',
    INVALID_EMAIL: 'validator/INVALID_EMAIL',
    TOO_SHORT: 'validator/TOO_SHORT',
    TOO_LONG: 'validator/TOO_LONG',
    PASSWORDS_MISMATCH: 'validator/PASSWORDS_MISMATCH'
}

const defaultRule = {
    required: true
}

const validateValue = (value, rule = defaultRule) => {
    if (!value)
        value = ''
    rule = {...defaultRule, ...rule}

    // If not required and is empty
    if (!rule.required && !value)
        return

    if (!value)
        return errorCodes.EMPTY

    if (rule.email && !validator.isEmail(value))
        return errorCodes.INVALID_EMAIL


    console.debug(value)
    if (rule.minLen && !validator.isLength(value,
            {min: rule.minLen}))
        return errorCodes.TOO_SHORT

    if (rule.maxLen && !validator.isLength(value,
            {max: rule.maxLen}))
        return errorCodes.TOO_LONG
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
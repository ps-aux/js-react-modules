import React from 'react'
import Text from './Text'

const Button = ({children, label, ...rest}) =>
    <button {...rest}>
        {children || <Text>{label}</Text>}
    </button>

export default Button

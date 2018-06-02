import React from 'react'
import Text from './Text'
import { addClassName } from '../utils'

const cn = addClassName('button')

const Button = ({children, label, className, ...rest}) =>
    <button className={cn(className)} {...rest}>
        {children || <Text>{label}</Text>}
    </button>

export default Button

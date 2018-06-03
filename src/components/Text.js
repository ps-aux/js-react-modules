import React from 'react'
import { addClassName } from '../utils'

const cn = addClassName('text')

const Text = ({children, value, className, ...rest}) =>
    <span className={cn(className)} {...rest}>
        {children || value}
    </span>

export default Text

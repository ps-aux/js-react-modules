import React from 'react'
import { createClass } from './util'

const Button = ({label, icon, ...props, className}) =>
    <button className={createClass('button', className)}
            {...props}>
        {label}
    </button>

export default Button

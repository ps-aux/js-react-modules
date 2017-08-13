import React from 'react'

const Button = ({label, icon, ...props}) =>
    <button className="button-control" {...props}>
        {label}
    </button>

export default Button

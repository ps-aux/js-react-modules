import React from 'react'

const Text = ({children, value, ...rest}) =>
    <span {...rest}>
        {children || value}
    </span>

export default Text

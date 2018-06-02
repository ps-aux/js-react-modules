import React from 'react'

const style = {
    display: 'flex',
    flexDirection: 'column'
}

const View = ({ children, ...rest }) =>
    <div style={style} {...rest}>
        {children}
    </div>

export default View

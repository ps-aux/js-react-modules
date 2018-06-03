import React from 'react'
import { addClassName } from '../utils'

const column = {
    display: 'flex',
    flexDirection: 'column'
}

const row = {
    display: 'flex',
    flexDirection: 'row'
}

const cn = addClassName('view')

const View = ({children, className, horizontal = false, ...rest}) =>
    <div style={horizontal ? row : column} className={cn(className)} {...rest}>
        {children}
    </div>

export default View

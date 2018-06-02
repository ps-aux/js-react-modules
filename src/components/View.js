import React from 'react'
import { addClassName } from '../utils'

const style = {
    display: 'flex',
    flexDirection: 'column'
}

const cn = addClassName('view')

const View = ({children, className, ...rest}) =>
    <div style={style} className={cn(className)} {...rest}>
        {children}
    </div>

export default View

import React from 'react'
import PropTypes from 'prop-types'
import { createClass } from './util'

const TextInput = ({onChange, icon, onIconClick, className, ...props}) =>
    <div className={createClass('text-input', className)}>
        {icon && <img className={`input-icon ${onIconClick ? 'clickable' : ''}`}
                      onClick={onIconClick}
                      src={icon}
                      role="presentation"/>}
        <input onChange={e => onChange(e.target.value)}
               {...props}/>
    </div>

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TextInput

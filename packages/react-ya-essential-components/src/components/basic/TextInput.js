import React from 'react'
import PropTypes from 'prop-types'

const TextInput = ({onChange, icon, onIconClick, ...props}) =>
    <div className="text--control">
        {icon && <img className={`input-icon ${onIconClick ? 'clickable' : ''}`}
                      onClick={onIconClick}
                      src={icon}
                      role="presentation"/>}
        <input onChange={e => onChange(e.target.value)}
               {...props}/>
    </div>

TextInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TextInput

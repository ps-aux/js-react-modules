import React from 'react'
import PropTypes from 'prop-types'
import { createClass } from './util'

const TextArea = ({value, onChange, placeholder, rows = 4, className}) =>
    <div className={createClass('text-area', className)}>
        <textarea
            rows={rows}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}/>
    </div>

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TextArea

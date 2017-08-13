import React from 'react'
import PropTypes from 'prop-types'

const TextArea = ({value, onChange, placeholder, rows = 4}) =>
    <div className="textarea-control">
        <textarea
            rows={rows}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}/>
    </div>

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default TextArea

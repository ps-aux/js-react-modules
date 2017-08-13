import React from 'react'

const TextArea = ({value, onChange, placeholder, rows = 4}) => (
    <div className='textarea-control'>
        <textarea
            rows={rows}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}/>
    </div>)

TextArea.propTypes = {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
}

export default TextArea

import React from 'react'

export const asFormInput = InputComponent => {

    if (!InputComponent)
        throw new Error('InputComponent not specified')

    class FormInput extends React.Component {

        render() {
            const {error, className, ...childProps} = this.props

            const classes = [className, 'form-input']
            if (error)
                classes.push('has-error')

            return <div className={classes.join(' ')}>
                <InputComponent {...childProps}/>
                {error &&
                <div className="input-error">{error.text}</div>}
            </div>
        }
    }

    FormInput.isFormInput = true

    return FormInput
}

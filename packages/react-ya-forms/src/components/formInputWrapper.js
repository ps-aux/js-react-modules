import React, {Component} from "react";

export const asFormInput = InputComponent => {

    class FormInput extends React.Component {


        render() {
            const {error, className, ...childProps} = this.props

            return <div className={`form-input ${className}`}>
                <InputComponent {...childProps}/>
                {error &&
                <div className="input-error">{error.text}</div>}
            </div>
        }

    }

    FormInput.isFormInput = true

    return FormInput
}


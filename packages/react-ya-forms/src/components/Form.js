import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { validate } from 'src/validation/validator'

let _errorTranslator

class Form extends Component {

    static setGlobalErrorTranslator = translator => {
        _errorTranslator = translator
    }

    constructor (props) {
        super(props)

        this.validationRules = props.validationRules || {}

        const errors = props.errors || {}

        const vals = {}
        const initialVals = props.initialVals || {}

        this.setFields(props)
        this.fields.forEach(f => vals[f] = initialVals[f])

        this.state = {vals, errors}

        this.errorTranslator = props.errorTranslator || _errorTranslator

        if (!this.errorTranslator)
            console.warn('Error translator not set')
    }

    setFields (props) {
        this.fields = getInputNames(props)
    }

    componentWillReceiveProps (props) {
        if (props.errors) {
            this.setState({
                errors: {...this.state.errors, ...props.errors}
            })
        }
        this.setFields(props)
    }

    valChanged (name, val) {
        const vals = {...this.state.vals, [name]: val}
        this.setState({vals})
    }

    getVisibleVals () {
        const {vals} = this.state

        const res = {}
        this.fields.forEach(name => res[name] = vals[name])

        return res
    }

    onSubmit (e) {
        e.preventDefault()

        // Filter only those vals for which fiels are rendered
        const vals = this.getVisibleVals()

        const errors = validate(vals, this.validationRules)
        console.debug('Attempting to submit form:', vals)

        this.setState({errors})
        // No errors
        if (Object.keys(errors).length === 0)
            this.props.onSubmit({...vals})
        else {
            console.debug('Form has errors:', errors)
            if (this.props.onError)
                this.props.onError(errors)
        }
    }

    render () {

        const children = this.mappedChildren(this.props, [])
        const {className} = this.props

        const classes = ['ya-form', className]

        return <form onSubmit={e => this.onSubmit(e)}
                     className={classes.join(' ')}>
            {children}
        </form>
    }

    mappedChildren (props, namesAccum) {

        return React.Children.map(props.children,
            ch => {
                if (!ch) // Where to we get null from ? TODO find out
                    return ch

                // Has children
                if (hasChildren(ch)) {
                    // Recursively map all children
                    return React.cloneElement(ch, {
                        children: this.mappedChildren(ch.props, namesAccum)
                    })
                }

                if (!isFormInput(ch))
                    return ch

                const name = ch.props.name
                if (!name)
                    throw new Error(`Missing 'name' prop`)

                if (namesAccum.includes(name))
                    throw new Error(`Already contains input with name ${name}`)
                namesAccum.push(name)

                return this.enhancedInput(ch)
            })
    }

    enhancedInput (formInput) {
        const name = formInput.props.name
        const val = this.state.vals[name]
        const errorCode = this.state.errors[name]

        let error = null
        if (errorCode) {

            const text = this.errorTranslator ? this.errorTranslator(errorCode) : errorCode

            error = {
                code: errorCode, text
            }
        }

        return React.cloneElement(formInput, {
            onChange: val => {
                this.valChanged(name, val)
                const origOnChange = formInput.props.onChange
                if (origOnChange)
                    origOnChange(val)
            },
            value: val || '',
            error
        })
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Form

const isFormInput = ch => ch && ch.type && ch.type.isFormInput

const hasChildren = ch => ch && ch.props && ch.props.children

const isCollection = children => children.forEach

const findInputElements = children => {

    // TODO refactor - duplicated code
    // Children is not a list/iterable
    if (!isCollection(children)) {
        const ch = children
        if (isFormInput(ch))
            return [ch]
        else if (hasChildren(ch))
            return findInputElements(ch.props.children)
        else
            return []
    }

    const inputs = []

    children.forEach(c => {

        if (isFormInput(c)) {
            inputs.push(c)
        } else if (isCollection(c)) {
            // TODO duplicated code
            const res = findInputElements(c)
            inputs.push(...res)
        } else if (hasChildren(c)) {
            const childInputs = findInputElements(c.props.children)
            inputs.push(...childInputs)
        }

    })

    return inputs
}

const getInputNames = component =>
    findInputElements(component.children).map(e => {
        const name = e.props.name
        if (!name)
            throw new Error('Missing \'name\' property on', e)
        return name
    })

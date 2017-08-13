import ReactDOM from 'react-dom'
import React from 'react'
import Button from 'src/components/basic/Button'
import TextInput from 'src/components/basic/TextInput'
import TextArea from 'src/components/basic/TextArea'
import GenericForm from 'src/components/form/GenericForm'
import Form from 'src/components/form/Form'
import { FormTextInput } from 'src/components/form/inputs'

ReactDOM.render(
    <div id="showcase">
        <Button label="Button"/>
        <TextInput value="Some value" className="my-class"/>
        <TextArea value="Some value" className="my-class"/>

        <GenericForm
            schema={{
                fields: {name: {type: 'text'}}
            }}
            onSubmit={vals => console.debug('Submitted', vals)}
        />

        <Form values={{name: 'John Doe'}}>
            <FormTextInput name="name"/>
        </Form>

    </div>
    , document.getElementById('root')
)
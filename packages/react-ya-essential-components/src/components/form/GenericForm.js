import React from 'react'
import Form from 'src/components/form/Form'
import Button from 'src/components/basic/Button'
import { FormTextInput } from 'src/components/form/inputs'

const GenericForm = ({schema, onSubmit}) => (
    <Form onSubmit={onSubmit}>
        {Object.entries(schema.fields)
            .map(([name, def]) =>
                <FormTextInput key={name} name={name} type={def.type}/>)}

        <Button label="Submit"/>
    </Form>
)

export default GenericForm

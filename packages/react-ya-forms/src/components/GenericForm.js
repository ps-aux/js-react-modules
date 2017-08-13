import React from "react";
import {Form, FormTextInput} from 'src/lib/forms/components'
import Button from 'src/lib/controls/Button'

const GenericForm = ({schema, onSubmit}) => (
    <Form onSubmit={onSubmit}>
        {Object.entries(schema.fields)
            .map(([name, def]) =>
                <FormTextInput key={name} name={name} type={def.type}/>)}

        <Button label="Submit"/>
    </Form>
)

export default GenericForm

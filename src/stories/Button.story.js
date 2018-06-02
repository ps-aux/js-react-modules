import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '../index'

storiesOf('Button', module)
    .add('with children', () =>
        <Button onClick={action('clicked')}>
            Text as child
        </Button>)
    .add('with label', () =>
        <Button
            onClick={action('clicked')}
            label="Text as label"/>)

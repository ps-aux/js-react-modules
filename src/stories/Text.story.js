import React from 'react'

import { storiesOf } from '@storybook/react'
import { Text } from '../index'

storiesOf('Text', module)
    .add('as child', () =>
        <Text>
            A text
        </Text>)

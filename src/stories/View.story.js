import React from 'react'

import { storiesOf } from '@storybook/react'
import { View } from '../index'

storiesOf('View', module)
    .add('default', () =>
        <View>
            <div>Child 1</div>
            <div>Child 2</div>
            <div>Child 3</div>
        </View>)

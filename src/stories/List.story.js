import React from 'react'

import { storiesOf } from '@storybook/react'
import { List } from '..'

const Item = ({name}) => <div>{name}</div>

const items = [
    {name: 'apple', id: 1},
    {name: 'orange', id: 2}]

storiesOf('List', module)
    .add('with item Component', () =>
        <List items={items} component={Item}/>)
storiesOf('List', module)
    .add('with render props ', () =>
        <List items={items}
              render={(props, key) =>
                  <Item {...props} key={key}/>}
        />)

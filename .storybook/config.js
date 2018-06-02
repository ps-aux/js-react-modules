import { configure } from '@storybook/react'
import 'babel-plugin-external-helpers'

function loadStories () {
    require('../../src/stories')
}

configure(loadStories, module)

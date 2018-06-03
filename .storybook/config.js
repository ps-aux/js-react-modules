import { configure } from '@storybook/react'
import 'babel-plugin-external-helpers'
import { withInfo } from '@storybook/addon-info'
import { addDecorator } from '@storybook/react'

function loadStories () {
    addDecorator((story, context) => withInfo('common info')(story)(context))
    require('../src/stories')
}

configure(loadStories, module)

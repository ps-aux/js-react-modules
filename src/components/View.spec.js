import React from 'react'
import renderer from 'react-test-renderer'
import View from './View'

describe('View renders', () => {
    it('children properly', () => {
        const comp = renderer.create(
            <View>
                <div>Child 1</div>
                <div>Child 1</div>
            </View>)

        const tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('additional className', () => {
        const comp = renderer.create(
            <View className="additional">any</View>)

        const tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
    })

})

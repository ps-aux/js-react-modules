import React from 'react'
import renderer from 'react-test-renderer'
import Text from './Text'


describe('Text renders', () => {
    it('children content properly', () => {
        const comp = renderer.create(
            <Text>Text</Text>)

        const tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('text as value properly', () => {
        const comp = renderer.create(
            <Text value="Text"/>)

        const tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('additional className', () => {
        const comp = renderer.create(
            <Text value="any" className="additional"/>)

        const tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
    })
})

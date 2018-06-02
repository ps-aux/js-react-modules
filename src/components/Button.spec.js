import React from 'react'
import renderer from 'react-test-renderer'
import Button from './Button'

describe('Button renders', () => {
    it('children content properly', () => {
        const comp = renderer.create(
            <Button>Text</Button>)

        const tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('label text', () => {
        const comp = renderer.create(
            <Button label="Text"/>)

        const tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('additional className', () => {
        const comp = renderer.create(
            <Button label="any" className="additional"/>)

        const tree = comp.toJSON()
        expect(tree).toMatchSnapshot()
    })
})

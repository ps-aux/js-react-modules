import React from 'react'
import { shallow } from 'enzyme'
import List from './List'
import chai, { expect } from 'chai'
import subset from 'chai-subset'
import { zip } from 'ramda'

chai.use(subset)

export const Item = ({name}) => <div>{name}</div>

export const items = [
    {name: 'apple', id: 1},
    {name: 'orange', id: 2}]

const testList = render => {

    it('renders all the items', () => {
        const w = shallow(render({items}))

        expect(w.find(Item)).to.have.length(items.length)

    })

    it('passes props without mapProps', () => {
        const w = shallow(render({items}))

        const props = w.find(Item).map(n => n.props())

        zip(props, items).forEach(([p, d]) =>
            expect(p).to.containSubset(d))

    })

    it('passes props from mapProps', () => {
        const mapped = {
            a: 1,
            b: 2
        }
        const w = shallow(render({
            items,
            mapProps: () => mapped
        }))

        const props = w.find(Item).map(n => n.props())

        props.forEach(p =>
            expect(p).to.containSubset(mapped))

    })

    it('passes itemProps', () => {
        const itemProps = {
            a: 1,
            b: 2
        }
        const w = shallow(render({
            items,
            itemProps
        }))

        const props = w.find(Item).map(n => n.props())

        props.forEach(p =>
            expect(p).to.containSubset(itemProps))

    })

    describe('properly sets key', () => {
        it('default key as id', () => {
            const w = shallow(render({items}))

            const keys = w.find(Item).map(n => n.key())

            zip(keys, items).forEach(([k, i]) =>
                expect(k).to.equal(i.id.toString()))
        })

        it('from mapKey', () => {
            const items = [{
                x: 123
            }]
            const w = shallow(render({
                items,
                mapKey: i => i.x
            }))

            const keys = w.find(Item).map(n => n.key())

            zip(keys, items).forEach(([k, i]) =>
                expect(k).to.equal(i.x.toString()))
        })
    })

}

describe('List', () => {

    describe('with Component API', () => {
        testList(props =>
            <List {...props} component={Item}/>)
    })

    describe('with render props API', () => {
        testList(props =>
            <List {...props}
                  render={(props, key) =>
                      <Item {...props} key={key}/>}
            />)
    })

})

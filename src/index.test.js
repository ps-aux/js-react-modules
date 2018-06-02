import def, { Button, Text, View } from './index'

describe('index.js', () => {

    const isNameExported = (name, obj) => {
        it(`named export {${name}) works`, () => {
            expect(obj).toBeTruthy()
        })
    }

    const isPartOfDefaultExport = (name) => {
        it(`${name} is part of default export`, () => {
            expect(def[name]).toBeTruthy()
        })
    }

    isNameExported('Button', Button)
    isPartOfDefaultExport('Button')
    isNameExported('Text', Text)
    isPartOfDefaultExport('Text')
    isNameExported('View', View)
    isPartOfDefaultExport('View')

})

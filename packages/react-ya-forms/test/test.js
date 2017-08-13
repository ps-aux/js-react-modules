import { asFormInput } from '../lib'

it('asFormInput validates empty input', () => {
    expect(() => {
        asFormInput(null)
    }).toThrow()
})
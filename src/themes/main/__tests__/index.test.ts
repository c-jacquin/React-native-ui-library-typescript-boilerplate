import { mainTheme } from '../'

describe('main theme', () => {
    it('should have the correct shape', () => {
        expect(Object.keys(mainTheme)).toEqual(['colors', 'size'])
    })
})

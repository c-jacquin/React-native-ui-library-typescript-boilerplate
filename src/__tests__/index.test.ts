import * as lib from '../index'

describe('index', () => {
    it('should export an object of the good shape', () => {
        expect(Object.keys(lib)).toEqual(['mainTheme'])
    })
})

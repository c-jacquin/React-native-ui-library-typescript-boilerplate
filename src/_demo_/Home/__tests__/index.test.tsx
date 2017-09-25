import * as React from 'react'
import * as renderer from 'react-test-renderer'

import Home from '../index'

describe('Home component', () => {
    it('should renders correctly', () => {
        const tree = renderer.create(<Home />)
        expect(tree).toBeDefined()
    })
})

import React from 'react'
import renderer from 'react-test-renderer'
import Root from '../index'

describe('Root component', () => {
    const tree = renderer.create(<Root />)

    it('should renders correctly', () => {
        expect(tree).toBeDefined()
    })
})

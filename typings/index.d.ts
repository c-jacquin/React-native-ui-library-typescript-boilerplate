import React from 'react'
import { Theme } from '../src/themes/types'
// Import types here

interface MyLib {
    mainTheme: Theme
    // Insert exported stuff here
}

declare var lib: MyLib

export default lib
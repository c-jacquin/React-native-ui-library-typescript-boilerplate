import Expo from 'expo'
import React, { StatelessComponent } from 'react'
import { ThemeProvider } from 'glamorous-native'

import Root from '_demo_/Root'

import { theme } from './theme'

const Demo: StatelessComponent<any> = () => (
    <ThemeProvider theme={theme}>
        <Root />
    </ThemeProvider>
)

Expo.registerRootComponent(Demo)

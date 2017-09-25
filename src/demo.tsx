import Expo from 'expo'
import React, { StatelessComponent } from 'react'
import { ThemeProvider } from 'glamorous-native'

import Root from '_demo_/Root'

import { mainTheme } from 'themes/main'

const Demo: StatelessComponent<any> = () => (
    <ThemeProvider theme={mainTheme}>
        <Root />
    </ThemeProvider>
)

Expo.registerRootComponent(Demo)

import Expo from 'expo'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StatusBar, ScrollView, Text } from 'react-native'
import { View } from 'glamorous-native'
import { ThemeProvider } from 'glamorous-native'

import { mainTheme } from '../src/themes/main'
import Navigator from './navigator'

class Demo extends PureComponent<any, any> {
    render() {
        return (
            <ThemeProvider theme={mainTheme}>            
                <View flex={1}>
                    <StatusBar hidden={true} />
                    <Navigator />
                </View>
            </ThemeProvider>
        )
    }
}

Expo.registerRootComponent(Demo)

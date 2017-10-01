import Expo from 'expo'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StatusBar, ScrollView, Text } from 'react-native'
import { View, ThemeProvider } from 'glamorous-native'

import { mainTheme } from '../src/themes/main'
import Navigator from './navigator'

class Demo extends Component<void, void> {
    
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

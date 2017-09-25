import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StatusBar, ScrollView, Text } from 'react-native'
import { View } from 'glamorous-native'
import { addNavigationHelpers } from 'react-navigation'

import Navigator from './navigator'

import {
    RootActionCreators,
    RootConnectedProps,
    RootProps,
    RootState,
} from './types'

class Root extends PureComponent<RootProps, RootState> {
    render() {
        return (
            <View flex={1}>
                <StatusBar hidden={true} />
                <Navigator />
            </View>
        )
    }
}

export default Root

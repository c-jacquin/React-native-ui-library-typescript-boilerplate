import React, { Component } from 'react'
import { ScrollView, Text } from 'glamorous-native'

import { HomeProps, HomeState } from './types'

export class Home extends Component<HomeProps, HomeState> {
    static navigationOptions = {
        title: 'Home',
    }

    render() {
        return (
            <ScrollView>
                <Text>Home</Text>
            </ScrollView>
        )
    }
}

export default Home

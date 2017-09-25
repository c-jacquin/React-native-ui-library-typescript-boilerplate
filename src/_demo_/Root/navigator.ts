import { StackNavigator } from 'react-navigation'

import Home from '_demo_/Home'
// Import pages here

export default StackNavigator(
    {
        Home: {
            screen: Home,
        },
        // Insert pages here
    },
    {
        initialRouteName: 'Home',
    }
)

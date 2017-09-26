import glamorous from 'glamorous-native'
import { Theme } from 'themes/types'

interface ComponentWrapperProps {}

export default glamorous.view<ComponentWrapperProps, Theme>({
    flex: 1,
})
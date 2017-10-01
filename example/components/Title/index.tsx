import glamorous from 'glamorous-native'
import { Theme } from 'themes/types'

interface TitleProps {
    type: 'h1' |'h2'
}

export default glamorous.text<TitleProps, Theme>(
    {
        alignSelf: 'center',
        borderBottomWidth: 3,
    },
    (props, theme) => ({
        borderBottomColor: theme ? theme.colors.secondary : 'black',
        fontSize: theme ? theme.size[props.type] : 10,
    }),
)
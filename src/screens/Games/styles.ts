import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.BLACK,

    },
    header: {
        height: 250,
        width: '100%',
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        color: THEME.COLORS.WHITE,
        marginLeft: 8,

    },


});
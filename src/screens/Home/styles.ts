import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.BLACK,

    },
    card: {
        width: '100%',
        height: 538,
    },
    imageBackground: {
        width: '100%',
        height: '100%',
    },
    buttons: {

    },
    view1: {
        backgroundColor: THEME.COLORS.BLACK,
    },
    text: {
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        color: THEME.COLORS.WHITE,
        marginLeft: 8,
    },
    view2: {
        flexDirection: 'row',
        backgroundColor: THEME.COLORS.BLACK,
    },


});
import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    cover: {
        height: 75,
        width: 75,
        borderRadius: 8,

    },
    text: {
        color: THEME.COLORS.WHITE,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.SM,
        marginTop: 5,
        marginLeft: 5,
    }
});
import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cover: {
        height: 75,
        width: 75,
    },
    text: {
        color: THEME.COLORS.WHITE,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.SM,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    }
});
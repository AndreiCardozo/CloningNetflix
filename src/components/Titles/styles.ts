import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 350,
        marginLeft: 40,
        marginRight: 40,
        height: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardText: {
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        color: THEME.COLORS.WHITE,
    },
});
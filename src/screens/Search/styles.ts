import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.BLACK,

    },
    header: {
        height: 40,
    },
    view: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: THEME.COLORS.GREY_400,
    },
    image: {
        marginLeft: 16,
        width: 130,
        height: 80,
        borderRadius: 4,
        marginTop: 16,
    },
    text: {
        marginLeft: 16,
        color: THEME.COLORS.WHITE,
        fontSize: THEME.FONT_SIZE.MD,
    }

});
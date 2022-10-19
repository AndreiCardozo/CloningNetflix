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
    image: {
        marginLeft: 16,
        width: 130,
        height: 80,
        borderRadius: 4,
        marginTop: 16,
    },
    text: {
        marginLeft: 16,
        color: THEME.COLORS.GREY_200,
        fontSize: THEME.FONT_SIZE.MD,
        marginTop: 35,
    },
    view1: {
        flexDirection: 'row',
    },
    icon: {
        paddingTop: 10,
        backgroundColor: THEME.COLORS.GREY_500,
        marginTop: 10,
        marginLeft: 16,
    },
    textInput: {
        flex: 1,
        padding: 10,
        backgroundColor: THEME.COLORS.GREY_500,
        marginTop: 10,
        color: THEME.COLORS.GREY_200,

    },
    view2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
    },
    image1: {
        marginTop: 35,
    }
});
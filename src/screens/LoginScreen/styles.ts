import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.BLACK,

    },
    header: {
        alignItems: 'center',
        marginTop: 50,
        height: 80,
    },
    logo: {
        width: 86,
        height: 22,
    },
    view1: {
        marginTop: 50,
    },
    textInput: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: THEME.COLORS.GREY_500,
        marginTop: 10,
        color: THEME.COLORS.GREY_200,
        borderRadius: 4,
        marginHorizontal: 10, 


    },
    button: {
        padding: 10,
        backgroundColor: THEME.COLORS.GREY_500,
        marginTop: 30,
        color: THEME.COLORS.GREY_200,
        borderColor: THEME.COLORS.WHITE,
        borderRadius: 4,
        marginBottom: 20,
        marginHorizontal: 10,
    },

    touchableopacity: {
        padding: 10,
        backgroundColor: THEME.COLORS.BLACK,
        marginTop: 10,
        color: THEME.COLORS.WHITE,

    },
    textButton: {
        color: THEME.COLORS.WHITE,
        alignSelf: 'center',
        borderColor: THEME.COLORS.WHITE,

    }

});
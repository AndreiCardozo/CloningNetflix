import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.COLORS.BLACK,
    },
    header: {
        alignItems: 'center',
        height: 50,
    },
    logo: {
        width: 86,
        height: 22,
        alignSelf: 'center',
    },
    textView: {
        alignItems: 'center',
    },
    body: {
        alignItems: 'center',
        marginTop: 150,
    },
    profiles: {
        marginTop: 20,
        flexDirection: 'row',
    },
    profile: {
        marginTop: 20,

    },
    text: {
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        color: THEME.COLORS.WHITE,
    }
});
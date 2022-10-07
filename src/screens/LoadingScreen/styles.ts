import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: THEME.COLORS.BLACK,
    },
    logo: {
        width: 86,
        height: 22,
        alignSelf: 'center',
    },

});
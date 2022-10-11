import { Image, View, } from 'react-native';

import { Movie } from "../../utils/emAltaList";

import { styles } from './styles';

export function MovieCard2({ image }: Movie) {
    return (
        <View style={styles.container}>
            <Image style={styles.cover} source={image} />
        </View>
    );
}

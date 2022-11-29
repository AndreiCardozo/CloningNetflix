import { Image, View, Text } from 'react-native';


import { styles } from './styles';

export function MovieCard1(data) {
    return (
        <View style={styles.container}>
            <Image style={styles.cover} source={{ uri: data.foto }} />
        </View>
    );
}

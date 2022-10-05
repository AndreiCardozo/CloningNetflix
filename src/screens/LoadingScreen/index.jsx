import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';


import logoNetflix from '../../assets/logonetflix.png';

export function LoadingScreen() {
    return (
        <View style={styles.container}>
            <Image source={logoNetflix} style={styles.logo} />
        </View>
    );
}
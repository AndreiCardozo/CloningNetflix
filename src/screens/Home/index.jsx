import React from 'react';
import { ImageBackground, View } from 'react-native';

import { styles } from './styles';

import { MovieCard } from '../../components/MovieCard';

import Background from '../../assets/backgroud.png';
export function Home() {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imageBackground} source={Background} />

        </View>
    );
}
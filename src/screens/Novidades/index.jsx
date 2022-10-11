import React from 'react';
import { Image, ImageBackground, TouchableOpacity, View, Text, FlatList } from 'react-native';

import { styles } from './styles';

import Background from '../../assets/background.png';

import { Headerhomepage } from '../../components/Headerhomepage';
import { Titles } from '../../components/Titles';
import { Buttons } from '../../components/Buttons';


export function Novidades() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <ImageBackground style={styles.imageBackground} source={Background}>
                    <Headerhomepage />
                    <Titles />
                    <Buttons styles={styles.buttons} />
                </ImageBackground>
            </View>

        </View >
    );
}
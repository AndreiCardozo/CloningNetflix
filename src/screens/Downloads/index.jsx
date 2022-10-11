import React from 'react';
import { Image, ImageBackground, TouchableOpacity, View, Text, FlatList } from 'react-native';

import { styles } from './styles';

import Background from '../../assets/background.png';

import { Headerhomepage } from '../../components/Headerhomepage';


export function Downloads() {
    return (
        <View style={styles.container}>
            <Headerhomepage />
        </View >
    );
}
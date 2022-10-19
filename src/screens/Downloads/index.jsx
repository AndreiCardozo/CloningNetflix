import React from 'react';
import { Image, ImageBackground, TouchableOpacity, View, Text, FlatList } from 'react-native';

import { styles } from './styles';

import Background from '../../assets/background.png';

import { Headerhomepage } from '../../components/Headerhomepage';


export function Downloads() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Headerhomepage />
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>Downloads</Text>
            </View>
        </View >
    );
}
import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';


export function Titles() {
    return (
        <View style={styles.container}>
            <Text style={styles.cardText}> Séries</Text>
            <Text style={styles.cardText}>Filmes</Text>
            <Text style={styles.cardText}>Categorias</Text>
        </View>
    );
}
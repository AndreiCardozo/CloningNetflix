import React from 'react';
import { View, Text,} from 'react-native';

import { styles } from './styles';

import { Headerhomepage } from '../../components/Headerhomepage';


export function RisadasRapidas() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Headerhomepage />
            </View>

            <View style={styles.body}>
                <Text style={styles.text}>Risadas Rapidas</Text>

            </View>
        </View >
    );
}
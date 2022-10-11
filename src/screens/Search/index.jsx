import React from 'react';
import { View,} from 'react-native';

import { styles } from './styles';

import { Headerhomepage } from '../../components/Headerhomepage';

export function Search() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>

                <Headerhomepage />

            </View>
        </View >
    );
}
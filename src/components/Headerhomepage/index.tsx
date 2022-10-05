import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

import Netflix from '../../assets/N.png';
import Vector from '../../assets/vector.png';
import Profile from '../../assets/profile/profile1.png';

export function Headerhomepage() {
    return (
        <View style={styles.container}>
            <Image style={styles.netflix} source={Netflix} />
            <View style={styles.view1}>
                <Image style={styles.vector} source={Vector} />
                <Image style={styles.profile} source={Profile} />
            </View>
        </View>
    );
}
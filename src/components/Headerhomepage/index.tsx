import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import Netflix from '../../assets/N.png';
import Vector from '../../assets/vector.png';
import Profile from '../../assets/profile/profile1.png';

import { useNavigation } from '@react-navigation/native';


export function Headerhomepage() {
    const navigation = useNavigation();

    function BackSelectionProfile() {
        navigation.navigate('SelectionProfile');
    }
    function BackHomePage() {
        navigation.navigate('Home');
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={BackHomePage}
            >
                <Image
                    style={styles.netflix}
                    source={Netflix} />
            </TouchableOpacity>
            <View style={styles.view1}>
                <Image style={styles.vector} source={Vector} />
                <TouchableOpacity
                    onPress={BackSelectionProfile}
                >
                    <Image
                        style={styles.profile}
                        source={Profile}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}
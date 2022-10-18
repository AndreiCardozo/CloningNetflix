import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';

import logoNetflix from '../../assets/logonetflix.png';
import { ProfileCard } from '../../components/ProfileCard';
import { PROFILE } from '../../utils/profile'
import { useNavigation } from '@react-navigation/native'

export function SelectionProfile() {
    const navigation = useNavigation();

    function openHome() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View
                style={styles.header}>
                <Image source={logoNetflix} style={styles.logo} />
            </View>

            <View style={styles.body} >
                <View style={styles.textView}>
                    <Text style={styles.text}>Quem está assistindo</Text>
                </View>

                <View style={styles.profiles}>
                    <ProfileCard
                        data={PROFILE[0]}
                        onPress={openHome}
                    />
                    <ProfileCard
                        data={PROFILE[2]}
                        onPress={openHome}
                    />
                </View>

            </View>
        </View >

    );
}
import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';

import logoNetflix from '../../assets/logonetflix.png';
import { ProfileCard } from '../../components/ProfileCard';
import { PROFILE } from '../../utils/profile'

export function SelectionProfile() {
    return (
        <View style={styles.container}>
            <View
                style={styles.header}>
                <Image source={logoNetflix} style={styles.logo} />
            </View>

            <View
                style={styles.body} >
                <View style={styles.textView}>
                    <Text style={styles.text}>Quem está assistindo</Text>
                </View>

                <View style={styles.profiles}>
                    <ProfileCard
                        data={PROFILE[0]}
                    />
                    <ProfileCard
                        data={PROFILE[1]}
                    />
                </View>
                <View style={styles.profile}>
                    <ProfileCard
                        data={PROFILE[2]}
                    />
                </View>
            </View>
        </View >

    );
}
import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './styles';

import { Headerhomepage } from '../../components/Headerhomepage';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export function Search() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Headerhomepage />
            </View>
            <ScrollView >
                <View styles={styles.view}>
                    <Image style={styles.image} source={require('../../assets/movies/cards/arremessofinal.jpg')} />
                    <Text style={styles.text}>Arremesso Final</Text>
                </View>
                <View styles={styles.view}>
                    <Image style={styles.image} source={require('../../assets/movies/cards/arremessandoalto.png')} />
                    <Text style={styles.text}>Arremessando Alto</Text>
                </View>
                <View styles={styles.view}>
                    <Image style={styles.image} source={require('../../assets/movies/cards/peakyblinders.jpg')} />
                    <Text style={styles.text}>Arremesso Final</Text>
                </View>
            </ScrollView>




        </View >
    );
}
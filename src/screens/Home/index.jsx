import React from 'react';
import { ImageBackground, View, Text, FlatList, ScrollView } from 'react-native';

import { styles } from './styles';

import Background from '../../assets/background.png';

import { Headerhomepage } from '../../components/Headerhomepage';
import { Titles } from '../../components/Titles';
import { Buttons } from '../../components/Buttons';
import { MovieCard2 } from '../../components/MovieCard2';
import { emAltaList } from '../../utils/emAltaList';
import { recomendadoList } from '../../utils/recomendadoList';
import { novidades } from '../../utils/novidades';

export function Home() {


    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <ImageBackground style={styles.imageBackground} source={Background}>
                    <Headerhomepage />
                    <Titles />
                    <Buttons styles={styles.buttons} />
                </ImageBackground>
            </View>
            <View style={styles.view1}>
                <Text style={styles.text}>
                    Em Alta</Text>
                <FlatList
                    keyExtractor={item => item.image}
                    data={emAltaList}
                    renderItem={({ item }) => <MovieCard2 {...item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.view1}>
                <Text style={styles.text}>
                    Recomendados</Text>
                <FlatList
                    keyExtractor={item => item.image}
                    data={recomendadoList}
                    renderItem={({ item }) => <MovieCard2 {...item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.view1}>
                <Text style={styles.text}>
                    Novidades</Text>
                <FlatList
                    keyExtractor={item => item.image}
                    data={novidades}
                    renderItem={({ item }) => <MovieCard2 {...item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>


        </ScrollView >
    );
}
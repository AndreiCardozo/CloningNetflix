import React, { useEffect, useState } from 'react';
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
import api from '../../services/api';
import { MovieCard1 } from '../../components/MovieCard1';

export function Home() {

    const [movies, setMovies] = useState([]);



    useEffect(() => {
        async function loadMovies() {
            const response = await api.get('/r-api/?api=filmes');
            //console.log(response.data);
            setMovies(response.data);
        }
        loadMovies();

    }, [])

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
                    Filmes API</Text>
                <FlatList
                    data={movies}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => <MovieCard1 {...item} />}
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
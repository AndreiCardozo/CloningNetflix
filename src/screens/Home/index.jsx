import React from 'react';
import { Image, ImageBackground, View, Text, FlatList, ScrollView } from 'react-native';

import { styles } from './styles';

import Background from '../../assets/background.png';

import { Headerhomepage } from '../../components/Headerhomepage';
import { Titles } from '../../components/Titles';
import { Buttons } from '../../components/Buttons';
import { MovieCard } from '../../components/MovieCard';
import { MOVIE, movieList } from '../../utils/movie';

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
                <Text style={styles.text}>FlatList</Text>
                <View style={styles.view1}>
                    <Text style={styles.text}>Novidades</Text>
                    <View style={styles.view2}>
                        <MovieCard data={MOVIE[1]} />
                        <MovieCard data={MOVIE[2]} />
                        <MovieCard data={MOVIE[0]} />
                        <MovieCard data={MOVIE[0]} />
                    </View>
                </View>
                <View style={styles.view1}>
                    <Text style={styles.text}>Aventura</Text>
                    <View style={styles.view2}>
                        <MovieCard data={MOVIE[2]} />
                        <MovieCard data={MOVIE[1]} />
                        <MovieCard data={MOVIE[1]} />
                        <MovieCard data={MOVIE[0]} />
                    </View>

                </View>
                <View style={styles.view1} >
                    <Text style={styles.text}>Ação</Text>

                    <View style={styles.view2}>
                        <MovieCard data={MOVIE[0]} />
                        <MovieCard data={MOVIE[1]} />
                        <MovieCard data={MOVIE[2]} />
                        <MovieCard data={MOVIE[2]} />
                    </View>

                </View>
            </View>
        </ScrollView>
    );
}
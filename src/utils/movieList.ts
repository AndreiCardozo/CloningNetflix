import { ImageProps } from "react-native";

export interface Movie {
    name: string;
    image: ImageProps["source"];
}


export const movieList: Movie[] = [
    {
        name: 'Blasted',
        image: require('../assets/movies/blasted.png')
    },
    {
        name: 'Den Of Thieves',
        image: require('../assets/movies/den_of_thieves.png')
    },
    {
        name: 'Hustle',
        image: require('../assets/movies/hustle.png')
    },
    {
        name: 'Hustle',
        image: require('../assets/movies/hustle.png')
    },
    {
        name: 'Hustle',
        image: require('../assets/movies/hustle.png')
    },
    {
        name: 'Hustle',
        image: require('../assets/movies/hustle.png')
    },
];
import { ImageProps } from "react-native";

export interface Movie {
    name: string;
    image: ImageProps["source"];
}


export const emAltaList: Movie[] = [
    {
        name: 'Blasted',
        image: require('../assets/movies/cyberpunk.png')
    },
    {
        name: 'Den Of Thieves',
        image: require('../assets/movies/theavengers.png')
    },
    {
        name: 'Hustle',
        image: require('../assets/movies/strangerthings.png')
    },
    {
        name: 'Peaky Blinders',
        image: require('../assets/movies/peakyblinders.png')
    },
    {
        name: 'Man From Toronto',
        image: require('../assets/movies/mantoronto.png')
    },
    {
        name: 'Money Heist',
        image: require('../assets/movies/moneyheist.png')
    },
    {
        name: 'Hustle',
        image: require('../assets/movies/hustle.png')
    },
    {
        name: 'Den Of Thieves',
        image: require('../assets/movies/den_of_thieves.png')
    },
    {
        name: 'Blasted',
        image: require('../assets/movies/blasted.png')
    },

];
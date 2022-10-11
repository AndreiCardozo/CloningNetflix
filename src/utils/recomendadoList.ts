import { ImageProps } from "react-native";

export interface Movie {
    name: string;
    image: ImageProps["source"];
}


export const recomendadoList: Movie[] = [
    {
        name: 'Blasted',
        image: require('../assets/movies/rato.png')
    },
    {
        name: 'Den Of Thieves',
        image: require('../assets/movies/theumbrellaacademy.png')
    },
    {
        name: 'Man vs Bee',
        image: require('../assets/movies/manvs.bee.png')
    },
    {
        name: 'Peaky Blinders',
        image: require('../assets/movies/peakyblinders.png')
    },
    {
        name: 'Hustle',
        image: require('../assets/movies/hustle.png')
    },
    {
        name: 'Money Heist',
        image: require('../assets/movies/moneyheist.png')
    },

];
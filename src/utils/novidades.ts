import { ImageProps } from "react-native";

export interface Movie {
    name: string;
    image: ImageProps["source"];
}


export const novidades: Movie[] = [
    {
        name: 'Swat Firefight',
        image: require('../assets/movies/swatfirefight.png')
    },
    {
        name: 'Spiderhead',
        image: require('../assets/movies/spiderhead.png')
    },
    {
        name: 'Ironchef',
        image: require('../assets/movies/ironchef.png')
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
        name: 'Chinckenhare',
        image: require('../assets/movies/rato.png')
    },
];
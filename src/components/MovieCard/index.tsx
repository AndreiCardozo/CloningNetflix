import React from 'react';
import { TouchableOpacity, Image, Text, TouchableOpacityProps, ImageSourcePropType } from 'react-native';

import { styles } from './styles';

interface MovieCardProps {
    name: string;
    cover: ImageSourcePropType;
}

interface Props extends TouchableOpacityProps {
    data: MovieCardProps;
}


export function MovieCard({ data, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Image
                style={styles.cover}
                source={data.cover}
            />

        </TouchableOpacity>
    );
}
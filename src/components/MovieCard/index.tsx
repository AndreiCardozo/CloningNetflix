import React from 'react';
import { TouchableOpacity, ImageBackground, Text, TouchableOpacityProps, ImageSourcePropType } from 'react-native';

import { styles } from './styles';

interface MrofileCardProps {
    name: string;
    cover: ImageSourcePropType;
}

interface Props extends TouchableOpacityProps {
    data: MrofileCardProps;
}


export function ProfileCard({ data, ...rest}: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <ImageBackground
                style={styles.cover}
                source={data.cover}>

            </ImageBackground>
            <Text style={styles.text}>
                {data.name}
            </Text>
        </TouchableOpacity>
    );
}
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import Info from '../../assets/buttons1/info.png';
import Play from '../../assets/buttons1/play.png';
import Mylist from '../../assets/buttons1/mylist.png';

export function Buttons() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={Mylist} style={styles.imageMyList} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={Play} style={styles.imagePlay} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={Info} style={styles.imageInfo} />
            </TouchableOpacity>
        </View>
    );
}
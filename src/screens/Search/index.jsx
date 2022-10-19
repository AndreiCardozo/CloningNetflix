import React from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

import { Headerhomepage } from '../../components/Headerhomepage';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export function Search() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Headerhomepage />
            </View>
            <View style={styles.view1}>
                <Feather name="search" size={20} color="#CBCBCB" style={styles.icon} />
                <TextInput
                    style={styles.textInput}
                    placeholderTextColor={'#CBCBCB'}
                    placeholder="Busque por série, filme, gênero, etc."
                    underlineColorAndroid='transparent'
                />
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.view2}>
                    <Image style={styles.image} source={require('../../assets/movies/cards/arremessofinal.jpg')} />
                    <Text style={styles.text}>Arremesso Final</Text>
                    <Image style={styles.image1} source={require('../../assets/playbutton.png')} />
                </View>
                <View style={styles.view2}>
                    <Image style={styles.image} source={require('../../assets/movies/cards/arremessandoalto.png')} />
                    <Text style={styles.text}>Arremessando Alto</Text>
                    <Image style={styles.image1} source={require('../../assets/playbutton.png')} />
                </View>
                <View style={styles.view2}>
                    <Image style={styles.image} source={require('../../assets/movies/cards/peakyblinders.jpg')} />
                    <Text style={styles.text}>Peaky Blinders</Text>
                    <Image style={styles.image1} source={require('../../assets/playbutton.png')} />
                </View>
                <View style={styles.view2}>
                    <Image style={styles.image} source={require('../../assets/movies/cards/arremessofinal.jpg')} />
                    <Text style={styles.text}>Arremesso Final</Text>
                    <Image style={styles.image1} source={require('../../assets/playbutton.png')} />
                </View>
                <View style={styles.view2}>
                    <Image style={styles.image} source={require('../../assets/movies/cards/arremessandoalto.png')} />
                    <Text style={styles.text}>Arremessando Alto</Text>
                    <Image style={styles.image1} source={require('../../assets/playbutton.png')} />
                </View>
                <View style={styles.view2}>
                    <Image style={styles.image} source={require('../../assets/movies/cards/peakyblinders.jpg')} />
                    <Text style={styles.text}>Peaky Blinders</Text>
                    <Image style={styles.image1} source={require('../../assets/playbutton.png')} />
                </View>
                <View style={styles.view2}>
                    <Image style={styles.image} source={require('../../assets/movies/cards/arremessofinal.jpg')} />
                    <Text style={styles.text}>Arremesso Final</Text>
                    <Image style={styles.image1} source={require('../../assets/playbutton.png')} />
                </View>
                <View style={styles.view2}>
                    <Image style={styles.image} source={require('../../assets/movies/cards/arremessandoalto.png')} />
                    <Text style={styles.text}>Arremessando Alto</Text>
                    <Image style={styles.image1} source={require('../../assets/playbutton.png')} />
                </View>
                <View style={styles.view2}>
                    <Image style={styles.image} source={require('../../assets/movies/cards/peakyblinders.jpg')} />
                    <Text style={styles.text}>Peaky Blinders</Text>
                    <Image style={styles.image1} source={require('../../assets/playbutton.png')} />
                </View>
            </ScrollView>
        </View >
    );
}
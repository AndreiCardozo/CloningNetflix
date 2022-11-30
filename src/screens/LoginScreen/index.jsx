import React, { useState } from 'react';
import { View, Image, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import firebase from '../../services/firebaseConnection';

import logoNetflix from '../../assets/logonetflix.png';

export function LoginScreen({ changeStatus }) {

    const [type, setType] = useState('login');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleLogin() {
        if (type === 'login') {
            const user = firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                    changeStatus(user.user.email)
                })
                .catch((err) => {
                    console.log(err);
                    alert('Deu algum erro');
                    return;
                })

        } else {
            const user = firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    changeStatus(user.user.email)
                })
                .catch((err) => {
                    console.log(err);
                    alert('Deu algum erro');
                    return;
                })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoNetflix} style={styles.logo} />
            </View>
            <View style={styles.view1}>
                <TextInput
                    style={styles.textInput}
                    placeholderTextColor={'#CBCBCB'}
                    placeholder="Email"
                    underlineColorAndroid='transparent'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.textInput}
                    placeholderTextColor={'#CBCBCB'}
                    placeholder="Senha"
                    underlineColorAndroid='transparent'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                >
                    <Text style={styles.textButton}>{type === 'login' ? 'Entrar' : 'Cadastrar'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setType(type => type === 'login' ? 'Entrar' : 'login')}
                    style={styles.touchableopacity}>
                    <Text style={styles.textButton}>{type === 'login' ? 'Novo por aqui? Inscreva-se agora.' : 'Já possuo uma conta'} </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
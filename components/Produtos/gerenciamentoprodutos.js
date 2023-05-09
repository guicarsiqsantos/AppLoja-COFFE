import React, { useState, useEffect, useRef } from 'react';
import {

    View, Text, StyleSheet,
    TouchableOpacity, Keyboard, FlatList, ActivityIndicator
} from 'react-native';

import { TextInput } from 'react-native-paper';

export default function gerenciamentoprodutos() {

    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState('');
    const [valor, setValor] = useState('');
    const [cor, setCor] = useState('');
    const [key, setKey] = useState('');

    return (

        <View style={styles.container}>

            <TextInput
                placeholder='Produto'
                left={<TextInput.Icon icon="car" />}
                maxLength={40}
                style={styles.input}
                onChangeText={(text) => setNome(text)}
                value={name}
            />

            <TextInput
                placeholder='Marca'
                left={<TextInput.Icon icon="sale" />}
                style={styles.input}
                onChangeText={(text) => setMarca(text)}
                value={marca}
            />

            <TextInput
                placeholder='Preço'
                left={<TextInput.Icon icon="sack" />}
                style={styles.input}
                onChangeText={(text) => setValor(text)}
                value={valor}
            />

            <TextInput
                placeholder='Cor'
                left={<TextInput.Icon icon="color" />}
                style={styles.input}
                onChangeText={(text) => setCor(text)}
                value={cor}
            />

        </View>

    );

}
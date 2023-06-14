import React, { useState, useEffect, useRef } from 'react';
import {

    View, Text, StyleSheet, Button,
    TouchableOpacity, Keyboard, FlatList, ActivityIndicator
} from 'react-native';

import { TextInput } from 'react-native-paper';
import firebase from '../../services/connectionFirebase'

export default function Perfil() {

    const [nome, setNome] = useState('');
    const [cpf, setcpf] = useState('');
    const [rg, setrg] = useState('');
    const [telefone, setTelefone] = useState('');
    const [genero, setGenero] = useState('');
    const [key, setKey] = useState('');

    //implementação dos métodos update ou insert 
    async function insertUpdate() {
        //editar dados 

        if (nome !== '' & cpf !== '' & setrg !== '' & telefone !== '' & genero !== '' & key !== '') {
            firebase.database().ref('perfil').child(key).update({
                nome: nome, cpf: cpf, setrg: setrg, telefone: telefone, genero: genero
            })

            Keyboard.dismiss();
            alert('Produto Editado!');
            clearFields();
            setKey('');
            return;
        }

        //cadastrar dados 

        let listarUsuario = await firebase.database().ref('perfil');

        let chave = perfil.push().key; //comando para salvar é o push 

        perfil.child(chave).set({
            nome: nome,
            cpf: cpf,
            setrg: setrg,
            telefone: telefone,
            genero: genero
        });

        Keyboard.dismiss();
        alert('Produto Cadastrado!');
        clearFields();
    }

    //métados para limpar os campos com valores

    function clearFields() {
        setNome('');
        setMarca('');
        setPreco('');
        setCor('');
    }

    return (

        <View style={styles.container}>

            <TextInput
                placeholder='Nome'
                left={<TextInput.Icon icon="face-woman" />}
                maxLength={40}
                style={styles.input}
                onChangeText={(text) => setNome(text)}
                value={nome}
            />

            <TextInput
                placeholder='CPF'
                left={<TextInput.Icon icon="id-card" />}
                style={styles.input}
                onChangeText={(text) => setcpf(text)}
                value={cpf}
            />

            <TextInput
                placeholder='RG'
                left={<TextInput.Icon icon="contacts" />}
                style={styles.input}
                onChangeText={(text) => setrg(text)}
                value={rg}
            />

            <TextInput
                placeholder='Telefone'
                left={<TextInput.Icon icon="phone-incoming" />}
                style={styles.input}
                onChangeText={(text) => setTelefone(text)}
                value={telefone}
            />
            <TextInput
                placeholder='Gernero'
                left={<TextInput.Icon icon="pencil-plus-outline" />}
                style={styles.input}
                onChangeText={(text) => setGenero(text)}
                value={genero}
            />

            <View style={styles.button}>
                <Button
                    onPress={insertUpdate}
                    title="Adicionar"
                    color="#3ea6f2"
                />
            </View>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        margin: 10,
    },

    input: {
        borderWidth: 1,
        borderColor: '#121212',
        height: 40,
        fontSize: 13,
        borderRadius: 8,
        marginBottom: 20
    },

    separator: {
        marginVertical: 5,
    },

    button: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#3ea6f2',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,

    },

    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },

    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 100,
        fontSize: 20
    },

    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 20,
    },

    listar: {
        fontSize: 20,
        textAlign: 'center'
    }
});








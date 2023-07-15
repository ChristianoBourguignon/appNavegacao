import React from 'react';
import { useNavigation  } from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native';

export default function Information( {route} ) {
    const titleNavigation = useNavigation();
    titleNavigation.setOptions({title: 'Informações de ' + route.params?.nome});

  return (
    <View style={styles.containerApp}>
        <View style={styles.containerInfo}>
            <Text>Nome: <Text style={styles.txtInfo}>{route.params?.nome}</Text></Text>
            <Text>Idade: <Text style={styles.txtInfo}>{route.params?.idade}</Text></Text>
            <Text>Profissão: <Text style={styles.txtInfo}>{route.params?.profissao}</Text></Text>
            <Text>Endereço: <Text style={styles.txtInfo}>{route.params?.endereco}</Text></Text>
            <Text>Numero: <Text style={styles.txtInfo}>{route.params?.numero}</Text></Text>
            <Text>Hobby: <Text style={styles.txtInfo}>{route.params?.hobby}</Text></Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    containerApp: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        textAlign: 'center'

    },
    containerInfo: {
        width: '90%',
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 20,
    },
})

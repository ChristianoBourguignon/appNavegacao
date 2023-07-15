import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native';

export default function Information() {
    const route = useRoute();
    const { info } = route.params;
    

  return (
    <View style={styles.containerApp}>
        { info === 'christiano' ? (
           <View style={styles.containerInfo}>
            <Text>Nome: <Text style={styles.txtInfo}>Christiano</Text></Text>
            <Text>Idade: <Text style={styles.txtInfo}>22</Text></Text>
            <Text>Profissão: <Text style={styles.txtInfo}>Assistente de E-commerce</Text></Text>
            <Text>Endereço: <Text style={styles.txtInfo}>Rua Sem Saida, 09</Text></Text>
            <Text>Numero: <Text style={styles.txtInfo}>21 99999-9999</Text></Text>
            <Text>Hobby: <Text style={styles.txtInfo}>Programar</Text></Text>
            </View>
        ):(<View/>)}
        { info === 'pedro' ? (
           <View style={styles.containerInfo}>
            <Text>Nome: <Text style={styles.txtInfo}>Pedro</Text></Text>
            <Text>Idade: <Text style={styles.txtInfo}>25</Text></Text>
            <Text>Profissão: <Text style={styles.txtInfo}>Padeiro</Text></Text>
            <Text>Endereço: <Text style={styles.txtInfo}>Rua Com Saida, 591</Text></Text>
            <Text>Numero: <Text style={styles.txtInfo}>21 99999-9999</Text></Text>
            <Text>Hobby: <Text style={styles.txtInfo}>Exercitar-se</Text></Text>
            </View>
        ):(<View/>)}
        { info === 'patrick' ? (
           <View style={styles.containerInfo}>
            <Text>Nome: <Text style={styles.txtInfo}>Patrick</Text></Text>
            <Text>Idade: <Text style={styles.txtInfo}>30</Text></Text>
            <Text>Profissão: <Text style={styles.txtInfo}>Padre</Text></Text>
            <Text>Endereço: <Text style={styles.txtInfo}>Rua Almeida Torres, 23</Text></Text>
            <Text>Numero: <Text style={styles.txtInfo}>21 99999-9999</Text></Text>
            <Text>Hobby: <Text style={styles.txtInfo}>Ler Livros</Text></Text>
            </View>
        ):(<View/>)}
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

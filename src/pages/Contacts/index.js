import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Contacts({navigation}) {

  return (
    <View>
        <View style={styles.containerInfo}>
            <Text>Nome: Christiano</Text>
            <Text>Idade: 22</Text>
            <Text>Profissão: Assistente de E-commerce</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Information', {info:'christiano'})} style={styles.buttonInfo}>
                <Text style={styles.txtButtonInfo}>Mais Informações...</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.containerInfo}>
            <Text>Nome: Pedro</Text>
            <Text>Idade: 25</Text>
            <Text>Profissão: Padeiro</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Information', {info:'pedro'})} style={styles.buttonInfo}>
                <Text style={styles.txtButtonInfo}>Mais Informações...</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.containerInfo}>
            <Text>Nome: Patrick</Text>
            <Text>Idade: 30</Text>
            <Text>Profissão: Padre</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Information', {info:'patrick'})} style={styles.buttonInfo}>
                <Text style={styles.txtButtonInfo}>Mais Informações...</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    containerInfo: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    txtButtonInfo: {
        fontWeight: 900,
        textAlign: 'center',
    },
    buttonInfo: {
        padding: 20,
        backgroundColor: '#fc06',
        width: '50%',
        alignContent: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 20,
    }
})

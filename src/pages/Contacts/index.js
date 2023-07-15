import React from 'react';
import { useNavigation  } from '@react-navigation/native';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Contacts({navigation}) {
    const titleNavigation = useNavigation();
    titleNavigation.setOptions({title: 'Contatos'});


  return (
    <ScrollView>
        <View style={styles.containerInfo}>
            <Text>Nome: Christiano</Text>
            <Text>Idade: 21</Text>
            <Text>Profissão: Assistente de E-commerce</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Information', 
            {
            nome: 'Christiano',
            idade: '21',
            profissao: 'Assistente de E-commerce',
            endereco: 'Rua Sem Saida, 09',
            numero: '21 99999-9999',
            hobby: 'Programar'
            }
            )} style={styles.buttonInfo}>
                <Text style={styles.txtButtonInfo}>Mais Informações...</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.containerInfo}>
            <Text>Nome: Pedro</Text>
            <Text>Idade: 24</Text>
            <Text>Profissão: Padeiro</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Information', {
                nome: 'Pedro',
                idade: '24',
                profissao: 'Padeiro',
                endereco: 'Rua Com Saida, 591',
                numero: '21 99999-9999',
                hobby: 'Exercitar-se'
            })} style={styles.buttonInfo}>
                <Text style={styles.txtButtonInfo}>Mais Informações...</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.containerInfo}>
            <Text>Nome: Patrick</Text>
            <Text>Idade: 27</Text>
            <Text>Profissão: Padre</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Information', {
                 nome: 'Patrick',
                 idade: '27',
                 profissao: 'Padre',
                 endereco: 'Rua Almeida Torres, 23',
                 numero: '21 99999-9999',
                 hobby: 'Ler Livros'
            })} style={styles.buttonInfo}>
                <Text style={styles.txtButtonInfo}>Mais Informações...</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.containerInfo}>
            <Text>Nome: Cristiane</Text>
            <Text>Idade: 46</Text>
            <Text>Profissão: Professora</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Information', {
                nome: 'Cristiane',
                idade: '46',
                profissao: 'Professora',
                endereco: 'Rua Taciana Costa, 23',
                numero: '21 99999-9999',
                hobby: 'Ensinar'
            })} style={styles.buttonInfo}>
                <Text style={styles.txtButtonInfo}>Mais Informações...</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.containerInfo}>
            <Text>Nome: Alexandre</Text>
            <Text>Idade: 50</Text>
            <Text>Profissão: Uber</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Information', {
                nome: 'Alexandre',
                idade: '50',
                profissao: 'Uber',
                endereco: 'Rua Alfredo Batista, 56',
                numero: '21 99999-9999',
                hobby: 'Ouvir Musica'
            })} style={styles.buttonInfo}>
                <Text style={styles.txtButtonInfo}>Mais Informações...</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    containerInfo: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 10,
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

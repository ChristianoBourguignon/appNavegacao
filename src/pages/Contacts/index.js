import React from 'react';
import { Text, View } from 'react-native';

export default function Contacts({navigation}) {
  return (
    <View>
        <Text>Christiano</Text>
        <Text onPress={()=>navigation.navigate('Information')}>Informações do Christiano</Text>
    </View>
  );
}

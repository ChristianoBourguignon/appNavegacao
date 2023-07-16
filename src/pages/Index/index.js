import React from "react";
import {View, Text} from 'react-native';

export default function appIndex (){
    const titleNavigation = useNavigation();
    titleNavigation.setOptions({title: 'Home'});
    return (
        <View>
            <Text>Pagina principal</Text>
        </View>
    )
}
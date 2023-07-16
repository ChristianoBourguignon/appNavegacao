import React from "react";
import { View } from "react-native";
import Firebase from "../../API/";
import { getDatabase, ref, onValue } from "firebase/database";

export default function ChatSimples() {
    const reference = database().ref('/users/');
    const db = getDatabase();
    return (
        <View />
    )
};
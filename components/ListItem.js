import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ListItem({ title, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.item}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:  {
        paddingHorizontal: 15,
        height: 60,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    item: {
        fontSize: 20
    }
})
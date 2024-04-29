import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default DetailScreen = ({ route }) => {
    const title = route.params.title;
    const body = route.params.body;
    const name = route.params.name;

    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <Text>{name}</Text>
            <Text>{body}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
    },
});

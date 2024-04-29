import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";

export default function UsersScreen({ navigation }) {
    const [loading, setloading] = useState(true);
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();

        setUsers(data);
        setloading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <View style={styles.container}>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <FlatList
                    style={styles.list}
                    data={users}
                    keyExtractor={(x) => x.id}
                    renderItem={({ item }) => (
                        <ListItem
                            onPress={() =>
                                navigation.navigate("Post", {
                                    user_id: item.id,
                                    name: item.name
                                })
                            }
                            title={item.name}
                        />
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    list: {
        alignSelf: "stretch",
    },
});

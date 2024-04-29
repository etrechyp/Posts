import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ListItem from "../components/ListItem";

export default PostsScreen = ({ navigation, route }) => {
    const userId = route.params.user_id;
    const userName = route.params.name
    const [loading, setloading] = useState(true);
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();

        setPosts(data);
        setloading(false);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <View style={styles.container}>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <FlatList
                    style={styles.list}
                    data={posts.filter((x) => x.userId === userId)}
                    keyExtractor={(x) => x.id}
                    renderItem={({ item }) => (
                        <ListItem
                            onPress={() =>
                                navigation.navigate("Detail", {
                                    title: item.title,
                                    body: item.body,
                                    name: userName
                                })
                            }
                            title={item.title}
                        />
                    )}
                />
            )}
        </View>
    );
};

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

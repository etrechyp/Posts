import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UsersScreen from "./screens/Users";
import PostsScreen from "./screens/Posts";
import DetailScreen from "./screens/Detail";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="">
                <Stack.Screen name="Users" component={UsersScreen} />
                <Stack.Screen name="Post" component={PostsScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

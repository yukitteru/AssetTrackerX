import * as React from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ContainerScreen from './src/views/ContainerScreen/ContainerScreen';
import LocationScreen from './src/views/LocationScreen/LocationScreen';
import {View} from 'react-native';
import SearchScreen from './src/views/SearchScreen/SearchScreen';
import {Ionicons} from "@expo/vector-icons"
import {MaterialIcons} from "@expo/vector-icons"
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/views/Home/Home';
import ContainerAdd from './src/views/ContainerAdd/ContainerAdd';
import LocationAdd from './src/views/LocationAdd/LocationAdd';

const stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}/>
                <Stack.Screen
                    name="ContainerAdd"
                    component={ContainerAdd}
                    options={{ headerTitle: "Добавить контейнер" }}
                />
                <Stack.Screen
                    name="LocationAdd"
                    component={LocationAdd}
                    options={{ headerTitle: "Добавить местоположение" }}
                />
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}

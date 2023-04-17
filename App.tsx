import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContainerScreen from './src/views/ContainerScreen/ContainerScreen';
import LocationScreen from './src/views/LocationScreen/LocationScreen';
import { View } from 'react-native';
import SearchScreen from './src/views/SearchScreen/SearchScreen';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home, { HomeTabParamList } from './src/views/Home/Home';
import ContainerAdd from './src/views/ContainerAdd/ContainerAdd';
import LocationAdd from './src/views/LocationAdd/LocationAdd';
import { registerRootComponent } from 'expo';

export type AppStackParamList = {
  Home: NavigatorScreenParams<HomeTabParamList>;
  ContainerAdd: undefined;
  LocationAdd: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContainerAdd"
          component={ContainerAdd}
          options={{ headerTitle: 'Добавить контейнер' }}
        />
        <Stack.Screen
          name="LocationAdd"
          component={LocationAdd}
          options={{ headerTitle: 'Добавить локацию' }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default registerRootComponent(App);

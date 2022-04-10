import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Header from './Components/appBar';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{
                header: Header,
            }}>
                <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
                />
                <Stack.Screen 
                name="Detail"
                component={Detail}
                options={{
                    headerShown: true
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;
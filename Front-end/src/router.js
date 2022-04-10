import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Home from './pages/Home';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

function Routes(){
    return(
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                    />
                    <Stack.Screen 
                    name="Detail"
                    component={Detail}
                    options={{
                        headerShown: false
                    }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    )
}

export default Routes;

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#E5E5E5',
      accent: '#6EEBF0',
      details: '#C4C4C4',
      background: '#fff'  
    },
  };
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Home from './pages/Home';
import Login from './pages/Login';

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
                    name="Login"
                    component={Login}
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
      primary: '#5A55F2',
      accent: '#6EEBF0',
      details: '#C4C4C4',
      background: '#ffffff'  
    },
  };
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Home from './pages/Home';
import Login from './pages/Login';
import ListFol from './pages/ListFol';
import Header from './Components/appBar';

const Stack = createStackNavigator();

function Routes(){
    return(
    <PaperProvider theme={theme}>
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Login" screenOptions={{header:(props) => <Header {...props}/>} }>
                <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: true }}
                />
                <Stack.Screen 
                name="ListFol"
                component={ListFol}
                options={{ headerShown: true }}
                />
                <Stack.Screen 
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false
                 }}/>
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
      accentOpacity: '#6eebf04a',
      details: '#E4E4E4',
      background: '#ffffff',
      secondary: '#18BDC3'
    },
  };
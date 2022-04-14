import React from "react";
import { Button, Title, Subheading, TextInput } from 'react-native-paper';
import { StyleSheet, View, TextInput as Input, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'react-native-paper';
import api from "../../services/api";
import  { useNavigation } from '@react-navigation/native';
import axios from 'axios';

function Login (){
  const navigation = useNavigation();

  const signIn = () => {
    axios.post('http://localhost:5000/api/user/auth', {
        login: 'jpedo', 
        password: '501358'
      }).then(async (response) => {const { jwtToken } = response.data;
      await AsyncStorage.multiSet([
        ['@CodeApi:token', jwtToken],
      ]);
    }).then( () => ( AsyncStorage.getItem('@CodeApi:token')).then((token) => token=='undefined' ? console.log(token): navigation.navigate('Home'))).catch((error)=> {console.log(error)})
  };



  const {colors} = useTheme();
    const styles = StyleSheet.create({
      TextInput: {
        backgroundColor: "rgba(110, 235, 240, 0.3)",
        opacity: "80%",
        marginBottom: 15,
        width: "70%",
        alignSelf: "center",
        color: "#fffff",
        height: 50
      },
      Items: {
        top: 5,
        color: "#fff",
      },
      View:{
        backgroundColor: colors.primary,
        height: "100%",
      },
      Button: {
        backgroundColor: "#ffffff",
        width: "70%",
        borderRadius: "30px",
        alignSelf: "center",
        color: "#5A55F2",
      },
      Text: {
        fontSize: 20,
        color: colors.background,
        fontWeight: "bold",
      },
      TextButton: {
        fontSize: 20,
        color: colors.primary,
        fontWeight: "bold",
      },
      Title: {
        fontSize: 36,
        color: "#ffffff",
        fontFamily: 'tahoma',
        fontStyle: "normal",
        fontWeight: "bold",
        paddingBottom: 30,
      }
    });
      return(
      <>
      <View style = {styles.View}>
        <Subheading style = { styles.Text }>Welcome to</Subheading><br/>
        <Title style = { styles.Title }>B R I S K</Title>
          <TextInput
            mode="outlined"
            label="Username"
            placeholder="Type something"
            theme={{ roundness: 30 }}
            style = {styles.TextInput}
            left={<TextInput.Icon name="account" style = {styles.Items} color = {colors.background}/>}
          />
          <TextInput
            mode="outlined"
            label="Password"
            placeholder="Type something"
            theme={{ roundness: 30 }}
            style = {styles.TextInput}
            left={<TextInput.Icon name="lock" style = {styles.Items} color = {colors.background}/>}
          />
        <Button icon="" mode="contained" onPress={signIn} style = {styles.Button}>
          <Text style = {styles.TextButton}>Sign in</Text>
        </Button>
      </View >
      </>
    );}

    export default Login;
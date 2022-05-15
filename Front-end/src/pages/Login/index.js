import React, {useState} from "react";
import { Button, Title, Subheading, TextInput } from 'react-native-paper';
import { StyleSheet, View, TextInput as Input, Text, Icon } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'react-native-paper';
import  { useNavigation } from '@react-navigation/native';
import axios from 'axios';

function Login (){
  const navigation = useNavigation();
  const [secure, setSecure] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [menssage, setMenssage] = useState('');
  const signIn = () => {
    axios.post('http://localhost:5000/api/user/auth', {
        login: username, 
        password: password
      }).then(async (response) => {const { jwtToken } = response.data;
      await AsyncStorage.multiSet([
        ['@CodeApi:token', jwtToken],
      ]);
    }).then( () => ( AsyncStorage.getItem('@CodeApi:token'))
    .then(
      (token) => token=='undefined' ? setMenssage('Username or password is invalid'): navigation.navigate('Home', {token: token}
      )
      )
      ).catch((error)=> {console.log(error)})
  };



  const {colors} = useTheme();
    const styles = StyleSheet.create({
      TextInput: {
        backgroundColor: colors.accentOpacity,
        opacity: "80%",
        marginBottom: 15,
        width: "70%",
        alignSelf: "center",
        color: "#fffff",
        height: 50,
        borderColor: colors.background,
      },
      Items: {
        top: 5,
        color: colors.accent,
      },
      View:{
        backgroundColor: colors.primary,
        height: "100%",
      },
      Button: {
        backgroundColor: "#ffffff",
        width: "70%",
        borderRadius: 30,
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
      },
      Error: {
        fontSize: 24,
        color: "red",
      }
    });
      return(
      <>
      <View style = {styles.View}>
      <center>
        <Subheading style = { styles.Text }>Welcome to</Subheading><br/>
        
        <Title style = { styles.Title }>B R I S K</Title>
        </center>
          <TextInput
            mode="outlined"
            label="Username"
            onChange={event => setUsername(event.target.value)}
            value={username}
            placeholder="Type your login"
            theme={{ roundness: 30 }}
            style = {styles.TextInput}
            left={<TextInput.Icon name="account" style = {styles.Items} color = {colors.accent}/>}
          />
          <TextInput
            mode="outlined"
            label="Password"
            placeholder="Type your password"
            theme={{ roundness: 30, borderWidth: 1, borderColor: colors.accent}}
            onChange={event => setPassword(event.target.value)}
            style = {styles.TextInput}
            secureTextEntry={secure}
            right={<TextInput.Icon name="eye" style = {styles.Items} color = {colors.accent} onPress={() => setSecure(!secure)}/>}
            left={<TextInput.Icon name="lock" style = {styles.Items} color = {colors.accent}/>}
          />
        <Button icon="" mode="contained" onPress={signIn} style = {styles.Button}>
          <Text style = {styles.TextButton}>Sign in</Text>
        </Button>
        <center>
        <Text style={styles.Error}>{menssage}</Text>
        </center>
      </View >
      </>
    );}

    export default Login;
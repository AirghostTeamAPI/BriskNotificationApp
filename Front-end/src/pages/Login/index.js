import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Button, Title, Subheading, TextInput } from 'react-native-paper';
import { StyleSheet, View, TextInput as Input } from 'react-native';

const Login = () => (
  <>
  <View style = {styles.View}>
    <center>
    <Subheading style = { styles.Text }>Welcome to</Subheading><br/>
    <Title style = { styles.Title }>B R I S K</Title>  </center>
      <TextInput
        mode="outlined"
        label="Username"
        placeholder="Type something"
        theme={{ roundness: 30, colors: { primary: "#6EEBF0"} }}
        style = {styles.TextInput}
        left={<TextInput.Icon name="account" style = {styles.Items} />}
      />
      <TextInput
        mode="outlined"
        label="Password"
        placeholder="Type something"
        theme={{ roundness: 30, colors: { primary: "#6EEBF0"}}}
        style = {styles.TextInput}
        left={<TextInput.Icon name="lock" style = {styles.Items}/>}
      />
    <Button icon="" mode="contained" onPress={() => console.log('Pressed')} style = {styles.Button}>
      Sign in
    </Button>
  </View >
  </>
);

export default Login;

const styles = StyleSheet.create({
  TextInput: {
    backgroundColor: "rgba(110, 235, 240, 0.29)",
    opacity: "100%",
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
    backgroundColor: "#5A55F2",
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
    color: "#ffffff",
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
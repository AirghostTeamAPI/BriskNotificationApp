import React, { useEffect, useState } from "react";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Button, Title, Subheading, TextInput } from 'react-native-paper';
import { StyleSheet, View, TextInput as Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

async function registerForPushNotificationsAsync() {
  let pushToken;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return pushToken;
}

function Login() {
  const navigation = useNavigation();
  const [secure, setSecure] = useState(true);
  const [expoPushToken, setExpoPushToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [menssage, setMenssage] = useState('');

  useEffect(() => {
    registerForPushNotificationsAsync().then(pushToken => setExpoPushToken(pushToken));
    console.log(`HERE!!! ${expoPushToken}`)
  }, []);

  const signIn = () => {
    axios.post('http://localhost:5000/api/user/auth', {
      login: username,
      password: password,
      pushToken: expoPushToken
    }).then(async (response) => {
      const { jwtToken } = response.data;
      await AsyncStorage.multiSet([
        ['@CodeApi:token', jwtToken],
      ]);
    }).then(() => (AsyncStorage.getItem('@CodeApi:token'))
      .then(
        (token) => token == 'undefined' ? setMenssage('Username or password is invalid') : navigation.navigate('Home', { token: token }
        )
      )
    ).catch((error) => { console.log(error) })
  };



  const { colors } = useTheme();
  const styles = StyleSheet.create({
    TextInput: {
      backgroundColor: colors.accentOpacity,
      opacity: 80,
      marginBottom: 15,
      width: "70%",
      alignSelf: "center",
      color: "#ffffff",
      height: 50,
      borderColor: colors.background,
    },
    Items: {
      top: 5,
      color: colors.accent,
    },
    View: {
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
      fontStyle: "normal",
      fontWeight: "bold",
      paddingBottom: 30,
    },
    Error: {
      fontSize: 24,
      color: "red",
    }
  });
  return (
    <>
      <View style={styles.View}>
        <Subheading style={styles.Text}>Welcome to</Subheading>

        <Title style={styles.Title}>B R I S K</Title>
        <TextInput
          mode="outlined"
          label={expoPushToken}
          onChange={event => setUsername(event.target.value)}
          value={username}
          placeholder={expoPushToken}
          theme={{ roundness: 30 }}
          style={styles.TextInput}
          left={<TextInput.Icon name="account" style={styles.Items} color={colors.accent} />}
        />
        <TextInput
          mode="outlined"
          label="Password"
          placeholder="Type your password"
          theme={{ roundness: 30, borderWidth: 1, borderColor: colors.accent }}
          onChange={event => setPassword(event.target.value)}
          style={styles.TextInput}
          secureTextEntry={secure}
          right={<TextInput.Icon name="eye" style={styles.Items} color={colors.accent} onPress={() => setSecure(!secure)} />}
          left={<TextInput.Icon name="lock" style={styles.Items} color={colors.accent} />}
        />
        <Button icon="" mode="contained" onPress={signIn} style={styles.Button}>
          <Text style={styles.TextButton}>Sign in</Text>
        </Button>

        <Text style={styles.Error}>{menssage}</Text>

      </View >
    </>
  );
}

export default Login;
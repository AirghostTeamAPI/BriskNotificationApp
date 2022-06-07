import React, { useEffect, useState } from "react";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Button, Title, Subheading, TextInput } from 'react-native-paper';
import { StyleSheet, View, TextInput as Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import * as Location from 'expo-location';
import Geocoder from 'react-native-geocoding';
import { Snackbar } from "@react-native-material/core";

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
  const [message, setMessage] = useState('');
  const [country, setCountry] = useState('');


  useEffect(async () => {
    registerForPushNotificationsAsync().then(pushToken => setExpoPushToken(pushToken));

    let { status } = await Location.requestForegroundPermissionsAsync();
    console.log('passou aqui')
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }
    else {
      await getLocation();
    }

  }, []);

  async function getLocation() {
    let location = await Location.getCurrentPositionAsync({});
    Geocoder.init("AIzaSyCQrsTftjZKJ2hLa_q2wlNPWWa7RVtclGA")
    Geocoder.from(location.coords.latitude, location.coords.longitude)
      .then(json => {
        let address = json.results[0].address_components[6].long_name;
        setCountry(address);
        console.log(`${country}`);
      })
      .catch(error => console.warn(error));
  }

  async function signIn() {
    try {
      const response = await axios.post('https://brisk-notification-user.herokuapp.com/api/user/auth', {
        login: username,
        password: password,
        pushToken: expoPushToken,
        country: country
      });
      const { jwtToken } = response.data;
      const hour = new Date().getHours();
      jwtToken.length == 'undefined' ?
        setMessage('Username or password is invalid') :
        navigation.navigate('Home', { token: jwtToken })
          .then(() => axios.post(`https://brisk-notification-user.herokuapp.com/api/access`, {
            "hour": hour,
          }));
    } catch {
      (error) => {
        error.message == 'User not found' ? setMessage(error.message) : setMessage('Username or password is invalid');
        error.message == 'Password is incorrect' ? setMessage(error.message) : setMessage('Username or password is invalid')
      }
    }
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
          onChange={(text) => setUsername(text)}
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
          onChangeText={(text) => setPassword(text)}
          style={styles.TextInput}
          secureTextEntry={secure}
          right={<TextInput.Icon name="eye" style={styles.Items} color={colors.accent} onPress={() => setSecure(!secure)} />}
          left={<TextInput.Icon name="lock" style={styles.Items} color={colors.accent} />}
        />
        <Button icon="" mode="contained" onPress={() => signIn()} style={styles.Button}>
          <Text style={styles.TextButton}>Sign in</Text>
        </Button>

        <Snackbar
          message={message}
          style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}
        />

      </View >
    </>
  );
}

export default Login;
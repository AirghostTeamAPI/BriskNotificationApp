import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-web';



export default function Home() {
 const navigation = useNavigation();

 return (
   <View>
      <Text>Teste 2.1</Text>
      <Button onPress={()=> navigation.navigate('Login')}></Button>
      </View>
 )
}
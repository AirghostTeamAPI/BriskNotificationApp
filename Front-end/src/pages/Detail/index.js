import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-web';



export default function Detail() {
 const navigation = useNavigation();

 return (
   <View>
      <Text>Detail</Text>
      <Button onPress={()=> navigation.navigate('Home')}></Button>
      </View>
 )
}
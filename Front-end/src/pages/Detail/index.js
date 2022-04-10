import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-web';
import { useTheme } from 'react-native-paper';



export default function Detail() {
 const navigation = useNavigation();
 const {colors} = useTheme();
 const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.primary,
  },
});
 return (
   <View>
      <Text style = {styles.view}>Detail</Text>
      <Button onPress={()=> navigation.navigate('Home')}></Button>
      </View>
 )
}
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import  { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import CardVehicle from '../../Components/vehicle';


export default function Home() {
  const jwt = require("jsonwebtoken");

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTM5M2YzYWQxMzg4NmQ1Y2QzMzc3OCIsInVzZXJuYW1lIjoiSm_Do28gUGVkcm8iLCJlcXVpcG1lbnQiOiJNZXJjZWRlcywgQk1XLCBQb3JzY2hlIiwibG9naW4iOiJqcGVkcm8iLCJpYXQiOjE2NDk4MDk2NDl9.Q22NkF2IXl6Xa8oAeEXaMshK3Cx5jurT3AD0BgSduNs";

  const decoded = jwt.decode(token);
  
  const list = ['Mercedes','Porsche'];
  const navigation = useNavigation();
  const {colors} = useTheme();
  const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.accent
  },
});
 return (
      <View style = {styles.view}>
        {
          list.map((value) => <CardVehicle equipament = {value}/>)  
        }
      </View>
 )
}
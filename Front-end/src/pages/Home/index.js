import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import  { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import CardVehicle from '../../Components/vehicle';

export default function Home() {
 const navigation = useNavigation();
 const {colors} = useTheme();
 const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.accent,
  },
});
 return (
      <View>
        <CardVehicle style = {styles.view}/>
      </View>
 )
}
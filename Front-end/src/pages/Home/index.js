import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-web';
import { useTheme } from 'react-native-paper';
import CardVehicle from '../../Components/vehicle';
import Header from '../../Components/appBar';

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
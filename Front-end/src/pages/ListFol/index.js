import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Picker } from 'react-native';
import  { useNavigation } from '@react-navigation/native';
import { useTheme ,Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import CardFol from '../../Components/FOL';


export default function ListFol() {
 const navigation = useNavigation();
 const {colors} = useTheme();
 const [selectedValue, setSelectedValue] = useState("Todos");
 const styles = StyleSheet.create({
  picker:{
    marginLeft: "2%",
    marginRight: "2%",
    marginTop: "1%",
    height: "25px",
    borderColor: colors.accent,
    borderWidth: "1px", 
    borderRadius: "5px",
    width: "150px"
  }
});

 return (
   <View>
	  <Picker style = {styles.picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Todos" value="1" />
        <Picker.Item label="Porsche" value="2" />
        <Picker.Item label="Mercedes" value="3" />
        <Picker.Item label="Corvette" value="4" />
      </Picker>

    <CardFol/>

    </View>
 )
}


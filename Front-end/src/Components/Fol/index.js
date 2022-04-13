import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Picker } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';
import { Button as ButtonWeb } from 'react-native-web';
import { useTheme ,Avatar, Button, Card, Title, Paragraph, Colors } from 'react-native-paper';
import api from "../../services/api";

export default function CardFol() {

 const {colors} = useTheme();
    const styles = StyleSheet.create({
        view: {
          backgroundColor: colors.details   
        },
        card:{
          marginLeft: "2%",
          marginRight: "2%",
          marginTop: "1%",
          borderLeftWidth: "5px",
          borderLeftColor: colors.accent,
          backgroundColor: colors.background,
          
        }
      });


  const listByEquipment = async () => 
  { 
    
    try {            
      const response = await api.get('/api/fols', {equipment: 'Porsche'});
      const { equipment, title, issue_description} = response.data;
      await AsyncStorage.multiSet([
       ['@CodeApi:equipment', JSON.stringify(equipment)],
       ['@CodeApi:title', JSON.stringify(title)],
       ['@CodeApi:issue_description', JSON.stringify(issue_description)],
     ])
 
     } catch(err) {
     }
  };
  
    return(
      <Card style = {styles.card}>
      <Card.Title
       title= {'Inoperative Clutch Clarification'} subtitle={"• MRC-003/10  • Mercedes"} 
        subtitleStyle = {{color: colors.secondary, fontWeight: "bold"}}
      />
       <Button onPress={listByEquipment}> </Button>
     </Card>
    
  );
}


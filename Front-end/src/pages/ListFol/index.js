import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Picker } from 'react-native';
import  { useNavigation } from '@react-navigation/native';
import { useTheme ,Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import CardFol from '../../Components/FOL';
import api from "../../services/api";

export default function ListFol() {
 const navigation = useNavigation();
 const {colors} = useTheme();
 const [selectedValue, setSelectedValue] = useState("Todos");
 const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.primary,
    color: colors.background
  },
});

const jwt = require("jsonwebtoken");
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTM5M2YzYWQxMzg4NmQ1Y2QzMzc3OCIsInVzZXJuYW1lIjoiSm_Do28gUGVkcm8iLCJlcXVpcG1lbnQiOiJNZXJjZWRlcywgQk1XLCBQb3JzY2hlIiwibG9naW4iOiJqcGVkcm8iLCJpYXQiOjE2NDk4MDk2NDl9.Q22NkF2IXl6Xa8oAeEXaMshK3Cx5jurT3AD0BgSduNs";
const decoded = jwt.decode(token);
const decodedEquipament = decoded.equipment;
const stringDecodedEquipament = decodedEquipament.toString();
const listEquipment = stringDecodedEquipament.split(",");  
let fols;
const response = api.get('/api/fols', {equipment: listEquipment[0]})
  .then(response => 
    { fols = response.data;
    });
    console.log(fols);
  


return (
  <View>
   <Picker
       selectedValue={selectedValue}
       style={{ height: 25, width: 150 }}
       onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
     >
       <Picker.Item label="Todos" value="1" />
       <Picker.Item label="Porsche" value="2" />
   <Picker.Item label="Mercedes" value="3" />
   <Picker.Item label="Corvette" value="4" />
     </Picker>

{
  fols.map(fol => (
    
    <Card>
    <Card.Title
  //   title= 'teste' subtitle='• Teste • Teste' style = {styles.view}
     title= {fol.issue_description} subtitle={"• " + fol.equipment + " • " + fol.title} style = {styles.view}
    subtitleStyle = {{color: colors.secondary}}
    />   
   </Card>
  ))
}


      </View>
  )
}


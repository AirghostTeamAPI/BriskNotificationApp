import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme , Button, Card } from 'react-native-paper';
import api from "../../services/api";

export default function CardFol() {

 const {colors} = useTheme();
    const styles = StyleSheet.create({
        view: {
          backgroundColor: colors.details 
            
        },
      });


  const listByEquipment = async () => 
  { 
    const jwt = require("jsonwebtoken");

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTM5M2YzYWQxMzg4NmQ1Y2QzMzc3OCIsInVzZXJuYW1lIjoiSm_Do28gUGVkcm8iLCJlcXVpcG1lbnQiOiJNZXJjZWRlcywgQk1XLCBQb3JzY2hlIiwibG9naW4iOiJqcGVkcm8iLCJpYXQiOjE2NDk4MDk2NDl9.Q22NkF2IXl6Xa8oAeEXaMshK3Cx5jurT3AD0BgSduNs";
  
    const decoded = jwt.decode(token);
    const decodedEquipament = decoded.equipment;
    const stringDecodedEquipament = decodedEquipament.toString();
    const listEquipment = stringDecodedEquipament.split(",");
    
    try {  
      if(listEquipment.length > 1){
        for (let i = 0; i < listEquipment.length; i++) {
          const response = await api.get('/api/fols', {equipment: listEquipment[i]});
          const { equipment, title, issue_description} = response.data;
          return(
           <Card>
            <Card.Title
             title= {'Inoperative Clutch Clarification'} subtitle={"•MRC-003/10 •Mercedes"} style = {styles.view}

            subtitleStyle = {{color: colors.secondary}}
            />
             <Button onPress={listByEquipment}> </Button>
           </Card>
          
          );
        } 
        
      }    
      else{
        const response = await api.get('/api/fols', {equipment: listEquipment});
        axios.get('/api/fols', { headers: { Authorization: token } })
  .then(response => { console.log(response.data) })
        const { equipment, title, issue_description} = response.data;

        return(
          <Card>
          <Card.Title
           title= {'Inoperative Clutch Clarification'} subtitle={"•MRC-003/10 •Mercedes"} style = {styles.view}
          subtitleStyle = {{color: colors.secondary}}
          />
           <Button onPress={listByEquipment}> </Button>
         </Card>
        
      );
      }      
     } catch(err) {
     }
  };
}


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


  const listFolByEquipment = async () => 
  { 
    const jwt = require("jsonwebtoken");

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTM5M2YzYWQxMzg4NmQ1Y2QzMzc3OCIsInVzZXJuYW1lIjoiSm_Do28gUGVkcm8iLCJlcXVpcG1lbnQiOiJNZXJjZWRlcywgQk1XLCBQb3JzY2hlIiwibG9naW4iOiJqcGVkcm8iLCJpYXQiOjE2NDk4NTYzNTV9.8LCrejZ1XAwDtBpSnYiKWCCPRHtup12tr4HqqVi7KYs";
    const config = {
      headers: {
      'Authorization': `Bearer ${token}`
    }
  }
    const decoded = jwt.decode(token);
    const decodedEquipament = decoded.equipment;
    const stringDecodedEquipament = decodedEquipament.toString();
    const listEquipment = stringDecodedEquipament.split(",");
    
    try {  
   /*   if(listEquipment.length > 1){
        for (let i = 0; i < listEquipment.length; i++) {
          const response = await api.get('/api/fols', {equipment: listEquipment[i]});
          const { equipment, title, issue_description} = response.data;
          return(
           <Card>
            <Card.Title
             title= 'teste' subtitle='• Teste • Teste' style = {styles.view}
          //   title= {issue_description} subtitle={"• " + equipment + " • " + title} style = {styles.view}
            subtitleStyle = {{color: colors.secondary}}
            />
             <Button onPress={listFolByEquipment}> </Button>
           </Card>
          
          );
        } 
        
      }    
      else{ */
        const response = await api.get('/api/fols', { equipment: listEquipment, Authorization: `Bearer ${token}` })
        .then(response => { console.log(response.data) });
        const { equipment, title, issue_description} = response.data;

        return(
          <Card>
           <Card.Title
           
            title= {issue_description} subtitle={"• " + equipment + " • " + title} style = {styles.view}
           subtitleStyle = {{color: colors.secondary}}
           />
            <Button onPress={listFolByEquipment}> </Button>
          </Card>
         
         );
     // }      
     } catch(err) {
     }
  };
  return(
    <Card>
     <Card.Title
      title= 'teste' subtitle='• Teste • Teste' style = {styles.view}
   //   title= {issue_description} subtitle={"• " + equipment + " • " + title} style = {styles.view}
     subtitleStyle = {{color: colors.secondary}}
     />
      <Button onPress={listFolByEquipment}> </Button>
    </Card>
   
   );
}


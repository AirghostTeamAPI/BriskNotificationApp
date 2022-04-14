import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme ,Avatar, Button, Card, Title, Paragraph, Colors } from 'react-native-paper';
import api from "../../services/api";
import axios from  'axios'

export default function CardFol(props) {

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
  return(
    <Card style = {styles.card}>
      <Card.Title title= 'teste' subtitle='• Teste • Teste' 
      style = {styles.view} subtitleStyle = {{color: colors.secondary, fontWeight: "bold"}} 
     // title= {prop.issue_description} subtitle={"• " + props.equipment + " • " + prop.title} style = {styles.view}
     //subtitleStyle = {{color: colors.secondary}}   
     />
    </Card>
   );
}


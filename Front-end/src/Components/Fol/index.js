import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme , Button, Card } from 'react-native-paper';
import api from "../../services/api";
import axios from  'axios'

export default function CardFol(props) {

 const {colors} = useTheme();
    const styles = StyleSheet.create({
        view: {
          backgroundColor: colors.details 
            
        },
      });

  return(
    <Card>
     <Card.Title
   //   title= 'teste' subtitle='• Teste • Teste' style = {styles.view}
      title= {prop.issue_description} subtitle={"• " + props.equipment + " • " + prop.title} style = {styles.view}
     subtitleStyle = {{color: colors.secondary}}
     />   
    </Card>
   
   );
}


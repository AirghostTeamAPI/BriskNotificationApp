<<<<<<< HEAD
import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme, Card } from 'react-native-paper';
=======
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme ,Avatar, Button, Card, Title, Paragraph, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
>>>>>>> b2b32b001b23676742aa0f390b77165fbcc57f1f

export default function CardFol(props) {
  console.log(props.linha.ifViewed)
  const ifViewed = props.linha.ifViewed
  const title = props.linha.title;
  const equipment = props.linha.equipment
  const description = props.linha.issue_description;
<<<<<<< HEAD
  const navigation = useNavigation();
  const [pageNumber, setPage] = useState();


  const { colors } = useTheme();
  const styles = StyleSheet.create({
    card: {
      marginLeft: "2%",
      marginRight: "2%",
      marginTop: "1%",
      borderLeftWidth: 5,
      borderLeftColor: colors.accent,
      backgroundColor: colors.background,
    }
  });
  return (
    <Card key={title} onPress={() => { navigation.navigate("viewFol", { title: title }) }} style={styles.card}>
      <Card.Title title={description} subtitle={`• ${title} • ${equipment}`}
        subtitleStyle={{ color: colors.secondary, fontWeight: "bold" }}
      />
    </Card>
  );
=======
  const {colors} = useTheme();
  const styles = StyleSheet.create
  ({
    card:{
      marginLeft: "2%",
      marginRight: "2%",
      marginTop: "1%",
      borderLeftWidth: "5px",
      borderLeftColor: colors.accent,
      backgroundColor: colors.background,          
    },
    notifier:
    {
      marginLeft: "98%",
      color: "#64fa87"
    },
    notifierInvisible:
    {
      marginLeft: "98%",
      color: "#FFFFFF"
    }
  });

  if(ifViewed != true)
  {
  return(
    <Card style = {styles.card}>
      <Card.Title title= {description} subtitle= {`• ${title} • ${equipment}`} 
       subtitleStyle = {{color: colors.secondary, fontWeight: "bold"}} 
     />
      <Icon style = {styles.notifier} name="controller-record"/>
    </Card>
   );
  }
  else{
    return(
      <Card style = {styles.card}>
        <Card.Title title= {description} subtitle= {`• ${title} • ${equipment}`} 
         subtitleStyle = {{color: colors.secondary, fontWeight: "bold"}} 
       />
       <Icon style = {styles.notifierInvisible} name="controller-record"/>
      </Card>
     );
    }
>>>>>>> b2b32b001b23676742aa0f390b77165fbcc57f1f
}


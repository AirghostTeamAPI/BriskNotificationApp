import * as React from 'react';
import { Avatar, Card, useTheme } from 'react-native-paper';
import { StyleSheet} from 'react-native';
import  { useNavigation } from '@react-navigation/native';

function CardVehicle(props) {
    const {colors} = useTheme();

    const styles = StyleSheet.create({
        card:{
          marginLeft: "2%",
          marginRight: "2%",
          marginTop: "1%",
          borderLeftWidth: "5px",
          borderLeftColor: colors.accent,
          backgroundColor: colors.background
        }
  
      });

    const navigation = useNavigation();

    return (
    <div>
        <Card style = {styles.card} onPress={()=> navigation.navigate('ListFol')}>         
            <Card.Title
                title= {props.equipment}
                left={(props) => <Avatar.Icon {...props} icon="car" />}
            />          
        </Card>
    </div>
    );
}

export default CardVehicle;



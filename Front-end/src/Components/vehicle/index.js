import * as React from 'react';
import { Avatar, Card, useTheme } from 'react-native-paper';
import { StyleSheet} from 'react-native';
import  { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

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

    let _equipment;

    const listEquipmentByUser = async () => 
    { 
        
        try {            
        const response = await api.get('/api/user', {login: 'jpedro'});
        _equipment = response.data;
        
    
        } catch(err) {
            console.log('deu erro para chamar a api');
        }
    };

    return (
    <div>
        <Card style = {styles.card} onPress={()=> navigation.navigate('ListFol')}>         
            <Card.Title
                title= {props.equipament}
                left={(props) => <Avatar.Icon {...props} icon="car" />}
            />          
        </Card>
    </div>
    );
}

export default CardVehicle;



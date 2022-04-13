import * as React from 'react';
import { Avatar, Button, Card } from 'react-native-paper';
import  { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

function CardVehicle(props) {

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
        <Card onPress={listEquipmentByUser}>         
            <Card.Title
                title= {props.equipament}
                left={(props) => <Avatar.Icon {...props} icon="car" />}
            />          
        </Card>
    </div>
    );
}

export default CardVehicle;



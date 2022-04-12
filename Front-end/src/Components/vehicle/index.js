import * as React from 'react';
import { Avatar, Card } from 'react-native-paper';
import  { useNavigation } from '@react-navigation/native';

function CardVehicle() {
    const navigation = useNavigation();
    return (
    <div>
        <Card onPress={()=> navigation.navigate('ListFol')}>         
            <Card.Title
                title="veículo"
                left={(props) => <Avatar.Icon {...props} icon="car" />}
            />          
        </Card>
    </div>
    );
}

export default CardVehicle;



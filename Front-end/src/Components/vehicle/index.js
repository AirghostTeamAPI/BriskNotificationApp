import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import  { useNavigation } from '@react-navigation/native';

function CardVehicle() {
    const navigation = useNavigation();
    return (
    <div>
        <Card onPress={()=> navigation.navigate('Detail')}>         
            <Card.Title
                title="veículo"
                left={(props) => <Avatar.Icon {...props} icon="car" />}
            />
            
        </Card>
    </div>
    );
}

export default CardVehicle;



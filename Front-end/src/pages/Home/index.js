import React, {useState} from 'react';
import { View } from 'react-native';
import CardVehicle from '../../Components/vehicle';
import Header from '../../Components/appBar';

export default function Home({route}) {
  const { token } = route.params;
    const jwt = require("jsonwebtoken");
    const decoded = jwt.decode(token, {json:true});
    const decodedEquipment = decoded.equipment;
  const stringDecodedEquipment = decodedEquipment.toString();
  const listEquipment = stringDecodedEquipment.split(",");

 return (
      
      <View>
        <Header username= {decoded.username} backAction={false}/>
        {
          listEquipment.map((value) => <CardVehicle equipment = {value} token = {token}/>)
        }
      </View>
 )
}
import React from 'react';
import { View } from 'react-native';
import CardVehicle from '../../Components/vehicle';


export default function Home() {
  const jwt = require("jsonwebtoken");

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTM5M2YzYWQxMzg4NmQ1Y2QzMzc3OCIsInVzZXJuYW1lIjoiSm_Do28gUGVkcm8iLCJlcXVpcG1lbnQiOiJNZXJjZWRlcywgQk1XLCBQb3JzY2hlIiwibG9naW4iOiJqcGVkcm8iLCJpYXQiOjE2NDk4MDk2NDl9.Q22NkF2IXl6Xa8oAeEXaMshK3Cx5jurT3AD0BgSduNs";

  const decoded = jwt.decode(token);
  const decodedEquipament = decoded.equipment;
  const stringDecodedEquipament = decodedEquipament.toString();
  const listEquipment = stringDecodedEquipament.split(",");

 return (
      <View>
        {
          listEquipment.map((value) => <CardVehicle equipament = {value}/>)
        }
      </View>
 )
}
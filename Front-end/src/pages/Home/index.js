import React, { useState } from 'react';
import { View } from 'react-native';
import CardVehicle from '../../Components/vehicle';
import Header from '../../Components/appBar';

export default function Home({ route }) {
  const { token } = route.params;
  const jwt_decode = require("jwt-decode");
  const decoded = jwt_decode(token, { json: true });
  const decodedEquipment = decoded.equipment;
  const stringDecodedEquipment = decodedEquipment.toString();
  const listEquipment = stringDecodedEquipment.split(",");

  return (
    <View>
      <Header key={decoded.equipment} username={decoded.username} backAction={false} />
      {
        listEquipment.map((value) => <CardVehicle key={value} equipment={value} token={token} />)
      }
    </View>
  )
}
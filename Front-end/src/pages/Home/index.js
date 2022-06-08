import React, { useState } from 'react';
import { View } from 'react-native';
import CardVehicle from '../../Components/vehicle';
import Header from '../../Components/appBar';
import jwt_decode from 'jwt-decode';

export default function Home({ route }) {
  const { token } = route.params;
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
import React, {useState} from 'react';
import { View } from 'react-native';
import CardVehicle from '../../Components/vehicle';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({route}) {
  //const [token, setToken] = useState(); 
  const [stoken, setsToken] = useState(); 
  const { token } = route.params;

  //AsyncStorage.getItem(token).then((sToken) => setSToken(sToken));

  //const tokeen = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..Q22NkF2IXl6Xa8oAeEXaMshK3Cx5jurT3AD0BgSduNs";
    //AsyncStorage.getItem('@CodeApi:token').then((token) => setToken(token));
    const jwt = require("jsonwebtoken");
    const decoded = jwt.decode(token, {json:true});
    const decodedEquipment = decoded.equipment;
  const stringDecodedEquipment = decodedEquipment.toString();
  const listEquipment = stringDecodedEquipment.split(",");

 return (
      
      <View>
        {
          listEquipment.map((value) => <CardVehicle equipament = {value}/>)
        }
      </View>
 )
}
import React, {useState} from 'react';
import { View } from 'react-native';
import CardVehicle from '../../Components/vehicle';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const [token, setToken] = useState(); 
  AsyncStorage.getItem('@CodeApi:token').then((token) => setToken(token));
  const jwt = require("jsonwebtoken");
  const [sToken, setSToken] = useState();

  //AsyncStorage.getItem(token).then((sToken) => setSToken(sToken));

  //const tokeen = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..Q22NkF2IXl6Xa8oAeEXaMshK3Cx5jurT3AD0BgSduNs";

  console.log('HERE!!! ',JSON.stringify(token));

  const decoded = jwt.decode(token,{json:true});
  console.log('decoded!!! ',decoded);
  //const decodedEquipment = decoded.equipment;
  //console.log('decodedEq!!! ',decoded.equipment);
  //const stringDecodedEquipment = decodedEquipment.toString();
  //const listEquipment = stringDecodedEquipment.split(",");

 return (
      
      <View>
        {
          //listEquipment.map((value) => <CardVehicle equipament = {value}/>)
        }
      </View>
 )
}
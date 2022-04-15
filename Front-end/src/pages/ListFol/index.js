import React, { useState } from 'react';
import { View, StyleSheet, Picker } from 'react-native';
import  { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import CardFol from '../../Components/FOL';
import Axios from 'axios';

export default function ListFol({route}) {
  
 const navigation = useNavigation();
 const {colors} = useTheme();
 const [value, setValue] = useState();
 const styles = StyleSheet.create({
  picker:{
    marginLeft: "2%",
    marginRight: "2%",
    marginTop: "1%",
    height: "25px",
    borderColor: colors.accent,
    borderWidth: "1px", 
    borderRadius: "5px",
    width: "150px"
  }
});
const jwt = require("jsonwebtoken");
const token = route.params.token;
const selectedEquipmentParam = route.params.selectedEquipmentParam;
const decoded = jwt.decode(token);
const decodedEquipament = decoded.equipment;
const stringDecodedEquipament = decodedEquipament.toString();
const listEquipment = stringDecodedEquipament.split(", "); 
const selectedEquipment = selectedEquipmentParam.trim(); 

console.log(selectedEquipment);

React.useEffect(() => {
  Axios.get(`http://localhost:5000/api/fols/?equipment=${selectedEquipment}`, {headers: {
    "Authorization": `Bearer ${token}`}}).then((response)=>
  {setValue(response.data)});
},[]);

function listFolBySelectedEquipment(selectedValue){
  Axios.get(`http://localhost:5000/api/fols/?equipment=${selectedValue}`, {headers: {
      "Authorization": `Bearer ${token}`}}).then((response)=>
    {setValue(response.data)});
   
}

return (
  <View>
   <Picker
       style = {styles.picker}
       onValueChange={(itemValue) => (listFolBySelectedEquipment(itemValue))}
     >
         <Picker.Item label="Selecione" value="" />
       {      
        listEquipment.map((eq) => <Picker.Item label={eq} value={eq} />)
      }
     </Picker>
        {
           value?.map((linha)=><CardFol linha={linha}/>)
        }
      </View>
  )
}
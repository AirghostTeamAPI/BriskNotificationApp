import React, { useState } from 'react';
import { View, StyleSheet, Picker } from 'react-native';
import  { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import CardFol from '../../Components/FOL';
import api from "../../services/api";
import Axios from 'axios';

export default function ListFol() {
  
 const navigation = useNavigation();
 const {colors} = useTheme();
 const [value, setValue] = useState();
 const [selectedValue, setSelectedValue] = useState("Todos");
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
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTM5M2YzYWQxMzg4NmQ1Y2QzMzc3OCIsInVzZXJuYW1lIjoiSm_Do28gUGVkcm8iLCJlcXVpcG1lbnQiOiJNZXJjZWRlcywgQk1XLCBQb3JzY2hlIiwibG9naW4iOiJqcGVkcm8iLCJpYXQiOjE2NDk4MDk2NDl9.Q22NkF2IXl6Xa8oAeEXaMshK3Cx5jurT3AD0BgSduNs";
const decoded = jwt.decode(token);
const decodedEquipament = decoded.equipment;
const stringDecodedEquipament = decodedEquipament.toString();
const listEquipment = stringDecodedEquipament.split(", ");  

React.useEffect(() => {
   Axios.get(`http://localhost:5000/api/fols/?equipment=${listEquipment[0]}`, {headers: {
      "Authorization": `Bearer ${token}`}}).then((response)=>
    {setValue(response.data)});
  },[]);
return (
  <View>
   <Picker
       selectedValue={selectedValue}
       style = {styles.picker}
       onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
     >
       <Picker.Item label="Todos" value="1" />
       <Picker.Item label="Porsche" value="2" />
        <Picker.Item label="Mercedes" value="3" />
        <Picker.Item label="Corvette" value="4" />
     </Picker>
        {
           value?.map((linha)=><CardFol linha={linha}/>)
        }
      </View>
  )
}


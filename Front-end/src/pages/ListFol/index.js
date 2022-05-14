import React, { useState } from 'react';
import { View, StyleSheet, Picker } from 'react-native';
import  { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import CardFol from '../../Components/FOL';
import Axios from 'axios';
import Header from '../../Components/appBar';

export default function ListFol({route}) {
  
 const navigation = useNavigation();
 const {colors} = useTheme();
 const [value, setValue] = useState();
 const [categoriesList, setCategoriesList] = useState();
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
const decodedCategory = decoded.category;
console.log(decodedCategory);
const decodedEquipament = decoded.equipment;
const stringDecodedEquipament = decodedEquipament.toString();
const listEquipment = stringDecodedEquipament.split(", "); 
const selectedEquipment = selectedEquipmentParam.trim(); 

React.useEffect(() => {
  Axios.get(`http://localhost:5000/api/fols/?equipment=${selectedEquipment}`, {headers: {
    "Authorization": `Bearer ${token}`}}).then((response)=>
  {setValue(response.data)});

  Axios.get(`http://localhost:5000/api/fols/categories/?equipment=${selectedEquipment}`, {headers: {
    "Authorization": `Bearer ${token}`}}).then((response)=>
  {setCategoriesList(response.data)});
},[]);

function listFolBySelectedCategory(selectedValue){
  Axios.get(`http://localhost:5000/api/fols/?equipment=${selectedEquipment}&search=${selectedValue}`, {headers: {
      "Authorization": `Bearer ${token}`}}).then((response)=>
    {setValue(response.data)});
   
}

return (
  <View>
    <Header backAction={true} username={decoded.username}/>
   <Picker
       style = {styles.picker}
       onValueChange={(itemValue) => (listFolBySelectedCategory(itemValue))}
     >
         <Picker.Item label="Select" value="null" />
       {      
        categoriesList?.map((eq) => <Picker.Item label={eq} value={eq} />)
      }
     </Picker>
        {
           value?.map((linha)=><CardFol linha={linha}/>)
        }
      </View>
  )
}
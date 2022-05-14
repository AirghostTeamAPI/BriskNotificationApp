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
 const jwt = require("jsonwebtoken");
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
  const fetchData = async () => {
    const req1 = await Axios.get(`http://localhost:5000/api/fols/?equipment=${selectedEquipment}`, { headers: { "Authorization": `Bearer ${token}` } })

    const req2 = await Axios.get('http://localhost:5000/api/user/viewedFols', { headers: { "Authorization": `Bearer ${token}` } })
    const value = []
    for (let i = 0; i < req1.data.length; i++) {

      if (req2.data.userFols.includes(req1.data[i]._id)) {
        value.push({ title: req1.data[i].title, ifViewed: true, equipment: req1.data[i].equipment, issue_description: req1.data[i].issue_description })
      } else {
        value.push({ title: req1.data[i].title, ifViewed: false, equipment: req1.data[i].equipment, issue_description: req1.data[i].issue_description })
      }
    }
    return value;
  }

  fetchData().then((response) => { setValue(response) });
}, []);

function listFolBySelectedCategory(selectedValue){
  Axios.get(`http://localhost:5000/api/fols/?equipment=${selectedEquipment}&search=${selectedValue}`, {headers: {
      "Authorization": `Bearer ${token}`}}).then((response)=>
    {setValue(response.data)});
   
}

React.useEffect(() => {

},[]);

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
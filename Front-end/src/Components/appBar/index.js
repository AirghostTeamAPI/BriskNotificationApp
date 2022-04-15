import { Appbar, Searchbar, Menu, Divider, useTheme  } from 'react-native-paper';
import  React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import  { useNavigation } from '@react-navigation/native';
import Axios from  'axios';
import ModalDropdown from 'react-native-modal-dropdown';

function Header(props){
    const {colors} = useTheme();
    const [value, setValue] = useState();
    const styles = StyleSheet.create({
      searchbar:{
        color: colors.accent,
        backgroundColor: colors.accentOpacity,
        margin:"5%",
        height: "70%",
        width: "50%",
        borderColor: colors.accent,
        borderWidth: "1px",
        borderRadius: "10px",
      },
      menu:{
        color: colors.primary
      },
      items: {
        color: colors.accent
      }
    });

    const navigation = useNavigation();

    const _goBack = () =>  console.log('go back');
    
    const _handleMore = () => console.log('Shown more');

    const [searchQuery, setSearchQuery] = useState('');

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    const onChangeSearch = query => setSearchQuery(query);


    function searchFolByKeyWord(){
        Axios.get(`http://localhost:5000/api/fols/?search=${searchQuery}`, {headers: {
        "Authorization": `Bearer ${props.token}`}}).then((response)=>
        {setValue(response.data)});
    }


    if(props.backAction){
    return (
      <Appbar.Header>
        <Appbar.BackAction color = {colors.accent} onPress={()=> {navigation.goBack(null);}} />
        <Appbar.Content title=""/>

        <Searchbar style = {styles.searchbar} value={searchQuery} placeholder="Search keyword" onChangeText={onChangeSearch} onIconPress={searchFolByKeyWord}/>

        <Appbar.Action color = {colors.accent} icon="bell" onPress={_handleMore} />
        <Menu style = {styles.menu}
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action color = {colors.accent} icon="dots-vertical" onPress={openMenu} />}>
          <Menu.Item title={props.username} />
          <Divider />
          <Menu.Item onPress={() => {}} title="contact us" />
          <Menu.Item onPress={()=> navigation.navigate('Login')} title="logout" />
        </Menu>
      </Appbar.Header>
    )}
    else{
      return (
        <Appbar.Header>
          <Appbar.Content title="Home"/>
          <Appbar.Action color = {colors.accent} icon="bell" onPress={_handleMore} />
          <Menu style = {styles.menu}
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Appbar.Action color = {colors.accent} icon="dots-vertical" onPress={openMenu} />}>
            <Menu.Item title={props.username} />
            <Divider />
            <Menu.Item onPress={() => {}} title="contact us" />
            <Menu.Item onPress={()=> navigation.navigate('Login')} title="logout" />
          </Menu>
        </Appbar.Header>
      )
    }
  };
  
  export default Header;

import { Appbar, Searchbar, Menu, Divider, useTheme  } from 'react-native-paper';
import * as React from 'react';
import { StyleSheet} from 'react-native';
import  { useNavigation } from '@react-navigation/native';

function Header(){
    const {colors} = useTheme();

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

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    
    return (
      <Appbar.Header>
        <Appbar.BackAction color = {colors.accent} onPress={()=> {navigation.goBack(null);}} />
        <Appbar.Content title=""/>
        <Searchbar style = {styles.searchbar} placeholder="Search" onChangeText={onChangeSearch} value={searchQuery}/>
        <Appbar.Action color = {colors.accent} icon="bell" onPress={_handleMore} />
        <Menu style = {styles.menu}
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action color = {colors.accent} icon="dots-vertical" onPress={openMenu} />}>
          <Menu.Item title="Username" />
          <Divider />
          <Menu.Item onPress={() => {}} title="contact us" />
          <Menu.Item onPress={()=> navigation.navigate('Login')} title="logout" />
        </Menu>
      </Appbar.Header>
    );
  };
  
  export default Header;

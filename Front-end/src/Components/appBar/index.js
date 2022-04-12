import { Appbar, Searchbar, Menu, Divider  } from 'react-native-paper';
import * as React from 'react';
import  { useNavigation } from '@react-navigation/native';

function Header(){
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
        <Appbar.BackAction onPress={()=> {navigation.goBack(null);}} />
        <Appbar.Content title="Brisk"/>
        <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery}/>
        <Appbar.Action icon="bell" onPress={_handleMore} />
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}>
          <Menu.Item title="Username" />
          <Divider />
          <Menu.Item onPress={() => {}} title="contact us" />
          <Menu.Item onPress={()=> navigation.navigate('Login')} title="logout" />
        </Menu>
      </Appbar.Header>
    );
  };
  
  export default Header;

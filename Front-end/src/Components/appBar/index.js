import React, { useState } from 'react';
import { Appbar, Menu, Divider, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

function Header(props) {
  const { colors } = useTheme();
  const [value, setValue] = useState();
  const styles = StyleSheet.create({
    searchbar: {
      color: colors.accent,
      backgroundColor: colors.accentOpacity,
      margin: "5%",
      height: "70%",
      width: "50%",
      borderColor: colors.accent,
      borderWidth: 1,
      borderRadius: 10,
    },
    menu: {
      color: colors.primary
    },
    items: {
      color: colors.accent
    }
  });

  const navigation = useNavigation();

  const _goBack = () => console.log('go back');

  const _handleMore = () => console.log('Shown more');

  const [searchQuery, setSearchQuery] = useState('');

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  async function deleteUser(id) {
    await axios.patch(`https://brisk-notification-user.herokuapp.com/api/user/block?id=${id}`).then(()=>{ navigation.navigate('Login') });
  }

  if (props.backAction) {
    return (
      <Appbar.Header>
        <Appbar.BackAction color={colors.accent} onPress={() => { navigation.goBack(null); }} />
        <Appbar.Content title="" />
        <Appbar.Action color={colors.accent} icon="bell" onPress={_handleMore} />
        <Menu style={styles.menu}
          visible={visible}
          anchor={<Appbar.Action color={colors.accent} icon="dots-vertical" onPress={openMenu} />}>
          <Menu.Item title={props.username} />
          <Divider />
          <Menu.Item onPress={() => {deleteUser(props.id)}} title="Delete User" />
          <Divider />
          <Menu.Item onPress={() => { }} title="contact us" />
          <Menu.Item onPress={() => navigation.navigate('Login')} title="logout" />
        </Menu>
      </Appbar.Header>
    )
  }
  else {
    return (
      <Appbar.Header>
        <Appbar.Content title="Home" />
        <Appbar.Action color={colors.accent} icon="bell" onPress={_handleMore} />
        <Menu style={styles.menu}
          visible={visible}
          anchor={<Appbar.Action color={colors.accent} icon="dots-vertical" onPress={openMenu} />}>
          <Menu.Item title={props.username} />
          <Menu.Item onPress={()=> {deleteUser(props.id)}} title="Delete User" />
          <Divider />
          <Menu.Item onPress={() => { }} title="contact us" />
          <Menu.Item onPress={() => navigation.navigate('Login')} title="logout" />
        </Menu>
      </Appbar.Header>
    )
  }
};


export default Header;

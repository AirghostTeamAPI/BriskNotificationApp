import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function Header() {
  return (
    <Appbar.Header>
      <Appbar.Content title="Brisk" />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
    //css aqui >.<
    header:{
        backgroundColor: "#000"
    }
});
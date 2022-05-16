import React from 'react';
import { useTheme, Card } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';


export default function CardFol(props) {
  const navigation = useNavigation();
  const ifViewed = props.linha.ifViewed
  const title = props.linha.title;
  const equipment = props.linha.equipment
  const description = props.linha.issue_description;
  const { colors } = useTheme();
  const styles = StyleSheet.create
    ({
      card: {
        marginLeft: "2%",
        marginRight: "2%",
        marginTop: "1%",
        borderLeftWidth: 5,
        borderLeftColor: colors.accent,
        backgroundColor: colors.background,
      },
      notifier:
      {
        marginLeft: "98%",
        color: "#64fa87"
      },
      notifierInvisible:
      {
        marginLeft: "98%",
        color: "#FFFFFF"
      }
    });

  if (ifViewed != true) {
    return (
      <Card onPress={() => navigation.navigate("viewFol", { title })} style={styles.card}>
        <Card.Title title={description} subtitle={`• ${title} • ${equipment}`}
          subtitleStyle={{ color: colors.secondary, fontWeight: "bold" }}
        />
        <Icon style={styles.notifier} name="controller-record" />
      </Card>
    );
  }
  else {
    return (
      <Card key={title} onPress={() => navigation.navigate("viewFol", { title })} style={styles.card}>
        <Card.Title title={description} subtitle={`• ${title} • ${equipment}`}
          subtitleStyle={{ color: colors.secondary, fontWeight: "bold" }}
        />
        <Icon style={styles.notifierInvisible} name="controller-record" />
      </Card>
    );
  }
}


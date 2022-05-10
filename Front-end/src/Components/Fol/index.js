import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme, Card } from 'react-native-paper';

export default function CardFol(props) {
  const title = props.linha.title;
  const equipment = props.linha.equipment
  const description = props.linha.issue_description;

  const { colors } = useTheme();
  const styles = StyleSheet.create({
    card: {
      marginLeft: "2%",
      marginRight: "2%",
      marginTop: "1%",
      borderLeftWidth: "5px",
      borderLeftColor: colors.accent,
      backgroundColor: colors.background,
    }
  });
  return (
    <Card style={styles.card}>
      <Card.Title title={description} subtitle={`• ${title} • ${equipment}`}
        subtitleStyle={{ color: colors.secondary, fontWeight: "bold" }}
      />
    </Card>
  );
}


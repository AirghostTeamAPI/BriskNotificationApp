import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Picker } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';
import { Button as ButtonWeb } from 'react-native-web';
import { useTheme ,Avatar, Button, Card, Title, Paragraph, Colors } from 'react-native-paper';

  export default function CardFol() {
    const {colors} = useTheme();
    const styles = StyleSheet.create({
        view: {
          backgroundColor: colors.details 
            
        },
      });
      
    return(
        <Card>
        <Card.Title
        title="Titulo FOL" subtitle="•Palavra-chave FOL •Nome Carro" style = {styles.view}
        subtitleStyle = {{color: colors.secondary}}
        />
       </Card>
    );
};

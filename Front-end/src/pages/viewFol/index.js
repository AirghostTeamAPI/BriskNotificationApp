import React, { useState } from 'react';
import Axios from 'axios';
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';
import { Snackbar } from "@react-native-material/core";

export default function viewFol({ route }) {
    const [value, setValue] = useState();
    React.useEffect(() => {
        Axios.post(`https://api5-fatec.herokuapp.com/api/fol/${route.params.folData[1]}`);
        Axios.get(`https://api5-fatec.herokuapp.com/api/fol/${route.params.folData[0]}`).then((response) => { setValue(response.data)});
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {route.params.folData[2] === 'Mustang' ? <Pdf
                source={{ uri: 'https://henriquehelloworld.blob.core.windows.net/fatecpublic/FOL-MUS-FATEC.pdf' }}
                onError={(error) => {
                    console.log(error);
                }}
                page={value}
                style={styles.pdf} /> : <Snackbar
                message="Pdf of this vehicle does not exist!."
                style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}
              />}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});
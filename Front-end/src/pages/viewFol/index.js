import React, { useState } from 'react';
import Axios from 'axios';
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';

export default function viewFol({ route }) {
    console.log(route.params.title);
    const [value, setValue] = useState();

    React.useEffect(() => {
        Axios.get(`https://api5-fatec.herokuapp.com/api/fol/${route.params.title}`).then((response) => { setValue(response.data) });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Pdf
                source={{ uri: 'https://henriquehelloworld.blob.core.windows.net/fatecpublic/FOL-MUS-FATEC.pdf' }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                page={value}
                style={styles.pdf} />
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
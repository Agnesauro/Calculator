import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function ComponentTela(){
    return(
        <View>
        <TextInput
        style={styles.tela}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    tela:{
        backgroundColor: 'white',
        width: 450,
        height: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
});

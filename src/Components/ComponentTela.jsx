import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function ComponentTela(){
    return(
       <View>
        <View style={styles.calculadora}>
        <Text
        style={styles.tela}>Texto</Text>
        </View>
       </View>
    )
}

const styles = StyleSheet.create({
    tela:{
        backgroundColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        
    },

    calculadora:{
        backgroundColor: 'purple',
        height: 300,
        width: 250,
        borderRadius: 25,
    }
});

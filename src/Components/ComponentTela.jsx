import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function ComponentTela() {

    const pressionarBotao = (nomeBotao) => {
        Alert.alert(`Você pressionou: ${nomeBotao}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.calculadora}>
                
                <View style={styles.tela}>
                    <Text style={styles.textoTela}>0</Text>
                </View>

                <View style={styles.btn1}>
                    
                    <TouchableOpacity style={styles.botaoGeral} onPress={() => pressionarBotao('X')}>
                        <Text style={styles.textoBotao}>X</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoGeral} onPress={() => pressionarBotao('AC')}>
                        <Text style={styles.textoBotao}>AC</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoGeral} onPress={() => pressionarBotao('%')}>
                        <Text style={styles.textoBotao}>%</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoGeral} onPress={() => pressionarBotao('/')}>
                        <Text style={styles.textoBotao}>/</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.btn2}>
                    <TouchableOpacity style={styles.botaoGeral} onPress={() => pressionarBotao('7')}>
                        <Text style={styles.textoBotao}>7</Text>
                    </TouchableOpacity>
                    
                     <TouchableOpacity style={styles.botaoGeral} onPress={() => pressionarBotao('8')}>
                        <Text style={styles.textoBotao}>8</Text>
                    </TouchableOpacity>
                    
                     <TouchableOpacity style={styles.botaoGeral} onPress={() => pressionarBotao('9')}>
                        <Text style={styles.textoBotao}>9</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
    },

    calculadora: {
        backgroundColor: 'purple',
        height: 350, 
        width: 280, 
        borderRadius: 25,
        padding: 20, 
    },

    tela: {
        backgroundColor: 'white',
        height: 50, 
        borderRadius: 10,
        justifyContent: "center", 
        alignItems: "flex-end", 
        paddingRight: 15,
        marginBottom: 20,
    },

    textoTela: {
        color: 'black',
        fontSize: 30, 
    },

    btn1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    btn2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },

    botaoGeral: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Fundo semi-transparente
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textoBotao: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});
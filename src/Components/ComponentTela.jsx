
import { useState } from 'react';
import { StyleSheet, Text, View, Touchable, Button, TouchableOpacity, Alert } from 'react-native';

export default function ComponentTela() {

    const [valor, setValor] = useState('');



    function operacao() {

        let resultado = eval(valor);
        String(resultado)
        setValor(resultado);

    }

    return (
        <View style={styles.container}>
            <View style={styles.calculadora}>

                <View style={styles.tela}>
                    <Text style={styles.textoTela}>{valor || 0}</Text>
                </View>

                {/* Fileira 1 */}
                <View style={styles.linha}>
                    <TouchableOpacity style={styles.botaoGeral} onPress={() => setValor(valor + 'x')}>
                        <Text style={styles.textoBotao}>x</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoGeral} onPress={() => setValor(0)}>
                        <Text style={styles.textoBotao}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoGeral} onPress={() => setValor(valor + '%')}>
                        <Text style={styles.textoBotao}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoGeral} onPress={() => setValor(valor + '/')}>
                        <Text style={styles.textoBotao}>/</Text>
                    </TouchableOpacity>
                </View>

                {/* Fileira 2 */}
                <View style={styles.linha}>
                    <TouchableOpacity style={styles.botaoGeral} onPress={() => setValor(valor + '7')}>
                        <Text style={styles.textoBotao}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoGeral} onPress={() => setValor(valor + '8')}>
                        <Text style={styles.textoBotao}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoGeral} onPress={() => setValor(valor + '9')}>
                        <Text style={styles.textoBotao}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoGeral} onPress={() => setValor(valor + '*')}>
                        <Text style={styles.textoBotao}>*</Text>
                    </TouchableOpacity>
                </View>

                {/* Fileira 3 */}
                <View style={styles.linha}>
                    <TouchableOpacity style={styles.botaoGeral} onPress={() => setValor(valor + '4')}>
                        <Text style={styles.textoBotao}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoGeral} onPress={() => setValor(valor + '5')}>
                        <Text style={styles.textoBotao}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoGeral} onPress={() => setValor(valor + '6')}>
                        <Text style={styles.textoBotao}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoGeral} onPress={() => setValor(valor + '-')}>
                        <Text style={styles.textoBotao}>-</Text>
                    </TouchableOpacity>
                </View>

                {/* 2 últimas fileiras*/}
                <View style={styles.blocoInferior}>

                    <View style={styles.subBloco}>

                        <View style={styles.linha2}>
                            <TouchableOpacity style={styles.botaoGeral} onPress={() => setValor(valor + '1')}>
                                <Text style={styles.textoBotao}>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.botaoGeral} onPress={() => setValor(valor + '2')}>
                                <Text style={styles.textoBotao}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.botaoGeral} onPress={() => setValor(valor + '3')}>
                                <Text style={styles.textoBotao}>3</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.linha2}>
                            <TouchableOpacity style={styles.botaoGeral} onPress={() => setValor(valor + '0')}>
                                <Text style={styles.textoBotao}>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.botaoGeral} onPress={() => setValor(valor + '.')}>
                                <Text style={styles.textoBotao}>.</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.botaoGeral} onPress={operacao}>
                                <Text style={styles.textoBotao}>=</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.btnBig} onPress={() => setValor(valor + '+')}>
                        <Text style={styles.textoBotao}>+</Text>
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
        height: 410,
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

    linha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    blocoInferior: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    subBloco: {
        flex: 1,
        marginRight: 13,
    },

    linha2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    botaoGeral: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnBig: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: 50,
        height: 110,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textoBotao: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});
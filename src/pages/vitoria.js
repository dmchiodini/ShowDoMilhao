import 'react-native-gesture-handler'
import React from 'react'
import { Text, View, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import logo from '../images/logo.png'
import milhao from '../images/milhao.jpg'
const Vitoria = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={logo}
                    style={styles.logo} />
            </View>
            <View style={styles.caixaDeTexto}>
                {/* <Text style={styles.texto}> PARABÉNS!! {'\n'} VOCÊ FOI O GRANDE VENCEDOR =D </Text>
                <Image source={milhao}
                    style={styles.milhao} /> */}
                {/* <Text style = {styles.texto}> Sua premiação foi:</Text> */}
                {/* <Text style = {styles.texto}> 2000</Text> */}
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}
                    onPress={() => { navigation.navigate('PaginaJogo') }}>
                    <Text style={styles.buttonText}>Jogar Novamente</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => { navigation.navigate('PaginaHome') }}>
                    <Text style={styles.buttonText}>Menu</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style = {styles.button}
                onPress = {() =>{}}>
                    <Text style = {styles.buttonText}>Jogar Novamente</Text>
                </TouchableOpacity> */}
            </View>
        </SafeAreaView>
    )
}
export default Vitoria

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#172178',
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        width: 150,
        height: 70,
        margin: 10,
    },
    caixaDeTexto: {
        flex: 3,
        width: '75%',
        backgroundColor: '#b71b1b',
        borderRadius: 40,
        borderColor: 'gold',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerButton: {
        flex: 2,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    texto: {
        // flex: 1,
        textAlign: 'center',
        color: '#EBCD06',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        backgroundColor: '#b71b1b',
        width: 150,
        height: 50,
        shadowColor: "#000",
        borderColor: 'gold',
        borderWidth: 1,
        marginHorizontal: 10,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        borderRadius: 10
    },
    buttonText: {
        textAlign: "center",
        fontSize: 18,
        color: '#EBCD06',
    },
    milhao: {
        width: 200,
        height: 160,
        borderRadius: 15,
    }
})

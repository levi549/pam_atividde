import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,TouchableOpacity } from 'react-native';
export default function ResultCard({resultado}){

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>{resultado}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 200, 
        height: 70,
        backgroundColor: '#2187db',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,

    },
    texto:{
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center'
    
    }
})
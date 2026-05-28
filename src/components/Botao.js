import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';

export default function Botao({texto, onPress}){

    return(
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
            <Text style={styles.buttonText}>{texto}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button:{
    backgroundColor: '#2187db',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    marginBottom:10
    },
    buttonText:{
    color: '#050505',
    fontSize: 18,
    fontWeight: 'bold',
  },
})

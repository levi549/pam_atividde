import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput } from 'react-native';
import { useState } from 'react';
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';
import ResultCard from './src/components/Resultcard';
import Botao from './src/components/Botao';
export default function App() {
    const [gasolina, setGasolina] = useState(0)
    const [alcool, setAlcool] = useState(0)
    const [resultado, setResultado] = useState(' ')
    function calcular(){
        if(alcool == 0 || gasolina == 0){
            setResultado('Digite os valores para calcular');
            return;
        }
        if (gasolina*0.7 >alcool) {
            setResultado(`Abasteça com alcool \n O Alcool esta custando ${(alcool*100)/gasolina}% do valor da gasolina`);
        } else {
            setResultado(`Abasteça com gasolina \n A gasolina esta custando ${(gasolina*100)/alcool}% do valor do alcool`);  
        }
      
    }
  return (
    <View style={styles.container}>
      <Image source={require('./assets/posto_imagem.png')} style={styles.imagem}/>
      <Text>──────────────────────────────────────────────────</Text>
      <Text style={styles.label}>Preço do Etanol</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o preço do alcool"
        onChangeText={(alcool) => setAlcool(alcool)}
        value={alcool}
      />
      <Text style={styles.label}>Preço da Gasolina</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o preço da gasolina"
        onChangeText={(alcool) => setGasolina(alcool)}
        value={gasolina}
      />
     <Botao texto={"calcular"} onPress={calcular}/>

     <ResultCard resultado={resultado}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
    width:'100%'
  },
   imagem:{
    width: 250,
    height: 100,
    marginTop: 30,
    borderRadius: 20,
  },
    label:{
    fontSize: 20,
    marginBottom: 10,
    paddingHorizontal: 0,
    marginTop: 20,
  },
  input:{
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 18,
    width:'80%',
    height:30,
    padding:10

   
  },

});

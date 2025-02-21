import React, { useState } from 'react';
import { ScrollView, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [numero01, setNumero01] = useState('');
  const [numero02, setNumero02] = useState('');
  const [resultado, setResultado] = useState(null);

  const somar = () => {
    const soma = parseFloat(numero01) + 
parseFloat(numero02);
      setResultado(soma);
  };

  return (
    <ScrollView style={styles.corpo}>
    <Text style={styles.titulo}>CALCULADORA</Text>
    <TextInput style={styles.input} keyboardType="numeric" placeholder="Primeiro número" value={numero01} onChangeText={setNumero01}/>
    <TextInput style={styles.input} keyboardType="numeric" placeholder="Segundo número" value={numero02} onChangeText={setNumero02}/>

    <Button title="CALCULAR" onPress={somar}/>
    {resultado !== null && <Text style={styles.resultado}>Resultado: {resultado}</Text>}
    </ScrollView>
  );

};

const styles = StyleSheet.create({
    corpo: {
      flex: 1,
      justifyContent: 'center',
      allignItems: 'center',
      padding: 30
    },
    titulo: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 20
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: '#A9A9AA9',
      borderWidth: 2,
      marginBottom: 20,
      paddingHorizontal:20,
      borderRadius: 5
    },
    resultado: {
      fontSize: 36,
      marginTop: 20,
      fontWeight: 'bold'
    }
});

export default App;
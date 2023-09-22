import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, StatusBar, Button} from 'react-native';
import Form from './src/components/Form'
import colors from './src/utils/colors'

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);

  const onSubmit = ()=> {
    console.log('capital=>'+capital);
    console.log('interes=>'+interest);
    console.log('Meses=>'+months);
  }

  return (
    <>
    <StatusBar bardStyle="light-content"/>
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.titleApp}>Cotizador de prestamos</Text>
      <Form setCapital={setCapital} setInterest={setInterest} setMonths={setMonths} />
    </SafeAreaView>

    <View>
      <Text>Resultado</Text>
    </View>

    <View>
      <Button title="Enviar" onPress={onSubmit}/>
      <Text>Footer</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor:colors.PRYMARY_COLOR_DARK ,
    height:200,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:"center"
  },
  titleApp:{
    fontSize:25,
    fontWeight:"bold",
    color:'#FFFFFF',
    marginTop:15
  }
});


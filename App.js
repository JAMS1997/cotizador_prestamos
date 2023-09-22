import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, StatusBar, Button} from 'react-native';
import Form from './src/components/Form'
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation';
import colors from './src/utils/colors'

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);

  const calculate = ()=> {
    if(capital==null) {
      console.log("Añade el capital que quieres solicitar")
  }else if(interest==null) {
      console.log("Añade el interes del prestamo");
  }else if(months==null) {
      console.log("Añade la cantidad de meses");
  }else{
    const i = interest / 100;
    const fee = capital / ((1 - Math.pow(i+1,-months))/i);
    setTotal({
      monthlyFee: fee.toFixed(2).replace('.',','),
      totalPayable: (fee*months).toFixed(2).replace('.',',')
    });
  }
}
  return (
    <>
    <StatusBar bardStyle="light-content"/>
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.titleApp}>Cotizador de prestamos</Text>
      <Form setCapital={setCapital} setInterest={setInterest} setMonths={setMonths} />
    </SafeAreaView>
    <ResultCalculation/>
    <Footer calculate={calculate}/>

   
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


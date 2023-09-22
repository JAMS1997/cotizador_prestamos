import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ResultCalculation(props) {
    const { errorMessage , capital , interest , months , total} = props;
  return (
    <View>
        {total && <Text>Result total</Text>}
        <View >
        <Text style={styles.error}>{errorMessage}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})
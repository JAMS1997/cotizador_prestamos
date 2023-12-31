import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import colors from '../utils/colors'

export default function Footer(props) {
    const {calculate} = props;

return (
        <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.buttom} onPress={calculate}>    
                < Text style={styles.text}>Calcular</Text>
            </TouchableOpacity>
        </View>
    
)
}

const styles = StyleSheet.create({
    viewFooter:{
        position:'absolute',
        bottom:0,
        width:"100%",
        backgroundColor:colors.PRYMARY_COLOR,
        height:100,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttom:{
        backgroundColor:colors.PRYMARY_COLOR_DARK,
        padding:16,        
        borderRadius:20,
        width:"75%",
    },
    text:{
        fontWeight:"bold",
        fontSize:10,
        color:"#fff",
        textAlign: 'center',
    }
})
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Customcolors from '../constants/colors';

const numberContainer=props=>{
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
         </View>
    );
}

const styles=StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:Customcolors.accent,
        padding:10,
        borderRadius:10,
        marginVertical:10,
        justifyContent:'center'

    },
    number:{
        color:Customcolors.accent,
        fontSize:22
    }
});
export default numberContainer;
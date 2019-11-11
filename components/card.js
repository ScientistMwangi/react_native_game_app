import React from 'react';
import {View,StyleSheet} from 'react-native';

const card=props=>{
    return(
            <View style={{...props.style,...styles.card}}>
               { props.children}
            </View>
        );

};
const styles=StyleSheet.create({
    card:{
        alignItems:'center',
        // shadowColor:'black',
        // shadowOffset only IOS
        elevation:8,
        backgroundColor:'white',
        borderRadius:10,
        padding:20
    }
});
export default card;
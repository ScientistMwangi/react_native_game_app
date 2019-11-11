import React from "react";
import {View,Text,StyleSheet} from "react-native";

import Customcolors from '../constants/colors';

const Header=(props)=>{
    return (

        <View style={styles.Header}>
        <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    Header:{
        width:'100%',
        height:90,
        paddingTop:36,
        backgroundColor:Customcolors.primary,
        alignItems:'center',
        justifyContent:'center'

    },
    Title:{
        color:'black',
        fontSize:18
    }
});
export default Header;
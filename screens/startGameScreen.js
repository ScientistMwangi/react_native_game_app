import React,{useState} from 'react';
import {View,Alert,Text,StyleSheet,Button,TouchableWithoutFeedback,Keyboard} from 'react-native';

import Card from '../components/card';
import Customcolors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/numberContainer';

const startGameScreen=(props)=>{

 const[enteredVal,setEnteredVal]=useState('');
 const[confirmedNumber,setConfirmedNumber]=useState();
 const[number,setNumber]=useState();
 let confirmedOutput;

 inputHandler=(enteredVal)=>{
    setEnteredVal(enteredVal.replace(/[^0-9]/g,''));
     }

resetInputHandler=()=>{
   setEnteredVal('');
   setConfirmedNumber(false);
};
confrimInputHandler=()=>{
        const choosenNumber=parseInt(enteredVal);
        if( isNaN(choosenNumber) || choosenNumber<=0 || choosenNumber >99){
            Alert.alert('Invalid Input','Wrong input entered should be between 1-99 please try again!',[{text:'Okay',style:'destructive',onPress:resetInputHandler}]);
            return;
        }
        setConfirmedNumber(true);
        setNumber(choosenNumber);
        Keyboard.dismiss();
    };

if(confirmedNumber){
    confirmedOutput=
                    <Card style={styles.summaryCard}>
                    <Text>You Selected</Text>
                    <NumberContainer>{number}</NumberContainer>
                    <Button title='START GAME' onPress={()=>props.onStartGame(number)}/>
                    </Card>;
};

    return(
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
        <View style={styles.screen}>
            <Text style={styles.title}>Star a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                  <Input style={styles.input} 
                keyboardType='number-pad'
                maxLength={2}
                blurOnSubmit
                onChangeText={inputHandler}
                value={enteredVal}
                />
                <View style={styles.btnContainer} >
                    <View style={styles.button}>
                        <Button title="Reset" color={Customcolors.accent} onPress={resetInputHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm" color={Customcolors.primary} onPress={confrimInputHandler}/>
                    </View>
                </View>
            </Card>
            {confirmedOutput}

        </View>
    </TouchableWithoutFeedback>
    );
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
        //justifyContent:'flex-start'
    },
    title:{
        fontSize:20,
        marginVertical:10
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
     },
    btnContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15 ,
    },
    button:{
        width:80
    },
    input:{
        width:50,
        textAlign:'center'
    },
    summaryCard:{
        alignItems:'center',
        marginTop:20

    }

});

export default startGameScreen;
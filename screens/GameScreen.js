import React, {useState,useRef,useEffect} from 'React';
import {Text,View,Button,Alert,StyleSheet} from 'react-native'
import NumberContainer from '../components/numberContainer';
import Card from '../components/card';


const generateRandomBetween=(min,max,exclude)=>{
    min=Math.ceil(min);
    max=Math.floor(max);
    const randNum=Math.floor(Math.random()*(max-min))+min;
    if(randNum===exclude){
        return generateRandomBetween(min,max,exclude);
    }else{
        return randNum;
    }

};

const GameScreen=props=>{

    const [currentGuess,setCurrentGuess]=useState(
        generateRandomBetween(1,100,props.userChoice));

    const[rounds,setRounds]=useState(0);
    const currentLow=useRef(1);
    const currentHigh=useRef(100);

    
    useEffect(()=>{
        if(currentGuess===props.userChoice){
            console.log(rounds+' rounds');
            //return;
            props.onGameOver(rounds); 
        }
    },[currentGuess,props.userChoice,props.onGameOver]);

    const nextGuessHandler=direction=>{

        if( (direction==='lower' && currentGuess<props.userChoice)||
            (direction==='higher' && currentGuess>props.userChoice)
         ){
             Alert.alert('Wrong value!','You selected the wrong choice try again',[{text:'Sorry!',style:'cancel'}]);
             return;
        }

        if(direction==='lower'){
            currentHigh.current=currentGuess;

        }else{
            currentLow.current=currentGuess;
        }
        const nextNumber=generateRandomBetween(currentLow.current,currentHigh.current,currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(currentRounds=>currentRounds+1);

    }


    return ( 
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='LOWER' onPress={nextGuessHandler.bind(this,'lower')}/>
                <Button title='HIGHER'onPress={nextGuessHandler.bind(this,'higher')}/>
            </Card>
        </View>
    );
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        width:300,
        maxWidth:'80%',
        justifyContent:'space-around',
        marginTop:20


    }

});

export default GameScreen;
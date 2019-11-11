import React,{useState} from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/startGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
export default function App() {
 const[userNumber,setSelectedNumber]=useState();
 const[guessRounds,setGuessRounds]=useState(0);

 const configureNewGame=()=>{
  setGuessRounds(0);
  setSelectedNumber(null);

 };
  const startGamehandler=(selectedNumber)=>{
      setSelectedNumber(selectedNumber);
      setGuessRounds(0);
  };
 const gameOverHandler=numberOfRounds=>{
   setGuessRounds(numberOfRounds);
 }

 let content= <StartGameScreen onStartGame={startGamehandler}/>;
 if(userNumber && guessRounds<=0){
   content=<GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
 }else if(guessRounds>0){
   content=<GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGame}/>
 }

  return (
    <View style={styles.screen}>
      <Header title="Guessing Game"/>
     {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
     },
});

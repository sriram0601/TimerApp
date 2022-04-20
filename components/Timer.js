import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { millisecondsToHuman } from '../utils/TimerUtils';
import TimerButton from './TimerButton';

// PHASE: 1 export default function Timer({ title, project, elapsed }) {
   //const elapsedString = millisecondsToHuman(elapsed);
   // return (
   // <View style={styles.timerContainer}>
  //  <Text  style={styles.title}>{title}</Text>
   // <Text>{project}</Text>
  //  <Text  style={styles.elapsedTime}>{elapsedString}</Text>
   // <View style={styles.buttonGroup}>
  //  <TimerButton  color="blue"  small  title="Edit"  />
   // <TimerButton  color="blue"  small  title="Remove"  />
   // </View>
   // <TimerButton  color="#21BA45"  title="Start"  />
   // </View>  );  }
  //    Because this component will actually manage state, we’ll need to change it from a functional component to a class component.
//We’ll set the initial value of editFormOpen to false, which means that the form starts off as closed:

export default class Timer extends React.Component {

    handleRemovePress = () => {
      const { id, onRemovePress } = this.props;
      onRemovePress(id)
    }
  
    handleStartPress = () => {
      const { id, onStartPress } = this.props;
      onStartPress(id);
    }
  
    handleStopPress = () => {
      const { id, onStopPress } = this.props;
      onStopPress(id)
    }
  
    renderActionButton() {
       const { isRunning } = this.props;
  
       if (isRunning){
         return(
           <TimerButton
             color="#DB2828"
             title="stop"
             onPress={this.handleStopPress}
           />
         )
       }
  
       return (
         <TimerButton
           color="#21BA45"
           title="Start"
           onPress={this.handleStartPress}
         />
       )
    }
  
    render(){
      const { title, project, elapsed, onEditPress } = this.props
      const elapsedString = millisecondsToHuman(elapsed);
      return(
        <View style={styles.timerContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text>{project}</Text>
          <Text style={styles.elapsedTime}>{elapsedString}</Text>
          <View style={styles.buttonGroup}>
            <TimerButton color="blue" small title="Edit" onPress={onEditPress}/>
            <TimerButton color="blue" small title="Remove" onPress={this.handleRemovePress}/>
          </View>
          { this.renderActionButton()}
        </View>
      )
     }
  }
  
  
    const styles = StyleSheet.create({ 
        timerContainer: {
        backgroundColor: 'white', 
        borderColor: '#d6d7da', 
        borderWidth:  2,
        borderRadius:  10,
        padding:  15,
        margin:  15,
        marginBottom:  0,
        },
        title: { 
        fontSize:  14,
        fontWeight: 'bold',
        },
        elapsedTime: { 
        fontSize:  26, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        paddingVertical:  15,
        },
        buttonGroup: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        },
        });
        
import React from 'react';
import { StyleSheet, Text, View,ScrollView,KeyboardAvoidingView} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import EditableTimer from './components/EditableTimer';
import ToggleableTimerform from './components/ToggleableTimerForm';
import {newTimer} from './utils/TimerUtils';

export default class App extends React.Component {
  state ={
    timers:[ 
      {title:'Mow the Lawn',project:'House Chores',
    id: uuidv4(),
    elapsed: 5546099,
    isRunning:true,
  },

  {title:'Assignment',project:'SCE',
    id: uuidv4(),
    elapsed: 1246099,
    isRunning:false,
},
]
}

componentDidMount = () =>{
  const TIME_INTERVAL=1000;
  this.intervalid= setInterval(() => {
    const {timers}= this.state;
    this.setState({
      timers: timers.map(timers => {
        const {elapsed, isRunning}= timers;
        return{
          ...timers,
          elapsed: isRunning ? elapsed + TIME_INTERVAL : elapsed
        }
      })
    })
  }, TIME_INTERVAL)
}

handleFormSubmit = attrs =>{
  const {timers} = this.state;
  this.setState({
    timers:timers.map(timer =>{
      if(timer.id===attrs.id) {
        const{title,project}=attrs;
        return{
          ...timer,title,project
        }}
        else{ 
          return timer
        }
    })
  })
}

handleRemovePress = timerId =>{
  this.setState({timers: this.state.timers.filter(t => t.id != timerId)})
}

handleCreateSubmit = timer => {
  const{timers}=this.state;
  this.setState({
    timers:[newTimer(timer), ...timers]
  });
};

toggleTimer = timerId =>{
  this.setState(prevState => {
    const {timers} = prevState;
    return{
      timers: timers.map(timer => {
        const {id,isRunning} =timer;
        if(id===timerId) {
          return {
            ...timer,
            isRunning: !isRunning,
          };
        }
        return timer;
      })
    }
  })
}
  render(){
    const{timers}=this.state;
  
  return (
    <View style={styles.appContainer}>
    <View style={styles.titleContainer}>
      <Text style= {styles.title}>TIMERS</Text>
    </View>
    <KeyboardAvoidingView behavior='padding' style={styles.timerListContainer}>
      <ScrollView contentContainerStyle={styles.timerList}>
        <ToggleableTimerform isOpen={false} onFormSubmit={this.handleCreateSubmit}/>
        {
        timers.map(({title,project,id,elapsed,isRunning}) =>(
        <EditableTimer 
        key={id}
        id={id}
        title={title}
        project={project}
        elapsed={elapsed}
        isRunning={isRunning}
        onFormSubmit={this.handleFormSubmit}
        onRemovePress={this.handleRemovePress}
        onStartPress={this.toggleTimer}
        onStopPress={this.toggleTimer}/>
        )
        )
        }
      </ScrollView>
      </KeyboardAvoidingView>  
    </View>
  );
}
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  titleContainer:{
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomColor: '#06D7AD',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
  },
  timerList: {
    paddingBottom: 15,
  },
  timerListContainer: {
    flex: 1,
  },
});
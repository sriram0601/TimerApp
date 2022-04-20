import React from 'react';
import { StyleSheet, View } from 'react-native';

import TimerButton from './TimerButton';
import TimerForm from './TimerForm';

//PHASE: 1  
//export default function ToggleableTimerForm({ isOpen }) {
//return (
//<View style={[styles.container, !isOpen && styles.buttonPadding]}>
//{isOpen ? (<TimerForm  />) : (<TimerButton  title="+"  
//color="black"  />)}     </View>       );      }
//End of phase:1

export default class ToggleableTimerForm extends React.Component {
    state = {
      isOpen: false
    }
  
    handleFormOpen = () => {
      this.setState({ isOpen: true })
    }
  
    handleFormClose = () => {
      this.setState({ isOpen: false })
    }
  
    handleFormSubmit = timer => {
      const { onFormSubmit } = this.props;
      onFormSubmit(timer);
      this.setState({ isOpen: false })
    }
  
    render(){
      const { isOpen } = this.state
      return (
        <View style={[styles.container, !isOpen && styles.buttonPadding]}>
          { isOpen ? 
         
         (<TimerForm onFormSubmit={this.handleFormSubmit} 
          onFormClose={this.handleFormClose}/> ) :
           
          (<TimerButton title="+" color="red" 
           onPress={this.handleFormOpen} /> )  }

        </View>
      )
    }
  }


const styles = StyleSheet.create({
    container: { 
    paddingVertical:  10,
    },
    buttonPadding: { 
    paddingHorizontal:  15,
    },
    });
    


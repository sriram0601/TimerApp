import React from 'react';

import TimerForm from './TimerForm';
import Timer from './Timer';

// Phase:1 export default function EditableTimer({ 
   // id,
   // title, 
  //  project, 
   // elapsed, 
   // isRunning, 
   // editFormOpen,
   // }) {
    //if (editFormOpen) {
   // return  <TimerForm  id={id}  title={title}  project={project}  />;
   // }
   // return (
    //<Timer
   // id={id} 
    //title={title} 
   // project={project} 
   // elapsed={elapsed}
   // isRunning={isRunning}
   //End of Ph:1           /> ); }
    //  Because this component will actually manage state, we’ll need to change it from a functional component to a class component.
//We’ll set the initial value of editFormOpen to false, which means that the form starts off as closed:

    
export default class EditableTimer extends React.Component{
    state = {
      editFormOpen: false
    }
  
    handleEditPress = () => {
      this.openForm()
    }
  
    handleFormClose = () => {
      this.closeForm();
    }
  
    handleSubmit = timer => {
      const { onFormSubmit } = this.props;
  
      onFormSubmit(timer);
      this.closeForm();
    }
  
    closeForm = () => {
      this.setState({ editFormOpen: false })
    }
  
    openForm = () => {
      this.setState({ editFormOpen: true })
    }
  
    render(){
      const { id, title, project, elapsed, isRunning, onRemovePress, onStartPress, onStopPress } = this.props;
      const { editFormOpen } = this.state;
  
      if (editFormOpen){
        return <TimerForm id={id} title={title} project={project} onFormSubmit={this.handleSubmit} onFormClose={this.handleFormClose}/>;
      } else {
        return (
          <Timer
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
            onEditPress={this.handleEditPress}
            onRemovePress={onRemovePress}
            onStartPress={onStopPress}
            onStopPress={onStopPress}
          />
        );
      }
    }
  }
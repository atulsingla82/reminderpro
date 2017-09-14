import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
import {addReminder} from '../actions'
import './App.css';
import {Button, Icon, Row, Input} from 'react-materialize'


class App extends Component {
  constructor(props){

    super(props);

    this.state = {

    text : ''
    }
  }

  addReminder(){

    console.log('this.state', this.state)
  }

  render() {

    return (
    	<div>
    	<h3> Reminder Pro </h3>
    	<Row>
      
		<Input  s={6} 
    label="I have to ..." 
    onChange= {event => this.setState({text:event.target.value})} />
		
		
		
         </Row>
    	<Button 
      onClick={()=> this.addReminder()}
      waves='light'>
		<Icon>note_add</Icon>
	</Button>
	</div>
    );
  }
}

function mapDispatchToProps(dispatch){

  return bindActionCreators({addReminder}, dispatch)
}

export default connect (null, mapDispatchToProps) (App);

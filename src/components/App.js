import React, { Component } from 'react';

import './App.css';
import {Button, Icon, Row, Input} from 'react-materialize'


class App extends Component {
  render() {

    return (
    	<div>
    	<h3> Reminder Pro </h3>
    	<Row>
		<Input s={6} label="I have to ..." />
		
		
		
         </Row>
    	<Button waves='light'>
		<Icon>note_add</Icon>
	</Button>
	</div>
    );
  }
}

export default App;

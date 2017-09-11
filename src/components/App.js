import React, { Component } from 'react';

import './App.css';
import {Button, Icon, Row, Input} from 'react-materialize'


class App extends Component {
  render() {

    return (
    	<div>
    	<h3> Reminder Pro </h3>
    	<Row>
		<Input placeholder="i have to ..." s={6}  />
	
         </Row>
    	<Button waves='light'>
		<Icon>thumb_up</Icon>
	</Button>
	</div>
    );
  }
}

export default App;

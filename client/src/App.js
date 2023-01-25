import React, { Component} from 'react';
import './App.css';
import Formed from './form'
import Heading from './titlebar';

class App extends Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log("hello world")
  }

  render(){
    return(
      <div id='App'>
        <Heading id="title"/>
      <div id='form_Division'>
        <Formed id='form'/>
      </div>
      </div>
    )
  }
}


export default App;

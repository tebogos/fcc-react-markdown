import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.scss';
let marked =require('marked');
class App extends Component {

  state={markedText:""};
  handleChange(ev){

    this.setState({markedText:marked(ev.target.value)})
  }
  render() {
    return (
      <div className="App">

        <textarea className="input-text" rows="30" cols="50" onChange={(eve)=>this.handleChange(eve)}></textarea>
        <div className="output-text" dangerouslySetInnerHTML={{__html:this.state.markedText}}>
      </div>
    </div>
    );
  }
}

export default App;

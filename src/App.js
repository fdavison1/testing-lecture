import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    input: ''
  }
  render(){

    return (
      <div className="App">
   
Practice the Piano

    <input
    onChange={(e)=>this.setState({input: e.target.value})}
    value = {this.state.input}
    ></input>

    </div>
  );
}
}

export default App;

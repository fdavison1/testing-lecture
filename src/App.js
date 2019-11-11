import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    input: '',
    todos: ['Practice the piano']
  }

addTodo(){
  this.setState({
    todos: [...this.state.todos, this.state.input]
  })
}

  render(){

    return (
      <div className="App">
        {this.state.todos.map(el=> (
          <li key={el}>{el}</li>
        ))}
   
Practice the Piano

    <input
    onChange={(e)=>this.setState({input: e.target.value})}
    value = {this.state.input}
    ></input>
  <button
  onClick={()=> this.addTodo()}
  >Add Todo</button>
    </div>
  );
}
}

export default App;

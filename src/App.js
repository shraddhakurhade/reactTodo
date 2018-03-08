import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">React ToDo App</h1>
        </header> 
         <Todo />
         <footer className="App-footer">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Globant</h1>
        </footer>
      </div>
       
    );
  }
}

export default App;

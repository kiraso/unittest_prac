import logo from './logo.svg';
import './App.css';
import PersonList from './PersonList';
import { Component } from 'react';

class App extends Component {
  state ={people:{}}
  render() {
    return (<div className="App">
     <PersonList />
    </div>
  )}
}

export default App;

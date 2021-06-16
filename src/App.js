import Clock from './Clock';
import './App.css';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
  render() {
    return (
      <>
      <div className="App">
          <h1>PRIMA APP</h1>
      </div>
      <Clock paese ="Italia" time ="0"/>
      <Clock paese="Russia" time ="2"/>
      <Clock paese="Cuba" time ="-6"/>
      </>
    );
  }
}

export default App;

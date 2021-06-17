import Clock from './Clock';
import './App.css';
import { Component } from 'react/cjs/react.production.min';

const clocks = [
  {
    paese:'Italia',
    time: 0
  },
  {
    paese:'Russia',
    time: 2
  },
  {
    paese:'Cuba',
    time: -6
  }
]

class App extends Component {

  getClocks() {
    return clocks.map(clock => {
      return <Clock key={clock.paese} paese ={clock.paese} time ={clock.time}/>
    })
  }

  render() {
    return (
      <>
      <div className="App">
          <h1>PRIMA APP</h1>
      </div>
      <ul>
        {this.getClocks()}
      </ul>
      </>
    );
  }
}

export default App;

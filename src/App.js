import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    }
  }
  handleClick = () => {
    const temp =  this.state.toggle;
    this.setState({
      toggle: !temp,
    });
  }
  render() {
    const {toggle} = this.state;
    const label = toggle? "active": "inactive";
    return (
      <div className="App">
        <button onClick={()=> this.handleClick()} data-toggle={label}>
          {
            label
          }
        </button>
      </div>
    );
  }
}

export default App;

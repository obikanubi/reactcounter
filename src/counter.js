import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    //this.increment = this.increment.bind(this);
  }

  increment() {
    console.log('Clicked');
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.increment()}>Add</button>
      </div>
    );
  }
}

export default Counter;

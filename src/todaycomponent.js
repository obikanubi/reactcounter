import React, { Component } from 'react';

class Today extends Component {
  render() {
    return (
      <div>
        <p>Today is {this.props.day}</p>
      </div>
    );
  }
}

export default Today;

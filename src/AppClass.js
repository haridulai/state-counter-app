import React, { Component } from "react";

export default class AppClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((previousState) => ({
      count: previousState.count - 1,
    }));
  };

  render() {
    return (
      <div className="app">
        <h1>Wleomce to my counter app</h1>
        <p>The count is: {this.state.count}</p>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

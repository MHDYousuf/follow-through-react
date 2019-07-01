import React, { Component } from "react";

class Test extends Component {
  state = {
    test: "test"
  };
  componentDidMount() {
    console.log("component DID mount");
  }
  componentWillMount() {
    console.log("Component will mount");
  }
  componentDidUpdate() {
    console.log("Component DId update");
  }
  componentWillUpdate() {
    console.log("ComponentWillUpdate");
  }
  componentWillReceiveProps(nextProps, nextState) {
    console.log("ComponentWillReeiveProps....");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      test: "something"
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;

import React, { Component } from 'react';
import D from './d'

@D
class E extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <p>我是P标签，我的皮肤是黄色</p>
    );
  }
}

export default E;
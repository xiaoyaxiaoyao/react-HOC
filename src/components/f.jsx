import React, { Component } from 'react';
import D from './d'

@D
class F extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        我是div 我的皮肤是红色
      </div>
    );
  }
}

export default F;
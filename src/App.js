import React, { Component } from 'react';
import A from './components/A';
import B from './components/B';
import C from './components/C'
import E from './components/e'
import F from './components/f'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        高阶组件基础讲解---demo 
        {/* B&C 代理高阶组件 demo */}
        <B name="张三" /> */}
        {/* <C />
        {/* E&F 继承高阶组件 demo */}
        <E />
        <F />
      </div>
    );
  }
}

export default App;

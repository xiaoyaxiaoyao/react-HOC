import React,{Component} from 'react';
import A from './A';
class C extends Component {
  render(){
    return(
      <div className="C-Box">
        C组件
      </div>
    )
  }
}
export default  A(C)
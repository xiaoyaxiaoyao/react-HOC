import React,{Component} from 'react';
import './A.css'
function A(WrappedComponent){
  return class A extends Component {
    render(){
      const {age,...otherProps}= this.props
      return(
        <div className="A-Box">
          A组件
          <WrappedComponent sex="男" {...otherProps} />
        </div>
      )
    }
  }
}
export default A
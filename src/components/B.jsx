import React,{Component} from 'react';
import A from './A';

@A
class B extends Component {
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props.name)
    return(
      <div className="B-Box">
        B组件
        <div> name:{this.props.name} </div>
        <div> age:{this.props.age} </div>
        <div> sex:{this.props.sex} </div>
      </div>
    )
  }
}
export default B
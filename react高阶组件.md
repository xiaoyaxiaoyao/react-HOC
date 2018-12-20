### connect 装饰器安装方法 
  - 请访问：https://github.com/xiaoyaxiaoyao/React-demos/blob/master/README.md 装饰器配置
  

### react 高阶组件
  - 高阶函数的基本概念
    - 1. 函数可以作为参数被传递
    ```js
      <!-- setTimeout&setInterval -->
      <!-- ajax -->

    ```
    - 2.函数可以被作为返回值输出

  - 高阶组件基本概念
    - 1. 高阶组件就是接受一个组件作为参数并返回一个新的组件的函数
    - 2.高阶组件是一个函数，并不是一个组件
    - 实例 
    ```js  A组件为公共组件
      function A(WrappedComponent){
        return class A extends Component {
          render(){
            return(
              <div className="A-Box">
                A组件
                <WrappedComponent />
              </div>
            )
          }
        }
      }
      export default A
    ```
    ```js  B组件为子组件1
      import React,{Component} from 'react';
      import A from './A';
      class B extends Component {
        render(){
          return(
            <div className="B-Box">
              B组件
            </div>
          )
        }
      }
      export default A(B)
    ```
    ```js C组件为子组件2
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
    ```

### 编写高阶组件
  - 1.先实现一个普通组件
  - 2.将普通组件使用函数包裹

### 使用高阶组件
  - 1.higherOrderComponent(wrappedComponent)
  -2.@higherOrderComponent
    - 装饰器配置
      - npm run eject 输出config配置文件
      - npm install -save-dev babel-preset-stage-2
      - npm install -save-dev babel-preset-react-native-stage-0
      - .在根目录下创建一文件 .babelrc
      {
        "presets":["react-native-stage-0/decorator-support"]
      }
      ```js C组件为子组件2
      import React,{Component} from 'react';
      import A from './A';
      @A
      class C extends Component {
        render(){
          return(
            <div className="C-Box">
              C组件
            </div>
          )
        }
      }
      export default  C
    ```

### 代理方式的高阶组件
  - 返回的新组件类直接继承自 React.Component类，新组件扮演的角色传入参数组件的一个代理，
    在新组件的render函数中，被包裹的组件渲染出来，除了高阶组件自己要做好的工作，
    其余功能全部转手给被包裹的组件
     ```js  A组件为公共组件
      function A(WrappedComponent){
        return class A extends Component {
          render(){
            const {age,...otherProps} = this.props // 将除age之外的集合传入
            return(
              <div className="A-Box">
                A组件
                <WrappedComponent sex={"男"} {...otherProps} /> // 获取传入的集合
              </div>
            )
          }
        }
      }
      export default A
    ```
    ```js  B组件为子组件1
      import React,{Component} from 'react';
      import A from './A';
      class B extends Component {
        render(){
          return(
            <div className="B-Box">
              B组件
              <div name={this.props.name}></div><!--由父组件传入的参数-->
              <div age={this.props.age}></div><!--由父组件传入的参数-->
              <div> sex={this.props.sex} </div><!--由高阶组件传入的参数-->
            </div>
          )
        }
      }
      export default A(B)
    ```

### 使用继承方式的高阶组件
  - 继承方式的高阶组件, 继承方式的高阶组件继承与封装的组件 (WrappedComponent)=>class NewComponent extends WrappedComponent 
  - 使用场景--需要根据参数 Wrappedcomponent，渲染结构查询如何修改props
  - 高阶组件显示名称设置
  ```js
    static displayName = `NewComponent(${getDisplayName(WrappedComponent)})` 
    // 显示继承组件的名称 显示效果 <NewComponent(E)></NewComponent>
    // 获取继承组件的方法
    function getDisplayName(WrappedComponent){
      return WrappedComponent.displayName || WrappedComponent.name || '自定义组件名称'
    }
  ```
  - 继承方式的高阶组件demo
  ```js
  const modifyPropsHOC = (WrappedComponent)=> class NewComponent extends WrappedComponent{
    static displayName = `NewComponent(${getDisplayName(WrappedComponent)})` // 显示继承组件的组件名称
    render(){
      const element = super.render();
      const newStyle = {
        color:element.type === 'div'? 'red':"yellow"
      }
      const newProps = {...this.props,style:newStyle} // 将 style 拼接到 this.props
      return React.cloneElement(element,newProps,element.props.children); // 克隆组件
    }
  }
  // 获取继承组件名称
  function getDisplayName(WrappedComponent){
    return WrappedComponent.displayName || WrappedComponent.name || '自定义组件名称'
  }
  export default modifyPropsHOC
  ```


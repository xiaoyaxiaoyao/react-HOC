// 继承方式的高阶组件, 继承方式的高阶组件继承与封装的组件 class NewComponent extends WrappedComponent，多数用来处理props的值
// 使用场景--需要根据参数 Wrappedcomponent，渲染结构查询如何修改props
// 高阶组件显示名称设置

import React, { Component } from 'react';

const modifyPropsHOC = (WrappedComponent)=> class NewComponent extends WrappedComponent{
  static displayName = `NewComponent(${getDisplayName(WrappedComponent)})` // 显示继承组件的名称 显示效果 <NewComponent(E)></NewComponent>
  render(){
    const element = super.render();
    const newStyle = {
      color:element.type === 'div'? 'red':"yellow"
    }
    const newProps = {...this.props,style:newStyle} // 将 style 拼接到 this.props
    return React.cloneElement(element,newProps,element.props.children); // 克隆组件
  }
}
// 获取继承组件的方法
function getDisplayName(WrappedComponent){
  return WrappedComponent.displayName || WrappedComponent.name || '自定义组件名称'
}


export default modifyPropsHOC


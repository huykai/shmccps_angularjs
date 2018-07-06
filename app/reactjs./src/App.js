import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';

//var Content = React.createClass({
class Content extends React.Component {
//    render: function() {
  constructor(props){
      super(props);
  }
  render() {
    return  <div>
            <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} /> 
            <h4>{this.props.myDataProp}</h4>
            </div>;
  }
};

class HelloMessage extends Component {
  getInitialState() {
    return {value: 'Hello Runoob!'};
  };
  handleChange(event) {
    this.setState({value: event.target.value});
  };
  render() {
    var value = this.state.value;
    return <div>
            <Content myDataProp = {value} 
              updateStateProp = {this.handleChange}></Content>
           </div>;
  }
};

class MyComponent extends Component {
  getInitialState() {
    return {which: 1};
  };
  handleClick() {
    // 使用原生的 DOM API 获取焦点
    //this.refs.myInput.focus();
    this.state.which = 1 - this.state.which;
    if (this.state.which === 1){
      this.refs.secButton.focus();
    } else {
      this.refs.myInput.focus();
    }
  };
  render() {
    //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
    return (
      <div>
        <input type="text" ref="myInput" />
        <input
          type="button"
          value="点我输入框获取焦点"
          onClick={this.handleClick}
          ref="secButton"
        />
      </div>
    );
  }
};

//class App extends Component {
class App extends Component{
//  render() {
    render() {
    return (
      
      <div className="App">
        <MyComponent />
        <HelloMessage />,
      </div>
//    );
    )}
//}
}

export default App;
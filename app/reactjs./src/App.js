import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import App_form from './App_form';
import './App.css';


//var Content = React.createClass({
class App extends React.Component {
//    render: function() {
  constructor(props){
      super(props);
      this.state = {
        showSpinner: false
      }
  }
  componentDidMount() {
    //window.addEventListener('resize', this.onWindowResize.bind(this))
    console.log(`App componentDidMount`)
    this.state.showSpinner = false
    setTimeout(() => this.setState(()=>{
       console.log(`setState`)
      }
    ), 1000);
    
  }
  render() {
    return  (
      <div>
        <App_form></App_form>
      </div>
    )
  }
};
// <SpinnerComponent display={this.state.showSpinner}></SpinnerComponent>
        
export default App;
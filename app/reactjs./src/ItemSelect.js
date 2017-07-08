import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css'

//var UserGist = React.createClass({
class ItemSelect extends Component {
  constructor() {
    super();
     this.state = {
         username : '', 
         lastGistUrl : ''
    }
  };
  
  componentDidMount () {
    this.serverRequest = $.get(this.props.source, function (result) {
      var lastGist = result[0];
      console.log(lastGist);
      this.setState({
        username: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      });
    }.bind(this));
  };
 
  componentWillUnmount () {
    this.serverRequest.abort();
  }
 
  render () {
    return (
      <div>
        {this.state.username} 用户最新的 Gist 共享地址：
        <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
      </div>
    );
  }
};

class HelloMessage extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: 'Hello Runoob!'};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    var value = this.state.value;
    return <div>
            <input type="text" value={value} onChange={this.handleChange} /> 
            <h4>{value}</h4>
           </div>;
  }
};

//class App extends Component {
export default class App_form extends Component {
//  render() {
    constructor() {
      super();
    }

    render() {
      return (<div className="App">
        <UserGist source="https://api.github.com/users/octocat/gists" />
        <HelloMessage />,
      </div>
//    );
      )}
//}
}

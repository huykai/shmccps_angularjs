import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';

var arr = [
  <h1>菜鸟教程</h1>,
  <h2>学的不仅是技术，更是梦想！</h2>,
];

var WebSite = React.createClass({
  render: function() {
    return (
      <div>
        <Name name={this.props.name} />
        <Link site={this.props.site} />
      </div>
    );
  }
});
 
var Name = React.createClass({
  render: function() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
});
 
var Link = React.createClass({
  render: function() {
    return (
      <a href={this.props.site}>
        {this.props.site}
      </a>
    );
  }
});

var LikeButton = React.createClass({
        getInitialState: function() {
          return {liked: false};
        },
        handleClick: function(event) {
          this.setState({liked: !this.state.liked});
        },
        render: function() {
          var text = this.state.liked ? '喜欢' : '不喜欢';
          return (
            <p onClick={this.handleClick}>
              你<b>{text}</b>我。点我切换状态。
            </p>
          );
        }
});

var Hello = React.createClass({
  getInitialState: function () {
    return {
      opacity: 1.0
    };
  },
 
  componentDidMount: function () {
    this.timer = setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
  },
 
  render: function () {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
});

var Button = React.createClass({
  getInitialState: function() {
    return {
      data:0
    };
  },
  setNewNumber: function() {
    this.setState({data: this.state.data + 1})
  },
  render: function () {
      return (
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
         </div>
      );
    }
})
var Content = React.createClass({
  componentWillMount:function() {
      console.log('Component WILL MOUNT!')
  },
  componentDidMount:function() {
       console.log('Component DID MOUNT!')
  },
  componentWillReceiveProps:function(newProps) {
        console.log('Component WILL RECEIVE PROPS!')
  },
  shouldComponentUpdate:function(newProps, newState) {
        return true;
  },
  componentWillUpdate:function(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
  },
  componentDidUpdate:function(prevProps, prevState) {
        console.log('Component DID UPDATE!')
  },
  componentWillUnmount:function() {
         console.log('Component WILL UNMOUNT!')
  },
 
    render: function () {
      return (
        <div>
          <h3>{this.props.myNumber}</h3>
        </div>
      );
    }
});

//var UserGist = React.createClass({
class UserGist extends Component {
  constructor() {
    super();
     this.state = {username : '', lastGistUrl : ''}
     //this.state.lastGistUrl = ''
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

var Content = React.createClass({
  render: function() {
    return  <div>
            <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} /> 
            <h4>{this.props.myDataProp}</h4>
            </div>;
  }
});
var HelloMessage_1 = React.createClass({
  getInitialState: function() {
    return {value: 'Hello Runoob!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    var value = this.state.value;
    return <div>
            <Content myDataProp = {value} 
              updateStateProp = {this.handleChange}></Content>
           </div>;
  }
});

//class App extends Component {
var App = React.createClass({
//  render() {
    render : function() {
    return (
      
      <div className="App">
        <HelloMessage_1 />
        <HelloMessage />,
        <UserGist source="https://api.github.com/users/octocat/gists" />
        <Button />
        <Hello name="every body"/>
        <LikeButton />
        <WebSite name="菜鸟教程" site=" http://www.runoob.com" />,
        <div>{arr}</div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
//    );
    )}
//}
})

export default App;

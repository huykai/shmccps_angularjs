import React, {Component} from 'react';
//import ReactDOM from '../../node_modules/react-dom/react-dom';
import ReactDOM from 'react-dom';
//import $ from '../js/jquery/jquery-1.8.2.min';
//使用不带相对路径的js库，可以简化webpack运行的环境设置，下面的
//jquery引用，可以有webpack自行在相应的node-modules目录里去寻找
//如果是用前面的相对路径，就要考虑在编译前和编译后，引用的库都能找得到
import $ from 'jquery';
import cookie from 'jquery.cookie';
import Storages from 'js-storage';
//import logo from './logo.svg';
import RegionNorth from './RegionNorth';
//import RegionSouth from './RegionSouth';
//import RegionEast from './RegionEast';
import RegionWest from './RegionWest';
import RegionCenter from './RegionCenter';
import './App.css'
//import '../css/bootstrap.min.css';
//import '../css/bootstrap-theme.min.css';
//import '../lib/jquery-easyui-1.5.2/themes/default/easyui.css';
//import '../lib/jquery-easyui-1.5.2/themes/icon.css';

const layoutStyle = {
  //align:
  width: '1000px',
  height: '800px'
};

const northlayoutStyle = {
  //align:
  width: '1000px',
  height: '200px'
};

const westlayoutStyle = {
  //align:
  width: '200px',
  height: '800px'
};

const centerlayoutStyle = {
  //align:
  width: '800px',
  height: '800px'
};

let widthdelta = 53;

var delete_Datagrid =function(){
    var datagrid_elem = $('.layout-panel-center');
    datagrid_elem.remove();
}

//class App extends Component {
export default class App_form extends Component {
    constructor() {
      super();
      this.state = { minwidth: 1000 ,info : {},renderDataGrid:false};
      this.changeStyleSize();
      this.handleQuery = this.handleQuery.bind(this);
      this.returntostate = this.returntostate.bind(this);
      
      
      //initial ajax setup
      
      /*
      $(function(){    
          // 设置jQuery Ajax全局的参数    
          var headers = {
            //"x-csrf-Token":$.cookie('XSRF-TOKEN'),
            //"host": "192.168.1.126:3000",
            //"x-csrf-token":$.cookie('XSRF-TOKEN'),
            "x-xsrf-token":$.cookie('XSRF-TOKEN'),
            "authorization":"Bearer " + Storages.sessionStorage.get('token')
            //"Access-Control-Allow-Origin": "http://192.168.1.126:3000",
            //"Access-Control-Allow-Origin": "http://127.0.0.1:3000"
          };
          $.ajaxSetup({    
              type: "POST",    
              async: false,   
              cache: false,  
              dataType: "JSON",  
              headers: headers,
              error: function(jqXHR, textStatus, errorThrown){    
                  switch (jqXHR.status){    
                      case(500):    
                          alert("服务器系统内部错误");    
                          break;    
                      case(401):    
                          alert("未登录");    
                          break;    
                      case(403):    
                          alert("无权限执行此操作");    
                          break;    
                      case(408):    
                          alert("请求超时");    
                          break;    
                      default:    
                          alert("未知错误");    
                  }    
              },     
              success: function(data){    
                  alert("操作成功");    
              }    
            });    
            console.log('$.ajaxsetup complete!')
      });
      */  
    }

    changeStyleSize() {
      //let ParentWidth = $('#root').outerWidth(false) - 100;
      let ParentWidth = $('#root').innerWidth() + widthdelta - 100;
      console.log('root innerWidth:', $('#root').innerWidth());
      console.log('ParentWidth:',ParentWidth);
      this.state.westwidth = 200;
      if ( ParentWidth > this.state.minwidth) {
        this.state.northwidth = ParentWidth;
        this.state.centerwidth = ParentWidth - 200
      } else {
        this.state.northwidth = this.state.minwidth;
      }

      //var ParentHeight = $('#root').outerHeight(true) ;
      //var ParentHeight = 800 ;
      //console.log("App_form ParentWidth = ",ParentWidth);
      //console.log("App_form ParentHeight = ",ParentHeight);
      layoutStyle.width = this.state.northwidth + 'px';
      //layoutStyle.height = ParentHeight + 'px';
      //this.state = {width: ParentWidth, height: ParentHeight};
      //this.setState((prevState, props) => {
      //          return {width: props.width - parentWidthdelta}
      //})
      //this.forceUpdate();
      console.log("App_form layoutStyle = ",layoutStyle);
    }
    //onWindowResize() {
    //  this.changeStyleSize();
    //}

    //componentDidMount() {
    //  window.addEventListener('resize', this.onWindowResize.bind(this))
    //}
    //componentWillUnmount() {
    //  window.removeEventListener('resize', this.onWindowResize.bind(this))
    //}
    returntostate(info){
      //delete_Datagrid();
      this.setState({info:info,renderDataGrid : true});
      
      console.log('returntostate:',this.state.info);
    }
    handleQuery(api_url, info, returninfo = this.returntostate ) {
      if (api_url) {
        console.log('handleQuery：',api_url);

        var headers = {
        //"x-csrf-Token":$.cookie('XSRF-TOKEN'),
        //"host": "192.168.1.126:3000",
        //"x-csrf-token":$.cookie('XSRF-TOKEN'),
        "x-xsrf-token":$.cookie('XSRF-TOKEN'),
        "authorization":"Bearer " + Storages.sessionStorage.get('token')
        //"Access-Control-Allow-Origin": "http://192.168.1.126:3000",
        //"Access-Control-Allow-Origin": "http://127.0.0.1:3000"
        };
        //alert("ajax begin");
        //$.ajax({url: "/api/getTrafficaRecord",type:"post",async:true,data:data,headers:headers,
        $.ajax({url: "/api/getTrafficaRecord",type:"post",async:true,data:info,headers:headers,
        //$.post({url: "/api/getTrafficaRecord",type:"post",async:true,data:data,headers:headers,
            success:function(result,status,xhr){
                console.log("return status=",status);
                //$("#div_loginresult").html("<div>"+"</div>");
                console.log("result=",result);
                returninfo(result);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("error in post getTrafficaRecord: ",textStatus);
                console.log("error in post jqXHR: ",jqXHR);
                console.log("error in post errorThrown: ",errorThrown);
            },
            complete: function(xhr,status){
                console.log('completed');
            }
        });
        
        
        //this.state.info = {url:'./reactjs/data/datagrid_data1.json',column:};
        //alert(info);
      }
    }

    shouldComponentUpdate(nextProps, nextState){
			console.log('App_form shouldComponentUpdate props:', this.props, nextProps );
			console.log('App_form shouldComponentUpdate state:', this.state, nextState );
			this.forceUpdate(function(){
					console.log('RegionCenter 强制渲染完成')
			}); //强制渲染,去掉这行则不会渲染
			return true;
    }

    render() {
      return (
        <div className="App">
            <h2>User Call Record Base on Traffica</h2>
	          <p>Please input filter parameter as you want</p>
            <div style={layoutStyle} id="FrameAll" className="easyui-layout" >
              <RegionNorth width={this.state.northwidth} height={this.state.northheight} submitQuery = {this.handleQuery} />
              <RegionWest width={this.state.westwidth} height={this.state.westheight} />
              <RegionCenter width={this.state.centerwidth} height={this.state.centerheight} data = {this.state.info} />
            </div>
        </div>
      )
    }
}

//<div class="easyui-layout"  style="width:700px;height:350px;" >
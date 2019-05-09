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

import io from 'socket.io-client';



import './App.css'
//import '../css/bootstrap.min.css';
//import '../css/bootstrap-theme.min.css';
//import '../lib/jquery-easyui-1.5.2/themes/default/easyui.css';
//import '../lib/jquery-easyui-1.5.2/themes/icon.css';





const displayBlockStyle = {
  display: 'block'
};
const displayNoneStyle = {
  display: 'none'
};

let widthdelta = 5;

var delete_Datagrid =function(){
  var datagrid_elem = $('.layout-panel-center');
  datagrid_elem.remove();
}


let state_count = 0;

//class App extends Component {
export default class App_form extends Component {
    constructor(props) {
      super(props);

      let defaultwidth_number = 1400;
      console.log(`defaultwidth_number: ${defaultwidth_number}`)
      console.log(`parent inner number: ${$('#root').innerWidth()}`)
      let parentWidth = $('#root').innerWidth() - 30 // 30  = 2 * 15 inner
      defaultwidth_number = parentWidth < 800? 800:parentWidth
      //const defaultwidth = String(defaultwidth_number) + 'px';
      console.log(`defaultwidth_number: ${defaultwidth_number}`)
      //console.log(`window Width: ${windowWidth}`)

      this.state = { loading:true, count:0, minwidth: defaultwidth_number, info : {}, renderDataGrid:false};
      //this.changeStyleSize = this.changeStyleSize.bind(this);
      this.handleQuery = this.handleQuery.bind(this);
      this.returntostate = this.returntostate.bind(this);
      this.state.show = props.display?props.display:true;
      this.state.parentwidth = defaultwidth_number;
      this.changeStyleSize(defaultwidth_number);
      this.state.queryStatus = "Finished";
      this.socket = io(location.origin, {path: '/hyktty/socket.io'});
      this.socket.on('message',function(msg){
        //console.log('message: ', msg);
        //console.log('this：', this);
        //$('#socket').text(msg);
        state_count = msg;
        //object.setState({count:msg});
      });
      
      console.log('before setInterval: state=', this.state);
        
    }
    
    changeStyleSize(defaultwidth_number) {
      const defaultwidth = String(defaultwidth_number) + 'px';
      this.layoutStyle = {
        display: this.state.show?"block":"none",
        //align:
        width: defaultwidth,
        height: '800px'
      };
      //let ParentWidth = $('#root').outerWidth(false) - 100;
      //let ParentWidth = $('#root').innerWidth();
      //console.log('root innerWidth:', $('#root').innerWidth());
      let ParentWidth =  defaultwidth_number
      console.log('ParentWidth:',defaultwidth_number);
      this.state.westwidth = 200;
      //if ( ParentWidth > this.state.minwidth) {
        this.state.northwidth = ParentWidth; // 17 is for vertical  
        this.state.centerwidth = ParentWidth - 200
      //} else {
      //  this.state.northwidth = this.state.minwidth;
      //  this.state.centerwidth = this.state.minWidth
      //}

      //var ParentHeight = $('#root').outerHeight(true) ;
      //var ParentHeight = 800 ;
      //console.log("App_form ParentWidth = ",ParentWidth);
      //console.log("App_form ParentHeight = ",ParentHeight);
      //this.layoutStyle.width = this.state.northwidth + 'px';
      //layoutStyle.height = ParentHeight + 'px';
      //this.state = {width: ParentWidth, height: ParentHeight};
      //this.setState((prevState, props) => {
      //          return {width: props.width - parentWidthdelta}
      //})
      //this.forceUpdate();
      console.log("App_form layoutStyle = ",this.layoutStyle);
    }
    updateDimensions() {
      let parentWidth = $('#root').innerWidth() - 30 // 30  = 2 * 15 inner
      let defaultwidth_number = parentWidth < 800? 800:parentWidth
      const defaultwidth = String(defaultwidth_number) + 'px';
      console.log(`updateDimensions defaultwidth_number: ${defaultwidth_number}`)
      this.changeStyleSize(defaultwidth_number)
      this.setState({parentwidth: defaultwidth_number});
    }
    componentDidMount() {
      //window.addEventListener('resize', this.onWindowResize.bind(this))
      console.log(`App_form componentDidMount`)
      window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    returntostate(result, info){
      //delete_Datagrid();
      let renderDataGrid= false;
      info['datagrid'] == null;
      if(result['errinfo']) {
        alert('Return Data has error info: ' + result['errinfo']);
      } else {
        if (!result['MME_TRAFFICA'] && !result['SGSN_TRAFFICA']) {
          alert('Return Data has 0 record.');
        } else {
          console.log('runtostate: info = ', info);
          info['datagrid'] = result;
          renderDataGrid= true
        }
      }
      this.setState({queryStatus: "Finished", info: info, renderDataGrid : renderDataGrid});
    }
    handleQuery(api_url, info, returninfo = this.returntostate.bind(this) ) {
      //info = JSON.stringify(info);
      console.log('handleQuery api_url：',api_url);
      if (api_url) {
        
        //beginLoading();
        var headers = {
        //"x-csrf-Token":$.cookie('XSRF-TOKEN'),
        //"host": "192.168.1.126:3000",
        //"x-csrf-token":$.cookie('XSRF-TOKEN'),
        //"accept-encoding": "gzip, deflate, sdch, br",
        "x-xsrf-token":$.cookie('XSRF-TOKEN'),
        "authorization":"Bearer " + Storages.sessionStorage.get('token')
        //"Access-Control-Allow-Origin": "http://192.168.1.126:3000",
        //"Access-Control-Allow-Origin": "http://127.0.0.1:3000"
        };
        //alert("ajax begin");
        console.log('handleQuery: info = ', info);
        //$.ajax({url: "/api/getTrafficaRecord",type:"post",async:true,data:data,headers:headers,
        $.ajax({url: api_url,type:"post",async:true,data:info,headers:headers,
        //$.post({url: "/api/getTrafficaRecord",type:"post",async:true,data:data,headers:headers,
        timeout : 300000,
        success:function(result,status,xhr){
                console.log("return status=",status);
                //$("#div_loginresult").html("<div>"+"</div>");
                console.log("result=",result);
                //handleGrid(result.result, info)
                returninfo(result, info);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("error in post getTrafficaRecord: ",textStatus);
                console.log("error in post jqXHR: ",jqXHR.statusText);
                console.log("error in post errorThrown: ",errorThrown);
                if (jqXHR.statusText === 'Unauthorized') {
                  alert('用户状态已过期，请退出后重新登录！')
                }
                if (jqXHR.statusText.indexOf('Gateway Time-out') >= 0) {
                  alert('查询超时，请减少时间间隔再试一次！')
                }
                returninfo({}, {});
            },
            complete: function(xhr,status){
                console.log('completed');
                //endLoading();
            },
            timeout: 600000
        });
        
        this.setState({queryStatus: "Started"});
        //this.state.info = {url:'./reactjs/data/datagrid_data1.json',column:};
        //alert(info);
      }
    }

    shouldComponentUpdate(nextProps, nextState){
			console.log('App_form shouldComponentUpdate props:', this.props, nextProps );
			console.log('App_form shouldComponentUpdate state:', this.state, nextState );
			//this.forceUpdate(function(){
		  //			console.log('RegionCenter 强制渲染完成')
			//}); //强制渲染,去掉这行则不会渲染
      if (this.props.display !== nextProps.display){
        this.state.display = nextProps.display
        return true;
      }
      if (this.state.parentwidth !== nextState.parentwidth){
          this.state.parentwidth = nextState.parentwidth
        return true;
      }
      if (this.state.queryStatus !== nextState.queryStatus){
        this.state.info = nextState.info
        this.state.queryStatus = nextState.queryStatus
        return true;
      }
      return false;
    }
    
    render() {
      //const loading = this.state.loading;
      
      //if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      //  return null; // render null when app is not ready
      //}
      console.log('APP_form render  ');
      const displayStyle = this.state.loading ?  displayNoneStyle : displayBlockStyle;
      
      console.log('displayStyle : ', displayStyle);
      console.log('showSpinner : ', this.state.showSpinner);
      //let windowWidth = window.innerWidth - 20 // 17 is the 下拉框的宽度
      //let defaultwidth_number = windowWidth < 800? 800:windowWidth
      //const defaultwidth = String(defaultwidth_number) + 'px';
      //console.log(`render defaultwidth_number: ${defaultwidth_number}`)
      //console.log(`render defaultwidth: ${defaultwidth}`)

      //this.layoutStyle = {
        //display: this.state.showSpinner?"none":"block",
      //  display: this.state.display,
        //align:
      //  width: defaultwidth,
      //  height: '800px'
      //};
      console.log('layoutStyle : ', this.layoutStyle);
      console.log('state : ', this.state);
      return (
        <div className="App">
            <div>
              <div style={this.layoutStyle} id="FrameAll" className="easyui-layout" >
                <RegionNorth querystatus={this.state.queryStatus} width={this.state.northwidth} height={this.state.northheight} submitQuery = {this.handleQuery.bind(this)} />
                <RegionWest width={this.state.westwidth} height={this.state.westheight} />
                <RegionCenter renderDataGrid={this.state.renderDataGrid} querystatus={this.state.queryStatus} width={this.state.centerwidth} height={this.state.centerheight} data = {this.state.info} />
              </div>
            </div>
        </div>
      ) 
      
    }
}

//<div class="easyui-layout"  style="width:700px;height:350px;" >
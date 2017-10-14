'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import cookie from 'jquery.cookie';
import Storages from 'js-storage';

import FootDesc from './footdesc';
import { modifyimsi, modifymsisdn, modifyelement } from './actions';
import { createStore } from 'redux';
import reducer from './reducers';
import {Provider} from 'react-redux';


import '../../css/bootstrap.min.css';
import '../../css/bootstrap-theme.min.css';
import '../../lib/jquery-easyui-1.5.2/themes/default/easyui.css';
import '../../lib/jquery-easyui-1.5.2/themes/icon.css';

const store = createStore(reducer);


const layoutStyle = {
  //align:
  //width: '',
  height: '200px'
};

const layoutPanelStyle = {
  width: '',
  height: ''
};

const layoutInputTextStyle = {
  width: '150px',
  height: '25px'
};

const layoutItemStyle = {
  width: '200px' 
};

const parentWidthdelta = 0;
const pageHeight = 200;

var querystate = false;

//const api_addressapi = "http://192.168.1.126:3000";
const api_addressapi = "http://127.0.0.1:3000";

var get_MME_Select =function(){
    var mme_select = [];
    //$("input#MME_SELECT+span>input").each( () => alert($(this).html()) );
    $("[name='mme_select']").each( 
        (index, elem) => { mme_select[index] = $(elem).attr("value"); }
    );
    if(mme_select.length == 0){
        alert("MME should select at least one.")
    }
    store.dispatch(modifyelement(mme_select.join(',')));
    return mme_select.join(',');
};
var get_StartTime_Select =function(){
    var starttime_select = '';
    starttime_select = $("[name='starttime_select']").attr("value"); 
    if (starttime_select == '') {
        alert("Start Time should input.")
    }
    var startdatetime = starttime_select.split(' ');
    //console.log('startdatetime = ', startdatetime);
    var startdate = startdatetime[0].split('/');
    [startdate[0],startdate[1],startdate[2]] = [startdate[2],startdate[0],startdate[1]];
    startdatetime[0] = startdate.join('-');
    //startdatetime[1] = startdatetime[1].split(":").join("-");
    console.log('startdatetime[1]=',startdatetime[1]);
    //console.log('startdatetime = ', startdatetime);
    //starttime_select = startdatetime.join(' ');
    //console.log('starttime_select = ', starttime_select);
    return [...startdatetime];
}
var get_StopTime_Select =function(){
    var stoptime_select = '';
    stoptime_select = $("[name='stoptime_select']").attr("value"); 
    if (stoptime_select == '') {
        alert("Stop Time should input.")
    }
    var stopdatetime = stoptime_select.split(' ');
    var stopdate = stopdatetime[0].split('/');
    [stopdate[0],stopdate[1],stopdate[2]] = [stopdate[2],stopdate[0],stopdate[1]];
    stopdatetime[0] = stopdate.join('-');
    console.log('stopdatetime[1]=', stopdatetime[1]);
    //stopdatetime[1] = stopdatetime[1].split(":").join("-");
    //stoptime_select = stopdatetime.join(' ');
    return [...stopdatetime];
}
var get_NetType_Select =function(){
    var nettype_select = [];
    $("[name='nettype_select']").each( 
        (index, elem) => { nettype_select[index] = $(elem).attr("value"); }
    ); 
    if (nettype_select.length == 0) {
        alert("Net Type should select.")
    }
    return nettype_select.join(',');
}
var get_GSMITEMS_Select =function(){
    var gsmitem_select = [];
    var gsmitem_select_id = 0;
    var gsmitem_ul = $('#tree_gsm_item li ul li');
    gsmitem_ul.each(
        function(index,elem) {
            //console.log('gsmitem item: ',elem)
            if ($('span.tree-checkbox1',elem).length > 0){
                //console.log('check ok. ',$('span.tree-title',elem).text());
                gsmitem_select[gsmitem_select_id] = $('span.tree-title',elem).text();
                gsmitem_select_id = gsmitem_select_id + 1;
            }
        }
    )
    return gsmitem_select.join(',');
}
var get_LTEITEMS_Select =function(){
    var lteitem_select = [];
    var lteitem_select_id = 0;
    var lteitem_ul = $('#tree_lte_item li ul li');
    lteitem_ul.each(
        function(index,elem) {
            //console.log('lteitem item: ',elem)
            if ($('span.tree-checkbox1',elem).length > 0){
                //console.log('check ok. ',$('span.tree-title',elem).text());
                lteitem_select[lteitem_select_id] = $('span.tree-title',elem).text();
                lteitem_select_id = lteitem_select_id + 1;
            }
        }
    )
    return lteitem_select.join(',');
}
var get_LTECAUSEPROC_Select =function(){
    var ltecauseproc_select = [];
    var ltecauseproc_select_id = 0;
    var ltecauseproc_elems = $('[name="lte_causeproc_select"]');
    ltecauseproc_elems.each(
        function(index,elem) {
            if ($(elem).attr('value') == '-1'){
                ltecauseproc_select = ['all'];
                return false;
            } else {
                ltecauseproc_select[ltecauseproc_select_id] = $(elem).attr('value');
                ltecauseproc_select_id = ltecauseproc_select_id + 1;
            }
        }
    )
    return ltecauseproc_select.join(',');
}
var get_GSMCAUSEPROC_Select =function(){
    var gsmcauseproc_select = [];
    var gsmcauseproc_select_id = 0;
    var gsmcauseproc_elems = $('[name="gsm_causeproc_select"]');
    gsmcauseproc_elems.each(
        function(index,elem) {
            if ($(elem).attr('value') == '-1'){
                gsmcauseproc_select = ['all'];
                return false;
            } else {
                gsmcauseproc_select[gsmcauseproc_select_id] = $(elem).attr('value');
                gsmcauseproc_select_id = gsmcauseproc_select_id + 1;
            }
        }
    )
    return gsmcauseproc_select.join(',');
}

export default class RegionNorth extends Component {    
    constructor(props) {
      super(props);
      console.log("RegionNorth props = ",props);
      console.log("RegionNorth props = ",props);
      let ParentWidth = props.width;
      let ParentHeight = props.height ;
      console.log("RegionNorth ParentWidth = ",ParentWidth);
      console.log("RegionNorth ParentHeight = ",ParentHeight);
      //layoutStyle.width = ParentWidth + 'px';
      //layoutStyle.height = ParentHeight + 'px';
      this.state = {
          parentwidth: ParentWidth, parentheight: ParentHeight,
          pagewidth: ParentWidth - parentWidthdelta, pageheight: pageHeight,
          queryOptions : {
            'QUERYTYPE' : '',
            'IMSI' : '' ,
            'MSISDN' : '' ,
            'LTECAUSEPROC' : '',
            'GSMCAUSEPROC' : '',
            'MMELIST' : '' ,
            'NETTYPE' : '' ,
            'MME_TRAFFICA' : '',
            'SGSN_TRAFFICA' : '',
            'STARTDATE' : '',
            'STARTTIME' : '',
            'STOPDATE' : '',   
            'STOPTIME' : ''   
          },
          handlequery: this.props.submitQuery
      };

      layoutPanelStyle.width = this.state.pagewidth + 'px' ;
      layoutPanelStyle.height = '200px' ;
      console.log('ReginNorth layoutPanelStyle = ',layoutPanelStyle)
      querystate = true;
      this.submitQuery = this.submitQuery.bind(this);
      this.submitQueryDetail = this.submitQueryDetail.bind(this);
      this.submitQuerySummary = this.submitQuerySummary.bind(this);
      this.handleIMSIchange =  this.handleIMSIchange.bind(this);
      this.handleMSISDNchange =  this.handleMSISDNchange.bind(this);
      //this.handleCAUSEPROCchange =  this.handleCAUSEPROCchange.bind(this);
    }
    submitQueryDetail(){
        this.submitQuery('QueryDetail');
    }
    submitQuerySummary(){
        this.submitQuery('QuerySummary');
    }
    submitQuery(QueryType) {
        //console.log('submitQuery: ', this.state.queryOptions.IMSI);
        this.state.queryOptions['QUERYTYPE'] = QueryType;
        this.state.queryOptions['MMELIST'] = get_MME_Select();
        [this.state.queryOptions['STARTDATE'], this.state.queryOptions['STARTTIME']] = get_StartTime_Select();
        //this.state.queryOptions['STARTTIME'] = get_StartTime_Select();
        [this.state.queryOptions['STOPDATE'], this.state.queryOptions['STOPTIME']] = get_StopTime_Select();
        //this.state.queryOptions['STOPDATE'] = get_StopTime_Select();
        //this.state.queryOptions['STOPTIME'] = get_StopTime_Select();
        this.state.queryOptions['NETTYPE'] = get_NetType_Select();
        this.state.queryOptions['MME_TRAFFICA'] = get_LTEITEMS_Select();
        this.state.queryOptions['SGSN_TRAFFICA'] = get_GSMITEMS_Select();
        this.state.queryOptions['LTECAUSEPROC'] = get_LTECAUSEPROC_Select();
        this.state.queryOptions['GSMCAUSEPROC'] = get_GSMCAUSEPROC_Select();
        console.log("submitQuery queryOptions:", this.state.queryOptions);
        //var cb = function(data ,  status) {
        //    console.log(" data: ", data , "\n Status: ",status);
        //}
        
        var data = this.state.queryOptions;
        //var data = JSON.stringify(this.state.queryOptions);
        //var token = Storages.sessionStorage.get('token');
        //console.log('token : ',token);

        //console.log('data:',data);
        
       // console.log('ajax complete!');
        // url "http://127.0.0.1:3000/api/getTrafficaRecord"
        this.state.handlequery('/api/getTrafficaRecord', data);

    }

    handleIMSIchange(event) {
        //console.log("event target value : ",event.target.value);
        //console.log("imsi value",this.state.queryOptions.IMSI);
        //this.setState({queryOptions.IMSI: event.target.value});
        this.state.queryOptions.IMSI = event.target.value;
        //console.log("imsi value",this.state.queryOptions.IMSI);
        store.dispatch(modifyimsi(this.state.queryOptions.IMSI));
    }

    handleMSISDNchange(event) {
        //console.log("event target value : ",event.target.value);
        this.state.queryOptions.MSISDN = event.target.value;
        console.log("msisdn value",this.state.queryOptions.MSISDN);
        store.dispatch(modifymsisdn(this.state.queryOptions.MSISDN));
    }

    handleCAUSEPROCchange(event) {
        console.log("event target value : ",event.target.value);
        this.state.queryOptions.CAUSEPROC = event.target.value;
        console.log("causeproc value",this.state.queryOptions.CAUSEPROC);
    }

    handleMMEchange(event){
        console.log("event target value : ",event.target.value);
        //this.state.queryOptions.CAUSEPROC = event.target.value;
        store.dispatch({ type:'MODIFY_MME'});
    }
    

    render() {
      return (
        <div data-options="region:'north'" style={layoutStyle} >
            <div className="easyui-panel" title="Traffica Log Query Options" style={layoutPanelStyle}>
                <div >
                    <form id="ff" method="post">
                        <table cellPadding="5">
                          <tbody>
                            <tr>
                                <td>IMSI:</td>
                                <td><input type="text" className="form-control" id="imsi" placeholder="请输入IMSI" onChange={this.handleIMSIchange} style={layoutInputTextStyle}/></td>
                                <td>MSISDN:</td>
                                <td><input type="text" className="form-control" id="MSISDN" placeholder="请输入MSISDN" onChange={this.handleMSISDNchange} style={layoutInputTextStyle}/></td>
                                <td>MME:</td>
                                <td><input id="MME_SELECT" className="easyui-combobox" name="mme_select" onChange={this.handleMMEchange} data-options="url:'./reactjs/data/combobox_causeproc.json', method:'get', valueField:'id', textField:'text',multiple:true,multiline:true,panelHeight:'auto'" style={{width:'400px',height:'25px'}}  /> </td>
                            </tr>
                            <tr>
                                <td>起始时间:</td>
                                <td><input id="STARTTIEM_SELECT" name="starttime_select" className="easyui-datetimebox" style={layoutItemStyle} data-options="required:true"></input></td>
                                <td>截止时间:</td>
                                <td><input id="STOPTIME_SELECT" name="stoptime_select" className="easyui-datetimebox" style={layoutItemStyle} data-options="required:true"></input></td>
                                <td>GSM Cause Proc</td>
                                <td>
                                    <div className="easyui-panel" style={{width:'100%'}}>
                                        <div >
                                            <input id="cc2" name="gsm_causeproc_select" className="easyui-combotree" data-options="url:'./reactjs/data/gsm_causeproc.json',method:'get',multiple:true,value:[]" style={{width:'100%'}} />
                                        </div>
                                    </div>
                                </td>       
                            </tr>
                            <tr>
                                <td>业务类型:</td>
                                <td>
                                    <select id="NETTYPE_SELECT" className="easyui-combobox" name="nettype_select" data-options="multiple:true,multiline:true"  style={{width:'200px',height:"25px"}}>
                                        <option defaultValue="MME_TRAFFICA">MME_TRAFFICA</option>
                                        <option value="SGSN_TRAFFICA">SGSN_TRAFFICA</option>
		                             </select>
                                </td>
                                <td>LTE Cause Proc</td>
                                <td>
                                    <div className="easyui-panel" style={{width:'100%'}}>
                                        <div >
                                            <input id="cc1" name="lte_causeproc_select" className="easyui-combotree" data-options="url:'./reactjs/data/lte_causeproc.json',method:'get',multiple:true,value:[]" style={{width:'100%'}} />
                                        </div>
                                    </div>
                                </td>
                                
                            </tr>
                            
                          </tbody>
                        </table>
                    </form>
                    <div>
                        <button onClick={this.submitQueryDetail}  >Apply Detail Query</button>
                        <button onClick={this.submitQuerySummary}  >Apply Summary Query</button>                        
                    </div>
                    <Provider store={store}>
                        <FootDesc ></FootDesc>
                    </Provider>
                </div>
                
            </div>
	    </div>
      )
    }

}

//<a href="javascript:void(0)" onClick={this.handleQuery(querystate, 'value')} className="easyui-linkbutton" >Apply Query</a>
//<a href="javascript:void(0)" onClick={this.clearForm()} className="easyui-linkbutton" >Clear</a>
//<td><input className="easyui-textbox" type="text" name="IMSI" value={this.state.queryOptions.IMSI} onChange={this.handleIMSIchange} data-options="" /></td>
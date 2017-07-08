'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//import traffica_func from './lib/traffica_func'
//import traffica_func from ''
import cookie from 'jquery.cookie';
import Storages from 'js-storage';
//import { functions } from './lib/traffica_func'

const layoutCustomStyle = {
  //align:
  padding: '10px'
  //height: ''
};



export default class RegionCenter extends Component {
    constructor(props) {
      super(props);
			this.state = {
				datagridinfo : this.props.data,
			}
    }
	/*
    componentWillMount() {
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
						beforeSend: function(xhr) {
								xhr.setRequestHeader('x-xsrf-token', $.cookie('XSRF-TOKEN'));
								xhr.setRequestHeader('authorization', Storages.sessionStorage.get('token'));
						},
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
	
	}
	*/
	componentWillReceiveProps(nextProps) {
		// You don't have to do this check first, but it can help prevent an unneeded render
		console.log('componentWillReceiveProps:',nextProps);
		updateGrid(nextProps.data.filename, nextProps.data.columninfo);
	}
	

	render() {
		var tableNode_str = '';		
		if (!this.state.datagridinfo.filename) {
			this.state.datagridinfo.filename = './reactjs/data/datagrid_data1.json';
			this.state.datagridinfo.columninfo = {
						itemid: 'Item ID',
						productid: 'Product ID',
						listprice: 'List Price',
						unitcost: 'Unit Cost',
						attr1: 'Attribute',
						status: 'Status'
					};
		}
		if (this.state.datagridinfo.filename) {
			console.log('render:',this.state.datagridinfo.filename);
			if(this.state.datagridinfo.columninfo) {
		//		//tableNode_str = '<table className="easyui-datagrid" data-options="url:\'' + this.state.datagridinfo.filename +'\',method:\'get\',singleSelect:true,fit:true,fitColumns:true">'
				var columndata =  this.state.datagridinfo.columninfo;
		//		//var columnNodes_str = '<thead> <tr> ';
				var columnNodes = [];
				var i = 0;
				for (let columnNode of Object.keys(columndata)) {
					let column_field = "field:'" + columnNode + "'";
					columnNodes[i] = (<th data-options={column_field}> {columndata[columnNode]} </th>);
					i = i + 1;
				} 
				var columnNodes_all = (<thead> <tr> {columnNodes} </tr> </thead>);
		//		var tableNode = (<table className="easyui-datagrid" data-options="url:{{this.state.datagridinfo.filename}},method:'get',singleSelect:true,fit:true,fitColumns:true"> {columnNodes_all} </table>);
		//
				var table_data_options = "url:'" + this.state.datagridinfo.filename + "',method:'get',singleSelect:true,fit:true,fitColumns:true";
				console.log('render:',table_data_options);
				//var table_data_options="url:'./reactjs/data/datagrid_data1.json',method:'get',singleSelect:true,fit:true,fitColumns:true";
				//data-options = "url:'./reactjs/data/datagrid_data1.json',method:'get',singleSelect:true,fit:true,fitColumns:true">
				var table_node = (
					<table id="easyui-dg"></table>
				)
				return (			
					<div data-options="region:'center',title:'Main Title',iconCls:'icon-ok'">
						<div className="easyui-tabs" data-options="fit:true,border:false,plain:true">
							<div title="About" data-options="" style={layoutCustomStyle}></div>
							<div title="DataGrid" style={layoutCustomStyle}>
								{table_node}
							</div>
						</div>
					</div>		
				)
			} 
		} else {
			return (
				<div data-options="region:'center',title:'Main Title',iconCls:'icon-ok'">
				</div>
			);
		}
			//console.log('tableNode_str:',tableNode_str);
			//var table_data_options = "url:'" + this.state.datagridinfo.filename + "',method:'get',singleSelect:true,fit:true,fitColumns:true";
			//return (			
      //  <div data-options="region:'center',title:'Main Title',iconCls:'icon-ok'">
			//		<div className="easyui-tabs" data-options="fit:true,border:false,plain:true">
			//			<div title="About" data-options="" style={layoutCustomStyle}></div>
			//			<div title="DataGrid" style={layoutCustomStyle}>
			//				<table className="easyui-datagrid"
			//						data-options={table_data_options}>
			//					<thead>
			//						<tr>
			//							<th data-options="field:'itemid'" width="80">Item ID</th>
			//							<th data-options="field:'productid'" width="100">Product ID</th>
			//							<th data-options="field:'listprice',align:'right'" width="80">List Price</th>
			//							<th data-options="field:'unitcost',align:'right'" width="80">Unit Cost</th>
			//							<th data-options="field:'attr1'" width="150">Attribute</th>
			//							<th data-options="field:'status',align:'center'" width="50">Status</th>
			//						</tr>
			//				</thead>
			//				</table>
			//			</div>
			//		</div>
			//	</div>
      //)
			//data-options="url:'./reactjs/data/datagrid_data1.json',method:'get',singleSelect:true,fit:true,fitColumns:true">
			//				<table className="easyui-datagrid"
			//						data-options="url:'/api/getTrafficaRecord',method:'post',singleSelect:true,fit:true,fitColumns:true">
			//					<thead>
			//						<tr>
			//							<th data-options="field:'itemid'" width="80">Item ID</th>
			//							<th data-options="field:'productid'" width="100">Product ID</th>
			//							<th data-options="field:'listprice',align:'right'" width="80">List Price</th>
			//							<th data-options="field:'unitcost',align:'right'" width="80">Unit Cost</th>
			//							<th data-options="field:'attr1'" width="150">Attribute</th>
			//							<th data-options="field:'status',align:'center'" width="50">Status</th>
			//						</tr>
			//					</thead>
			//				</table>
			//var table_data_options = "url:'" + this.state.datagridinfo.filename + "',method:'get',singleSelect:true,fit:true,fitColumns:true";
			//var table_data_options = "url:'./reactjs/data/datagrid_data1.json',method:'get',singleSelect:true,fit:true,fitColumns:true";
			//return (
			//	<div data-options="region:'center',title:'Main Title',iconCls:'icon-ok'">
			//		<div className="easyui-tabs" data-options="fit:true,border:false,plain:true">
			//			<div title="About" data-options="" style={layoutCustomStyle}></div>
			//			<div title="DataGrid" style={layoutCustomStyle}>
			//				<table className="easyui-datagrid" data-options={table_data_options}>
			//					 {columnNodes_all}
			//				</table>
			//			</div>
			//		</div>
			//	</div>
			//);
    }
}
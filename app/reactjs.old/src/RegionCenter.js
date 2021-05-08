'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//import traffica_func from './lib/traffica_func'
//import traffica_func from ''
import cookie from 'jquery.cookie';
import Storages from 'js-storage';
import  * as pako  from 'pako';
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
			querystatus : this.props.querystatus,
			renderDataGrid : this.props.renderDataGrid,
			datagridinfo : this.props.data,
		}
		this.generateColumnInfo = this.generateColumnInfo.bind(this);
		this.generateColumn = this.generateColumn.bind(this);
		this.compareGridFileName = this.compareGridFileName.bind(this);
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
	compareGridFileName(origFileName, propsFileName){
		//if origFileName is undefineded or null, isDiff = true
		if (!origFileName) return true;
		let isDiff = false;
		for (let key of Object.keys(propsFileName)) {
			if(origFileName[key] != propsFileName[key]){
				isDiff = true;
			}
		}
		return isDiff;
	}

	generateColumn(columnsInfo){
		console.log('generateColumn columnsInfo: ', columnsInfo);
		let columnsinfos = [];
		
		let columns = columnsInfo.split(',');
		let i = 0;
		for (let key of columns) {
			let columnsinfo = {};
			columnsinfo.field = key;
			columnsinfo.title = String(key);
			columnsinfo.sortable = true;
			columnsinfos.push(columnsinfo);
		}
		return columnsinfos;
	}

	generateColumnInfo(propsFileName, propsInfo){
		let columnInfo = {};
		for (let file of Object.keys(propsFileName)) {
			//columnInfo[file] = this.generateColumn(propsInfo[file])
			//console.log('filename:',file);
			if (file === "MME_TRAFFICA" || file === "SGSN_TRAFFICA")
				columnInfo[file] = this.generateColumn(propsInfo['datagrid'][file+'_COLUMNINFO'])
		}
		return columnInfo;
	}

	componentWillReceiveProps(nextProps) {
		// You don't have to do this check first, but it can help prevent an unneeded render
		console.log('componentWillReceiveProps:', nextProps);
		let propsFileName = nextProps.data.datagrid;
		if (propsFileName) {
			let propsFileColumnInfo = this.generateColumnInfo(propsFileName, nextProps.data); 
			if (propsFileColumnInfo) {
				if (this.compareGridFileName(this.gridfilename, propsFileName)) {
					console.log('RegionCenter updateGrid: ', propsFileName, propsFileColumnInfo);
					updateGrid(propsFileName, propsFileColumnInfo);
					this.gridfilename = propsFileName;
				}
			}
		}
	}
	
	shouldComponentUpdate(nextProps, nextState){
		console.log(`RegionCenter shouldCOmponentUpdate props: `, this.props)
		console.log(`RegionCenter shouldCOmponentUpdate nextProps: `, nextProps)
		if (this.props.width !== nextProps.width){
				this.state.parentwidth = nextProps.width;
				this.state.pagewidth = nextProps.width;
				return true;
		}
		if (this.state.querystatus !== nextProps.querystatus){
			this.state.querystatus = nextProps.querystatus;
			if (this.state.querystatus === "Finished" && nextProps.renderDataGrid === true)
				return true;
		}
		return false;
	}
	render() {
		//var tableNode_str = '';		
		//if (!this.state.datagridinfo.filename) {
		//	this.state.datagridinfo.filename = './reactjs/data/datagrid_data1.json';
		//	this.state.datagridinfo.columninfo = {
		//				itemid: 'Item ID',
		//				productid: 'Product ID',
		//				listprice: 'List Price',
		//				unitcost: 'Unit Cost',
		//				attr1: 'Attribute',
		//				status: 'Status'
		//			};
		//}
		layoutCustomStyle.width =  this.state.pagewidth;
		console.log(`RegionCenter render layoutCustomerStyle: `, layoutCustomStyle)
		var table_mmetrafficarecord_info = (
			<div title="DataGrid_MME_Record_Info" data-options="" style={layoutCustomStyle}>
				<table id="easyui-mme-info" className="easyui-datagrid" 
					data-options="url:'/api/getResultSubInfo?&resultFile=./reactjs/data/ccd_fns.json', method:'get', fit:true, rownumbers:true, pagination:true, pageSize:50,singleSelect:true">
					<thead> 
						<tr> 
							<th key = "0"  data-options="field:'ParameterName'"> Parameter Name </th>
							<th key = "1"  data-options="field:'ParameterValueHEX'"> Parameter Value </th>
							<th key = "2"  data-options="field:'ParameterValueDEC'"> Parameter Value DEC </th>
							<th key = "3"  data-options="field:'ParameterDescription'"> Parameter Description </th>
						</tr> 
					</thead>)
				</table>
			</div>
		)
		var table_sgsntrafficarecord_info = (
			<div title="DataGrid_SGSN_Record_Info" data-options="" style={layoutCustomStyle}>
				<table id="easyui-sgsn-info" className="easyui-datagrid" 
					data-options="url:'/api/getResultSubInfo?&resultFile=./reactjs/data/ccd_sgsn.json', method:'get', fit:true, rownumbers:true, pagination:true, pageSize:50,singleSelect:true" >
					<thead> 
						<tr> 
							<th key = "0"  data-options="field:'ParameterName'"> Parameter Name </th>
							<th key = "1"  data-options="field:'ParameterValueHEX'"> Parameter Value HEX </th>
							<th key = "2"  data-options="field:'ParameterValueDEC'"> Parameter Value DEC </th>
							<th key = "3"  data-options="field:'ParameterDescription'"> Parameter Description </th>
						</tr> 
					</thead>)
				</table>
			</div>
		)

		
		//{columnNodes_all} 
		var table_node_mme = (
			<table id="easyui-mme" className="easyui-datagrid" data-options=" remoteSort:false,multiSort:true">
				
			</table>
		)
		var table_node_sgsn = (
			<table id="easyui-sgsn" className="easyui-datagrid" data-options=" remoteSort:false,multiSort:true">
				
			</table>
		)
		
		
		if (this.state.datagridinfo.filename) {
			console.log('render:',this.state.datagridinfo.filename);
			if(this.state.datagridinfo.columninfo) {
		//		//tableNode_str = '<table className="easyui-datagrid" data-options="url:\'' + this.state.datagridinfo.filename +'\',method:\'get\',singleSelect:true,fit:true,fitColumns:true">'
				var columndata =  this.state.datagridinfo.columninfo;
		//		//var columnNodes_str = '<thead> <tr> ';
				var columnNodes = [];
				var i = 0;
				for (let columnNode of Object.keys(columndata)) {
					let column_field = "field:'" + columnNode + "', sortable:true ";
					columnNodes[i] = (<th key={i} data-options={column_field}> {columndata[columnNode]} </th>);
					i = i + 1;
				} 
				var columnNodes_all = (<thead> <tr> {columnNodes} </tr> </thead>);
		//		var tableNode = (<table className="easyui-datagrid" data-options="url:{{this.state.datagridinfo.filename}},method:'get',singleSelect:true,fit:true,fitColumns:true"> {columnNodes_all} </table>);
		//
				//var table_data_options="url:'./reactjs/data/datagrid_data1.json',method:'get',singleSelect:true,fit:true,fitColumns:true";
				//data-options = "url:'./reactjs/data/datagrid_data1.json',method:'get',singleSelect:true,fit:true,fitColumns:true">
				//var table_data_options = "url:'" + this.state.datagridinfo.filename + "',method:'get',singleSelect:true,fit:true,fitColumns:true, rownumbers:true, pagination:true, remoteSort:false,multiSort:true";
				var table_data_options = "url:'/api/getResultSubInfo?&resultFile=" + this.state.datagridinfo.filename + "',method:'get',singleSelect:true,fit:true,fitColumns:true, rownumbers:true, pagination:true, remoteSort:false,multiSort:true";
				console.log('render:',table_data_options);
				console.log('url:',"getResultSubInfo?&resultFile=" + this.state.datagridinfo.filename );
				var table_node_mme = (
					<table id="easyui-mme" className="easyui-datagrid" data-options={table_data_options}>
						 
					</table>
				)
				var table_node_sgsn = (
					<table id="easyui-sgsn" className="easyui-datagrid" data-options={table_data_options}>
						  
					</table>
				)
		

				return (			
					<div data-options="region:'center',title:'数据表格',iconCls:'icon-ok'">
						<div className="easyui-tabs" data-options="fit:true,border:false,plain:true,rownumbers:true, pageSize:50, pagination:true,">
							<div title="DataGrid_MME" data-options="" style={layoutCustomStyle}>
								{table_node_mme}
								
							</div>
							<div title="DataGrid_SGSN" style={layoutCustomStyle}>
								{table_node_sgsn}
								
							</div>
							{table_mmetrafficarecord_info}
							{table_sgsntrafficarecord_info}
						</div>
					</div>	
						
				)
			} 
		} else {
			return (
				<div data-options="region:'center',title:'数据表格',iconCls:'icon-ok'">
					<div className="easyui-tabs" data-options="fit:true,border:false,plain:true">
							<div title="DataGrid_MME" data-options="" style={layoutCustomStyle}>
								{table_node_mme}
								
							</div>
							<div title="DataGrid_SGSN" style={layoutCustomStyle}>
								{table_node_sgsn}
								
							</div>
							{table_mmetrafficarecord_info}
							{table_sgsntrafficarecord_info}
						</div>
				</div>
			);
		}
			//console.log('tableNode_str:',tableNode_str);
			//var table_data_options = "url:'" + this.state.datagridinfo.filename + "',method:'get',singleSelect:true,fit:true,fitColumns:true";
			//return (			
      //  <div data-options="region:'center',title:'数据表格',iconCls:'icon-ok'">
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
			//	<div data-options="region:'center',title:'数据表格',iconCls:'icon-ok'">
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
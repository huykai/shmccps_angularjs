var shmcc_app =  angular.module('shmcc_app',['ui.wisoft','ui.wisoft.tpls']);

var mainSubmitCtrl = ["$rootScope","$scope","$document","choosedataService","$http",function($rootScope,$scope,$document,choosedataService,$http) {
    var vm = $scope;
    
    vm.document = $document;
    vm.rootscope = $rootScope;

    function pad(num, n) {
        return (new Array(n >(''+num).length ? (n - (''+num).length+1) : 0).join('0') + num);
    };

    vm.date = '20'+pad(parseInt(Math.random()*14+1),2)+'-'+pad(parseInt(Math.random()*10+1),2)+'-'+pad(parseInt(Math.random()*28+1),2);
	var currdate = new Date();
	var predate = new Date(currdate.valueOf() + (-1 * 3600000));
	//console.log(predate);
    vm.end_date = currdate.getFullYear()+"/"+(currdate.getMonth()+1)+"/"+currdate.getDate();
	vm.end_time = currdate.getHours()+":"+currdate.getMinutes()+":"+currdate.getSeconds();
	vm.begin_date = predate.getFullYear()+"/"+(predate.getMonth()+1)+"/"+predate.getDate();	
	vm.begin_time = predate.getHours()+":"+predate.getMinutes()+":"+predate.getSeconds();
	vm.begin_datetime = vm.begin_date + " " + vm.begin_time;
	vm.end_datetime = vm.end_date + " " + vm.end_time;
	
	vm.onPickedHandler = function (data) {
        alert(data)
    };

    vm.onClearedHandler = function (data) {
        alert("日期被清空")
    };
    
	vm.mydata = [
		{id:0,name:'15'},
		{id:1,name:'60'}
	];
    vm.mydata2 = [
		{id:0,name:'TAC'},
		{id:1,name:'MME'},
		{id:2,name:'Session'},
		{id:3,name:'SAEGW'}
	];
	vm.selected = vm.mydata[0];
	vm.selected2 = vm.mydata2[0];
    vm.itemChangeHandler = function (data){
        console.log(data);
        vm.selected = data;
    };
			
	vm.itemChangeHandler2 = function (data){
        console.log(data);
        vm.selected2 = data;
    };	
    
    vm.queryStatis = function() {
		var config = {
			transformResponse: function (data,headers) {
				console.log(angular.element(data.trim()));
				console.log(headers);
				console.log('Content-type:' + headers("Content-type"));
				if (headers("Content-type").indexOf("text/xml") >= 0 
					&& angular.isString(data)) {
					//var StatsData = [];
					//var titleElems = angular.element(data.trim()).find("name");
					//console.log(titleElems);
					//for (var i = 0; i < titleElems.length; i++) {
					//	var title = titleElems.eq(i);
					//	console.log(title);
					//}
					//console.log('Response Data:' + data); 
					var x2js = new X2JS(); 
      				var aftCnv = x2js.xml_str2json(data);
      				//console.log('aftCnv ' + aftCnv); 
      				return aftCnv; 
				}
			}
		}

		var postconfig = {
			method:'post',  
   			url:'scripts/PM_statis_report.py',  
   			data:{startdate:"2017/02/11",starttime:"12:00",stopdate:"2017/02/11",stoptime:"13:00"},  
   			//data : "startdate='2017/02/11'",
			headers:{'Content-Type': 'application/x-www-form-urlencoded'},  
   			
			//transformRequest: function(data){
 			//   return $.param(data);
			//}

			transformRequest: function(data) {  
     			var str = [];  
     			for(var p in data){  
       				str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));  
     			}  
     			return str.join("&");
				// console.log('postconfig:' + $.param(data));
				// return $.param(data);  
   			}	  
		};
		
		//$http.get("scripts/PM_statis_report.py",config).success(function(data){
        $http.get("/api/mme_query",config).success(function(data){
			console.log(data);
			var newcolumns = $rootScope.addcolumns(data.response.Title);
			var newdatas = $rootScope.adddatas(data.response.Item);
			var newtabname = data.response.TabName.name;
			var newtab = $rootScope.addtab(newtabname, newdatas, newcolumns);
			$rootScope.tabs.push(newtab);
		}).error(function(data, header, config, status){
			console.log(status);
		});
		
	};

	$rootScope.addtab = function(name, datas, columns){
		var newtab = {};
		var id = $rootScope.tabs.length;
		//console.log(datas);
		//console.log(columns);
		newtab.id = id + 1;
		newtab.name = name;
		newtab.col =  columns;
		newtab.datas = datas;
		return newtab;
	};
	$rootScope.addcolumns = function(titles){
		var newcolumns = [];
		//{id:0,children:0,headtext:'mme1',datafield:"n1",name:"111"},
		//console.log(titles);
		for (var titleid in titles.name) {
			var newcolumn = {};
			newcolumn.id = titleid;
			newcolumn.children = 0;
			newcolumn.headtext = titles.name[titleid];
			newcolumn.datafield = 'col'+String(titleid);
			newcolumn.name = titles.name[titleid]
			newcolumns.push(newcolumn);
		}
		return newcolumns;	
	};
	$rootScope.adddatas = function(datas){
		var newdatas = []; 
		//[
		//{n1:"0",n2:"1",n3:"2",n4:"3",n5:"4"},
		//{n1:"0",n2:"1",n3:"2",n4:"3",n5:"4"},
		//{n1:"0",n2:"1",n3:"2",n4:"3",n5:"4"},
		//{n1:"0",n2:"1",n3:"2",n4:"3",n5:"4"},
		//{n1:"0",n2:"1",n3:"2",n4:"3",n5:"4"}
		//],
		//console.log(datas);
		for (var dataid in datas) {
			var data = {};
			for (var datacolid in datas[dataid].ItemCol)
				//console.log(datas[dataid].ItemCol[datacolid]);
				data['col'+String(datacolid)] = datas[dataid].ItemCol[datacolid].value;
			newdatas.push(data);
		}
		//console.log(newdatas);
		return newdatas;
	};
	
	$rootScope.changecolumn = function(names){
		for (var i = 0; i < 5; i++){
			//console.log(names[i]);
			$rootScope.columns_2[i].id = i;
			$rootScope.columns_2[i].headtext = names[i];
			console.log($rootScope.columns_2[i].headtext);
		}
		$rootScope.columns=$rootScope.columns_2;
		// the old columns info in $scope
		//for (var i = 0; i < 5; i++){
		//	console.log($scope.columns[i].headtext);
		//}
	};

	$rootScope.changedatas = function(datas){
		//$rootScope.datas[0]
		for (var i = 0; i < 5; i++){
			console.log(datas[i].ItemCol[i].value);
			$rootScope.datas[3][i].n1 = datas[i].ItemCol[0].value;
			$rootScope.datas[3][i].n2 = datas[i].ItemCol[1].value;
			$rootScope.datas[3][i].n3 = datas[i].ItemCol[2].value;
			$rootScope.datas[3][i].n4 = datas[i].ItemCol[3].value;
			$rootScope.datas[3][i].n5 = datas[i].ItemCol[4].value;
			//console.log($rootScope.currdata.name);
		}
		//$rootScope.currdata = $rootScope.datas[0];
	};

	vm.getelement = function(treedata_element) {
		var elements = [];
		var element_typeid = '';
		for (var elementid in treedata_element) {
			var eo = treedata_element[elementid];
			//console.log(eo);
			if (eo.pid == 'root' && eo.text == 'Element') {
				element_typeid = eo.id;
				if (eo.__selected == true && eo.__semi == false) {
					elements.push('all');
					console.log(elements);
					return elements;
				} else if (eo.__selected == false) {
					elements.push('none');
					//console.log('none');
					return elements;
				} 
			} 
			if (eo.pid == element_typeid ) {
				elements.push(eo.text);
			}
		};
		console.log('return elements' + elements.toString());
		return elements;
	};

	vm.getkpi = function(treedata_kpi){
		var kpis = [];
		for (var kpiid in treedata_kpi) {
			var eo = treedata_kpi[kpiid];
			if (eo.__level == 2 && eo.__selected == true) {
				kpis.push(eo.text);
			}
		};
		return kpis;
	};

	vm.submitQuery = function(){
		var queryParameter={'startdate':'2016/12/20'};
		//console.log(queryParameter);
		queryParameter['startDate'] = vm.begin_datetime;
		queryParameter['stopDate'] = vm.end_datetime;
		//console.log(queryParameter);
		//console.log(this.rootscope);
        //var rootscope=$scope.parent;
        //console.log($scope.parent);
        console.log($rootScope.treedata_mme_element);
		console.log($rootScope.treedata_mme_kpi);

		if($rootScope.isMME == true) {
			var select_element = this.getelement($rootScope.treedata_mme_element);
			var select_kpi = this.getkpi($rootScope.treedata_mme_kpi);
		} else {
			var select_element = this.getelement($rootScope.treedata_saegw_element);
			var select_kpi = this.getkpi($rootScope.treedata_saegw_kpi);
		}
		//console.log(select_element);
		//console.log(select_kpi);
		this.queryStatis(select_element,select_kpi);
	};



}];

angular.module('shmcc_app').controller('mainSubmitCtrl',mainSubmitCtrl);

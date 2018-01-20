'use strict';
//var shmcc_app =  angular.module('shmcc_app',['ui.wisoft','ui.wisoft.tpls']);

var shmcc_app =  angular.module('shmcc_app',['ngCookies', 'appDirectives','appControllers','appServices','ngRoute','ui.wisoft','ui.wisoft.tpls','ui.bootstrap','chart.js']);

var appServices = angular.module('appServices', []);
var appControllers = angular.module('appControllers', []);
var appDirectives = angular.module('appDirectives', []);

var options = {};
options.api = {};
//options.api.base_url = "http://192.168.1.126:3000";
options.api.base_url = "http://127.0.0.1:3000";


shmcc_app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

shmcc_app.config(function ($httpProvider) {
	$httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push('TokenInterceptor');
	//console.log($httpProvider.interceptors[0]);
});

shmcc_app.service('getTreeData',function($q){
	this.getTreeData_elements = function(treedata_element) {
		var deffer = $q.defer();
		var elements = [];
		var element_typeid = '';
		for (var elementid in treedata_element) {
			var eo = treedata_element[elementid];
			//console.log(eo);
			if (eo.pid == 'root' && eo.text == 'Element') {
				element_typeid = eo.id;
				if (eo.__selected == true && eo.__semi == false) {
					elements.push('all');
					//console.log(elements);
					deffer.notify(elements);
					//return deffer.promise;
					//return elements;
					break;
				} else if (eo.__selected == false && eo.__semi == false) {
					elements.push('none');
					//console.log('none');
					//return elements;
					deffer.reject('Choose None!');
					return deffer.promise;
					//break;
				} 
			} else if (eo.__selected == true && eo.pid == element_typeid ) {
				elements.push(eo.text);
			}
		};
		//console.log('return elements: ' + elements.toString());
		deffer.resolve(elements);
		return deffer.promise;
	};
	this.getTreeData_kpis = function(treedata_kpi){
		//var deffer = $q.defer();
		var kpis = [];
		for (var kpiid in treedata_kpi) {
			var eo = treedata_kpi[kpiid];
			if (eo.__level == 2 && eo.__selected == true) {
				kpis.push(eo.text);
			}
		};
		//deffer.resolve(kpis);
		return kpis;
	}
});

var mainSubmitCtrl = ["getTreeData","$rootScope", "$interpolate", "$scope","$document","choosedataService","$http",function(getTreeData,$rootScope,$interpolate,$scope,$document,choosedataService,$http) {
    var vm = $scope;

	$rootScope.queryoptionchanged = false;
	var queryDetailtemplatedesc = "The Query detail is : \n Elemens: {{ elementlist }} \t KPIs: {{kpilist}} \n Time Period : {{querystarttime}} .. {{querystoptime}} \t Statistics Time Unit: {{queryperiod}} \t Statistics Unit Type: {{queryunit}}";
    $rootScope.QueryDetailtemplate = $interpolate(queryDetailtemplatedesc);
	$rootScope.QueryDetailDesc = $rootScope.QueryDetailtemplate(); 
	$rootScope.isMME = true;
	vm.document = $document;
	$rootScope.tabs = [];
    vm.rootscope = $rootScope;

    function pad(num, n) {
        return (new Array(n >(''+num).length ? (n - (''+num).length+1) : 0).join('0') + num);
    };

    vm.date = '20'+pad(parseInt(Math.random()*14+1),2)+'-'+pad(parseInt(Math.random()*10+1),2)+'-'+pad(parseInt(Math.random()*28+1),2);
	var currdate = new Date();
	var predate = new Date(currdate.valueOf() + (-1 * 3600000));
	//console.log(predate);
	var end_date_year = currdate.getFullYear(); 
    var end_date_month = ((currdate.getMonth()+1)<10)?("0"+(currdate.getMonth()+1)):(currdate.getMonth()+1);
	var end_date_day = ((currdate.getDate()+1)<10)?("0"+(currdate.getDate())):(currdate.getDate());
    var end_time_hour = ((currdate.getHours())<10)?("0"+(currdate.getHours())):(currdate.getHours()); 
    var end_time_min = ((currdate.getMinutes())<10)?("0"+(currdate.getMinutes())):(currdate.getMinutes());
	var end_time_sec = ((currdate.getSeconds())<10)?("0"+(currdate.getSeconds())):(currdate.getSeconds());

	var pre_date_year = predate.getFullYear(); 
    var pre_date_month = ((predate.getMonth()+1)<10)?("0"+(predate.getMonth()+1)):(predate.getMonth()+1);
	var pre_date_day = ((predate.getDate())<10)?("0"+(predate.getDate())):(predate.getDate());
    var pre_time_hour = ((predate.getHours())<10)?("0"+(predate.getHours())):(predate.getHours()); 
    var pre_time_min = ((predate.getMinutes())<10)?("0"+(predate.getMinutes())):(predate.getMinutes());
	var pre_time_sec = ((predate.getSeconds())<10)?("0"+(predate.getSeconds())):(predate.getSeconds());
    

	vm.end_date = end_date_year +"/"+ end_date_month + "/" + end_date_day;
	vm.end_time = end_time_hour +":"+ end_time_min + ":" + end_time_sec;
	vm.begin_date = pre_date_year +"/"+ pre_date_month + "/" + pre_date_day;
	vm.begin_time = pre_time_hour +":"+ pre_time_min + ":" + pre_time_sec;
	
	$rootScope.begin_datetime = vm.begin_date + " " + vm.begin_time;
	$rootScope.end_datetime = vm.end_date + " " + vm.end_time;
	$rootScope.select_element = [];
	$rootScope.select_kpi = [];
		
	vm.onPickedHandler = function (data) {
        alert(data)
    };

    vm.onClearedHandler = function (data) {
        alert("日期被清空")
    };

	vm.onStartPickedHandler =  function(data) {
		//alert(data);
		$rootScope.begin_datetime = data;
        $rootScope.queryoptionchanged = !$rootScope.queryoptionchanged;
    };
	vm.onStopPickedHandler =  function(data) {
		//alert(data);
		$rootScope.end_datetime = data;
        $rootScope.queryoptionchanged = !$rootScope.queryoptionchanged;
    };
	vm.itemPeriodChangeHandler =  function(data) {
		$rootScope.statis_period = data;
        $rootScope.queryoptionchanged = !$rootScope.queryoptionchanged;
    };
	vm.itemUnitChangeHandler =  function(data) {
		console.log('itemUnitChangeHandler: ' ,data);
		if ($rootScope.isMME) {
			$rootScope.mme_statis_unit = data;
		} else {
			$rootScope.saegw_statis_unit = data;
		}
        $rootScope.queryoptionchanged = !$rootScope.queryoptionchanged;
    };
	vm.itemAlarmLevelChangeHandler = function(data){
		$rootScope.alarm_level = data;
		//console.log(data);
	}
	$rootScope.$watch('queryoptionchanged', function(newVal,oldVal){
		console.log('queryoptionchanged :', newVal, oldVal );
		console.log('isMME :', $rootScope.isMME );
		if($rootScope.isMME == true) {
			//var select_element = getTreeData.getTreeData_elements($rootScope.treedata_mme_element);
			getTreeData.getTreeData_elements($rootScope.treedata_mme_element)
			.then(function(data){
				$rootScope.select_element = data;
				//console.log('succ: ');
				//console.log(data.toString());
				//console.log(select_element);
				genQueryDetail();
			}, function(data){
				$rootScope.select_element = ['Error'];
				//console.log('err: ' + data.toString());
				genQueryDetail();
			}, function( data ) {
				$rootScope.select_element = ['All'];
				//console.log('notice: ' + data.toString());
				genQueryDetail();
			});
			//console.log(select_element);
			$rootScope.select_kpi = getTreeData.getTreeData_kpis($rootScope.treedata_mme_kpi);
			//var select_element = $rootScope.getelement($rootScope.treedata_mme_element);
			//var select_kpi = $rootScope.getkpi($rootScope.treedata_mme_kpi);
		} else {
			//var select_element = $rootScope.getelement($rootScope.treedata_saegw_element);
			//var select_kpi = $rootScope.getkpi($rootScope.treedata_saegw_kpi);
			//var select_element = getTreeData.getTreeData_elements($rootScope.treedata_saegw_element);
			getTreeData.getTreeData_elements($rootScope.treedata_saegw_element)
			.then(function(data){
				$rootScope.select_element = data;
				genQueryDetail();
			}, function(data){
				$rootScope.select_element = ['Error'];
				genQueryDetail();
			}, function( data ) {
				$rootScope.select_element = ['All'];
				genQueryDetail();
			});
			$rootScope.select_kpi = getTreeData.getTreeData_kpis($rootScope.treedata_saegw_kpi);
		}

		var treedata_elementdemo = [];
		for (var dataid in $rootScope.treedata_mme_element) {
			var treedataitem = {}
			treedataitem.pid = $rootScope.treedata_mme_element[dataid].pid;
			treedataitem.id = $rootScope.treedata_mme_element[dataid].id;
			treedataitem.text = $rootScope.treedata_mme_element[dataid].text;
			treedataitem.__selected = $rootScope.treedata_mme_element[dataid].__selected;
			treedataitem.__semi = $rootScope.treedata_mme_element[dataid].__semi;
			treedataitem.__level = $rootScope.treedata_mme_element[dataid].__level;
			treedata_elementdemo.push(treedataitem);
		};

		var treedata_kpidemo = [];
		for (var dataid in $rootScope.treedata_mme_kpi) {
			var treedataitem = {}
			treedataitem.pid = $rootScope.treedata_mme_kpi[dataid].pid;
			treedataitem.id = $rootScope.treedata_mme_kpi[dataid].id;
			treedataitem.text = $rootScope.treedata_mme_kpi[dataid].text;
			treedataitem.__selected = $rootScope.treedata_mme_kpi[dataid].__selected;
			treedataitem.__semi = $rootScope.treedata_mme_kpi[dataid].__semi;
			treedataitem.__level = $rootScope.treedata_mme_kpi[dataid].__level;
			treedata_kpidemo.push(treedataitem);
		};
		
		//console.log(angular.toJson(treedata_elementdemo));
		//console.log(angular.toJson(select_element));
		//console.log(angular.toJson(treedata_kpidemo));
		//console.log(angular.toJson(select_kpi));
		//console.log(angular.toJson($rootScope.treedata_mme_element[1]));
		//console.log(angular.toJson($rootScope.treedata_mme_element[2]));
		//console.log(angular.toJson($rootScope.treedata_mme_kpi[0]));
		
		var genQueryDetail = function(){
			//console.log('genQueryDetail: ',select_element);
				
			if ($rootScope.isMME) {
					var queryunit_info = $rootScope.mme_statis_unit.name;
			} else {
					var queryunit_info = $rootScope.saegw_statis_unit.name;
			}
			console.log('queryunit_info: ' , queryunit_info);
			$rootScope.QueryDetailDesc = $rootScope.QueryDetailtemplate(
			{
				elementlist: $rootScope.select_element,
			 	kpilist: $rootScope.select_kpi,
				querystarttime: $rootScope.begin_datetime,
				querystoptime: $rootScope.end_datetime,
				queryperiod: $rootScope.statis_period.name,
				queryunit: queryunit_info
			});
	};
		
	});

	
    
	vm.mydata = [
		{id:0,name:'15'},
		{id:1,name:'60'}
	];
    vm.mydata_mme = [
		{id:0,name:'MME'},
		{id:1,name:'TAC'},
	];
	vm.mydata_saegw = [
		{id:0,name:'SAEGW'},
		{id:1,name:'SESSION'}
	];
	vm.mydata_alarm_level = [
		{id:0,name:'All'},
		{id:1,name:'Critical'},
		{id:2,name:'Major'},
		{id:3,name:'Minor'},
		{id:4,name:'Info'}
	];
	vm.alarm_number = "All";
	vm.apistring = {
		'MME_query'		:	'/api/mme_query',
		'SAEGW_query'	:	'/api/saegw_query',
		'MME_query_alarm'		:	'/api/mme_query_alarm',
		'SAEGW_query_alarm'	:	'/api/saegw_query_alarm'
	}

	$rootScope.statis_period = vm.mydata[0];

	$rootScope.mme_statis_unit = vm.mydata_mme[0];
	$rootScope.saegw_statis_unit = vm.mydata_saegw[0];
	
	$rootScope.alarm_level = vm.mydata_alarm_level[0];
	$rootScope.alarm_number = vm.alarm_number;

	vm.itemChangeHandler = function (data){
        //console.log(data);
        vm.mme_statis_period = data;
    };
			
	
    
    vm.queryStatis = function(param_config) {
		$rootScope.tabs = [];
		var config = {
			transformResponse: function (data,headers) {
				//console.log(angular.element(data.trim()));
				//console.log(headers);
				//console.log('Content-type:' + headers("Content-type"));
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
   			//url:'scripts/PM_statis_report.py',  
   			//data:{startdate:"2017/02/11",starttime:"12:00",stopdate:"2017/02/11",stoptime:"13:00"},  
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
     			//console.log('transformRequest: ' , str.join("&"));
				return str.join("&");
				
				// console.log('postconfig:' + $.param(data));
				// return $.param(data);  
   			},
			transformResponse: function (data,headers) {
				//console.log(angular.element(data.trim()));
				//console.log(headers);
				//console.log('Content-type:' + headers("Content-type"));
				//console.log('post response data:', data);
				//console.log('post response header:', headers);
				if (headers("Content-type").indexOf("text/xml") >= 0 
					&& angular.isString(data)) {
					//var StatsData = [];
					//var titleElems = angular.element(data.trim()).find("name");
					//console.log(titleElems);
					//for (var i = 0; i < titleElems.length; i++) {
					//	var title = titleElems.eq(i);
					//	console.log(title);
					//}
					//console.log('Response Data after transform:' + data); 
					var x2js = new X2JS(); 
      				var aftCnv = x2js.xml_str2json(data);
					console.log('x2js:',x2js);
					console.log('Response Data after transform:' + aftCnv); 
      				//console.log('aftCnv ' + aftCnv); 
      				return aftCnv; 
				}
			}	  
		};
		
		config.params = param_config;
		//$http.get("scripts/PM_statis_report.py",config).success(function(data){
		//this.getapi('/api/mme_query',config);
		postconfig.data = param_config;
		//console.log('param_config=', angular.toJson(param_config));
		if ($rootScope.isAlarmQuery) {
			if($rootScope.isMME == true) {
				console.log('api_string: ',this.apistring['MME_query_alarm']);
				this.postapi(this.apistring['MME_query_alarm'],postconfig);
			} else {
				console.log('saegw alarm_string: ',this.apistring['SAEGW_query_alarm']);
				console.log('saegw postconfig: ',postconfig);
				this.postapi(this.apistring['SAEGW_query_alarm'],postconfig);
			}
		} else {
			if($rootScope.isMME == true) {
				console.log('api_string: ',this.apistring['MME_query']);
				this.postapi(this.apistring['MME_query'],postconfig);
			} else {
				console.log('saegw api_string: ',this.apistring['SAEGW_query']);
				console.log('saegw postconfig: ',postconfig);
				this.postapi(this.apistring['SAEGW_query'],postconfig);
			}
		}
		
		//config.params = param_config ;
		//console.log(config);
		// get mode : need config.params , 
		//            as api?xxxxxxx
		// post mode : need config.data as post data, 
		//             and need modify the config.headers and config.transformRequest
		//            in server part, need add:
		//     var urlencodedParser = bodyParser.urlencoded({ extended: false })
		//     app.all('/api/*', urlencodedParser, routers);
		// ps: in app.js if add:
		//     app.use(bodyParser());  (deprecated)
		//     can evade the problem above, the bodyParser will handle json and urlencoded automatically
        //     but as bodyparser's advise, better "use individual json/urlencoded middlewares"
		
	};

	vm.getapi = function(api_string,config) {
		//$http.get("/api/mme_query",config).success(function(data){
		$http.get(api_string,config).success(function(data){
			//console.log(data);
			for (var tableid in data.response){
				var newcolumns = $rootScope.addcolumns(data.response[tableid].Title);
				var newdatas = $rootScope.adddatas(data.response[tableid].Item);
				var newtabname = data.response[tableid].TabName.name;
				//console.log(newcolumns)
				//console.log(newdatas)
				//console.log(newtabname)
				var newtab = $rootScope.addtab(newtabname, newdatas, newcolumns);
				$rootScope.tabs.push(newtab);
			}
			
		}).error(function(data, header, config, status){
			console.log(status);
		});
	};

	vm.postapi = function(api_string,config) {
		//$http.get("/api/mme_query",config).success(function(data){
		config.headers = {'Content-Type': 'application/x-www-form-urlencoded'};
		// success can only be used in angular 1.5 and before, 
		// $http.post(api_string, config.data ,config).success(function(data){
		// after angular 1.5 we should use then
		//console.log('postapi config',config);
		$http.post(api_string, config.data ,config)
		.then(function(data){
			//console.log('post data return: ',angular.toJson(data));
			var tabs = [];
			for (var tableid in data.data.response){
				var newcolumns = $rootScope.addcolumns(data.data.response[tableid].Title);
				var newdatas = $rootScope.adddatas(data.data.response[tableid].Item);
				var newtabname = data.data.response[tableid].TabName.name;
				//console.log(newcolumns)
				//console.log(newdatas)
				//console.log(newtabname)
				var newtab = $rootScope.addtab(newtabname, newdatas, newcolumns);
				tabs.push(newtab);
				//$rootScope.activetab = newtab;
			}
			$rootScope.tabs = tabs;
			//$rootScope.activetab = $rootScope.tabs[$rootScope.tabs.length];
		// before angular 1.5 can use er ror()
		//}).error(function(data, header, config, status){
		// after it , should use then	
		},function(data, header, config, status){
			console.log('status: ', status);
			console.log('data: ', data);
			console.log('header: ', header);
			console.log('config: ', config);
			if (data.status === 401 || data.status === 403) {
				window.location.href = '/';
			}
		}
		);
	};

	$scope.urlTo = function(path) {
		$location.path(path);
	};
	$rootScope.addtab = function(name, datas, columns){
		var newtab = {};
		var id = this.tabs.length;
		//console.log(datas);
		//console.log(columns);
		newtab.id = id + 1;
		newtab.name = name;
		newtab.col =  columns;
		newtab.datas = datas;
		
		return newtab;
	};
	$rootScope.addcolumns = function(titles){
		//console.log('addcolumns: ', titles);
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
		//console.log('addcolumns: ', newcolumns);
		return newcolumns;	
	};
	$rootScope.adddatas = function(datas){
		var newdatas = []; 
		//console.log('adddatas:',datas);
		if (datas instanceof(Array)) {
			//console.log('adddatas: Array');
			for (var dataid in datas) {
				var data = {};
				for (var datacolid in datas[dataid].ItemCol)
					//console.log(datas[dataid].ItemCol[datacolid]);
					data['col'+String(datacolid)] = datas[dataid].ItemCol[datacolid].value;
				newdatas.push(data);
			}
		} else {
			var data = {};
			//console.log('adddatas: Object ');
			for (var datacolid in datas.ItemCol)
				//console.log(datas[dataid].ItemCol[datacolid]);
				data['col'+String(datacolid)] = datas.ItemCol[datacolid].value;
			newdatas.push(data);
		}
		
		//console.log(newdatas);
		return newdatas;
	};
	
	

	$rootScope.getelement = function(treedata_element) {
		var elements = [];
		var element_typeid = '';
		for (var elementid in treedata_element) {
			var eo = treedata_element[elementid];
			//console.log(eo);
			if (eo.pid == 'root' && eo.text == 'Element') {
				element_typeid = eo.id;
				if (eo.__selected == true && eo.__semi == false) {
					elements.push('all');
					//console.log(elements);
					return elements;
				} else if (eo.__selected == false && eo.__semi == false) {
					elements.push('none');
					//console.log('none');
					return elements;
				} 
			} else if (eo.__selected == true && eo.pid == element_typeid ) {
				//console.log('eo.text: ',eo_text);
				elements.push(eo.text);
			}
		};
		//console.log('return elements' + elements.toString());
		return elements;
	};

	$rootScope.getkpi = function(treedata_kpi){
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
		var queryParameter={};
		//console.log(queryParameter);
		var startdatetime = vm.begin_datetime.split(' ');
		queryParameter['startDate'] = startdatetime[0]; 
		queryParameter['startTime'] = startdatetime[1]; 
		var stopdatetime = vm.end_datetime.split(' ');
		queryParameter['stopDate'] = stopdatetime[0];
		queryParameter['stopTime'] = stopdatetime[1];
		//console.log(queryParameter);
		//console.log(this.rootscope);
        //var rootscope=$scope.parent;
        //console.log($scope.parent);
        //console.log($rootScope.treedata_mme_element);
		//console.log($rootScope.treedata_mme_kpi);

		//console.log('select_element: ', $rootScope.select_element);
		//console.log('select_kpi: ', $rootScope.select_kpi);
		var config = {};
		if ($rootScope.isMME) {
			config.selectmmesgsn = $rootScope.select_element;	
		} else {
			config.selectsaegwggsn = $rootScope.select_element;
		}
		
		config.startdate = queryParameter['startDate'];
		config.starttime = queryParameter['startTime'];
		config.stopdate = queryParameter['stopDate'];
		config.stoptime = queryParameter['stopTime'];
		if (!$rootScope.isAlarmQuery) {
			config.kpilist = $rootScope.select_kpi;
			config.selectperiod = this.statis_period.name;
			config.selectmmeelement = this.mme_statis_unit.name;
			config.selectsaegwelement = this.saegw_statis_unit.name;
		} else {
			config.alarm_level = $rootScope.alarm_level.id;
			config.alarm_number = $rootScope.alarm_number;
			config.isAlarmDetail = $rootScope.isAlarmDetail;	
		}
		config.isMME = $rootScope.isMME;
		//console.log('config: ',config);
		this.queryStatis(config);
	};

	$scope.$watch('$viewContentLoaded', function() {
            
    });
    

}];

shmcc_app.config(['$locationProvider', '$routeProvider', 
  function($location, $routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '/index_main_v2.html',
            controller: 'mainSubmitCtrl',
			access: { requiredAuthentication: true }
        }).
		when('/admin/register', {
            templateUrl: 'partials/admin.register.html',
            controller: 'AdminUserCtrl'
        }).
        when('/admin/login', {
            templateUrl: 'partials/admin.signin.html',
            controller: 'AdminUserCtrl'
        }).
        when('/admin/logout', { 
            templateUrl: 'partials/admin.logout.html',
            controller: 'AdminUserCtrl',
            access: { requiredAuthentication: true }
        }).
		when('/alarm/query', { 
            templateUrl: 'partials/vueindex.html'
            //access: { requiredAuthentication: true }
        }).
        otherwise({
            redirectTo: '/'
        });
}]);

shmcc_app.run(function($rootScope, $cookies, $http, $location, $window, AuthenticationService) {
	//$rootScope.csrftoken = $cookies.get('XSRF-TOKEN');
    $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
		//$rootScope.csrftoken = $cookies.get('XSRF-TOKEN');
		//$http.defaults.headers.common['x-csrf-Token']  = $cookies.get('XSRF-TOKEN');
		$rootScope.isAuthenticated = AuthenticationService.isAuthenticated;
		$rootScope.currentUser = AuthenticationService.currentUser;
		if (!$rootScope.isAuthenticated) {
			$rootScope.isAuthenticated = $window.sessionStorage.isAuthenticated;
			$rootScope.currentUser = $window.sessionStorage.currentUser;
		};
        //redirect only if both isAuthenticated is false and no token is set
        if (nextRoute != null && nextRoute.access != null && nextRoute.access.requiredAuthentication 
            && !AuthenticationService.isAuthenticated && !$window.sessionStorage.token) {

            $location.path("/admin/login");
        }
    });

	$rootScope.$on("isAuthenticated", function(event, nextRoute, currentRoute) {
		//$rootScope.isAuthenticated = AuthenticationService.isAuthenticated;
		//$rootScope.currentUser = AuthenticationService.currentUser;

        //redirect only if both isAuthenticated is false and no token is set
        if ($rootScope.isAuthenticated == false) {

            $location.path("/admin/login");
        }
    });
	//$http.defaults.headers.common['x-csrf-Token']  = $cookies.get('XSRF-TOKEN');
	//$http.defaults.headers.common['x-csrf-Token']  = 'CwXEY6AG3_I5k_zVeI34Z3QF';
	//console.log($cookies['csrftoken']);
});

var click = function(){
	console.log("hello");
}

angular.module('shmcc_app').controller('mainSubmitCtrl',mainSubmitCtrl);

var DataGridDemoExcelCtrl=['$rootScope','$scope',function($rootScope,$scope) {
	$rootScope.columns_1=[
		{id:0,children:0,headtext:'mme1',datafield:"n1",name:"111"},
		{id:1,children:0,headtext:'mme2',datafield:"n2",name:"112"},
		{id:2,children:0,headtext:'mme3',datafield:"n3",name:"113"},
		{id:3,children:0,headtext:'mme4',datafield:"n4",name:"114"},
		{id:4,children:0,headtext:'mme5',datafield:"n5",name:"115"}
	];
	$rootScope.columns_2=[
		{id:0,children:0,headtext:'mme1',datafield:"n1",name:"111"},
		{id:1,children:0,headtext:'mme2',datafield:"n2",name:"112"},
		{id:2,children:0,headtext:'mme3',datafield:"n3",name:"113"},
		{id:3,children:0,headtext:'mme4',datafield:"n4",name:"114"},
		{id:4,children:0,headtext:'mme5',datafield:"n5",name:"115"}
	];
	$rootScope.columns=$rootScope.columns_1;

	var columninfo=$rootScope.columns;
	
	$rootScope.datas=[
		//[
		//{n1:"0",n2:"1",n3:"2",n4:"3",n5:"4"},
		//{n1:"0",n2:"1",n3:"2",n4:"3",n5:"4"},
		//{n1:"0",n2:"1",n3:"2",n4:"3",n5:"4"},
		//{n1:"0",n2:"1",n3:"2",n4:"3",n5:"4"},
		//{n1:"0",n2:"1",n3:"2",n4:"3",n5:"4"}
		//],
	];
	
	//var datas = $rootScope.datas;
	$rootScope.currdata = $rootScope.datas[1];
    //$rootScope.currdata = $rootScope.datas[1];
	$scope.columnlen=4;
	$rootScope.tabs=[
		//{id:0,name:"tab1",col:columninfo},
		
	];
	
    $scope.dg={};

	$scope.tab_select = function( data ){
		for (var tab in $rootScope.tabs) {
			if ($rootScope.tabs[tab].name == data.heading) {
				$rootScope.activetab = $rootScope.tabs[tab];
			}
		}
		console.log($rootScope.activetab);
		//console.log(data);
	};

    $scope.datagridhtml='<wi-tabset width="100%" height="600px" > \
				<wi-tab ng-repeat="tab in tabs" heading="{{tab.name}}" active="true" width="100%" \
										 height="100%" ng-init="tabindex = $index"> \
									<unfillcolumn id="button_submit" columns="4"></unfillcolumn> \
									<wi-tab ng-repeat="tab in tabs" heading="{{tab.name}}" active="true" width="100%" \
										 height="100%" ng-init="tabindex = $index"> \
										<wi-datagrid dataprovider="datas[$index]" wid="dg" width="100%" \
										height="100%" pagemode="none" showno="true" 			showexcel="true"> \
										<wi-datagrid-column headtext="n1" datafield="n1" width="150px"></wi-datagrid-column> \
										<wi-datagrid-column headtext="n2" datafield="n2" width="150px"></wi-datagrid-column> \
										<wi-datagrid-column headtext="n3" datafield="n3" width="150px"></wi-datagrid-column> \
										<wi-datagrid-column headtext="n4" datafield="n4" width="150px"></wi-datagrid-column> \
										<wi-datagrid-column headtext="n5" datafield="n5" width="150px"></wi-datagrid-column> \
										</wi-datagrid> \
									</wi-tab> \
								</wi-tabset>'


    function pad(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }

    var dgData=[];

    for(var i=0;i<50;i++){
        var obj={};
        obj.username='username'+i;
        obj.address='address'+i;
        obj.date='2014-07-'+pad((i+1),2);
        obj.num = (i+1)*100;

        dgData.push(obj);
    }
    $scope.dgData = dgData;

    

	$scope.submitQuery = function(dataindex){
		
		console.log('button_datagrid click!');
		//console.log(this.currdata);
		//this.currdata=$rootScope.datas[dataindex];
		//console.log(this.currdata);
		$scope.queryStatis();
		
	};

}];
angular.module('shmcc_app').controller('DataGridDemoExcelCtrl',DataGridDemoExcelCtrl);
angular.module('shmcc_app').factory('choosedataService',function(){
	return {
        modify_dataindex: function(scope,dataindex){
            console.log("Service begin");
            
            //console.log(scope);
            //console.log(scope.currdata);
            //console.log(scope.datas[index]);
            //scope.currdata = scope.datas[index];
            //console.log(scope.currdata);
            dataindex=3;
            console.log("Service end");
            return dataindex;
        }
    }
});

function submitQuery() {
	var btn_p = document.getElementById('button_submit_p');
	var btn = document.getElementById('button_submit');
	alert(btn.getAttribute("unfillcolumn"));
	//btn.setAttribute("unfillcolumn","3");
	btn_p.removeChild(btn);
	btn=document.createElement("div");
	btn.id='button_submit';
	btn.setAttribute('un_fillcolumn','3');
	btn_p.appendChild(btn);
	
};



angular.module('ui.wisoft').directive("unFillcolumn",["$compile",function($compile){

	var unfillcolumnnObject = { 
  
		priority: 0, 


		template: function(element,attr){
			//var data = $scope.columns;
			var data=attr['modecolumn'];
			//var data='4';
			console.log(data);
			
			//<wi-tabset width="100%" height="600px" >
			//<wi-tab ng-repeat="tab in tabs" heading="{{tab.name}}" active="true" width="100%"
			//<wi-datagrid dataProvider="datas[$index]" wid="dg" width="100%"
			//								 height="100%"
			//									pagemode="client" showno="true"
			//									showexcel="true">
			//var witab='<wi-tab heading="{{tab.name}}" active="true" width="100%" height="100%">';
			var witabset = '<wi-tabset width="100%" height="600px" onselect="tab_select">';
			//var witable = '<wi-tab heading="tab" active="true" width="100%">';
			var witable = '<wi-tab ng-repeat="tab in tabs" heading={{tab.name}} active="true" width="100%">';
			//var widatagrid='<wi-datagrid  dataProvider="datas[0]" wid="dg" width="100%" \
			//	height="100%"	pagemode="client" showno="true" \
			//	showexcel="true">';
			
			//var widatagrid='<wi-datagrid  dataProvider="tab.datas" wid="dg" width="100%" \
			//	height="100%" columns="tab.col" pagemode="client" showno="true" wordwrap="true" lockcolumns="3" \
			//	showexcel="true">';
			//var wicolumn = "";
			
			var widatagrid='<wi-datagrid  dataProvider="tab.datas" wid="dg" width="100%" \
				height="100%" columns="tab.col" pagemode="client" showno="true" wordwrap="true" \
				showexcel="true">';
			var wicolumn = "";
			//if(angular.isArray(data)) {
				
				//for (var i=0; i<data;i++){
				//	wicolumn = wicolumn + '<wi-datagrid-column headtext={{hykcolumns['+i+'].name}} \
				//	datafield={{hykcolumns['+i+'].name}} \
				//	width=50px > </wi-datagrid-column>';	
				//}
				
				//for (var i=0; i<data;i++){
				//	wicolumn = wicolumn + '<wi-datagrid-column  \
				//	> </wi-datagrid-column>';	
				//}
				


			//}
			widatagrid = widatagrid + wicolumn + "</wi-datagrid>"
			witabset = witabset + witable + widatagrid + '</wi-tab>' + '</wi-tabset>';
			console.log(witabset);
			return witabset;
			
			//scope.$apply()
		},

		controller: function($rootScope){
			$rootScope.currdata = $rootScope.datas[1];
		},
		

		replace: false, 
  		transclude: false, 
  		restrict: 'EA', 
  		scope: false, 
  
 　　
	}; 
	return unfillcolumnnObject; 
}]);
var MenuCtrl = ['$rootScope',  '$location', function($rootScope,$location) {
    $rootScope.vm = {
        selectFn: function(f){
            if (f.id == '10') {
				$rootScope.isMME=true;
				
			}
			if (f.id == '11') {
				$rootScope.isMME=false;
				
			}
			if (f.id == '0') {
				//ctrl.click();
			}
			//console.log("MENU id: " + f.id);
        }
    };
    
	//var ctrl = this;
	//ctrl.click = function(){
	//	console.log('MenuData hello');
	//	$location.path("/alarm/query");
	//};
	$rootScope.menudatas = [
	{	label: '告警查询',
		menuitems: [
			{id: '0', label: 'MME/SGSN告警查询', event: ''},
			{id: '1', label: 'MME/SGSN告警统计', event: ''},
			{id: '2', label: 'SAEGW/GGSN告警查询', event: ''},
			{id: '3', label: 'SAEGW/GGSN告警统计', event: ''}
		]
	},
	{	label: '指标查询',
		menuitems: [
			{id: '10', label: 'MME/SGSN指标查询', event: ' '},
			{id: '11', label: 'SAEGW/GGSN指标查询', event: ' '}
		]
	}
	];

	
}];
angular.module('shmcc_app').controller('MenuCtrl',MenuCtrl);
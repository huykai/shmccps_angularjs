var MenuCtrl = ['$rootScope', function($rootScope) {
    $rootScope.vm = {
        selectFn: function(f){
            if (f.id == '0') {
				console.log('f.id==0');
				console.log($rootScope.isMME);
				$rootScope.isMME=true;
				console.log($rootScope.isMME);
				
			}
			if (f.id == '1') {
				$rootScope.isMME=false;
				console.log($rootScope.isMME);
				
			}
			console.log(f.id);
        }
    };
    
	var ctrl = this;
	$rootScope.menudatas = [
	{	label: '告警查询',
		menuitems: [
			{id: '0', label: 'MME/SGSN告警查询', event: 'alert(\'MME/SGSN告警查询\')'},
			{id: '1', label: 'MME/SGSN告警统计', event: 'alert(\'MME/SGSN告警统计\')'},
			{id: '2', label: 'SAEGW/GGSN告警查询', event: 'alert(\'SAEGW/GGSN告警查询\')'},
			{id: '3', label: 'SAEGW/GGSN告警统计', event: 'alert(\'SAEGW/GGSN告警统计\')'}
		]
	},
	{	label: '指标查询',
		menuitems: [
			{id: '0', label: 'MME/SGSN指标查询', event: 'alert(\'MME/SGSN指标查询\')'},
			{id: '1', label: 'SAEGW/GGSN指标查询', event: 'alert(\'SAEGW/GGSN指标查询\')'}
		]
	}
	];
}];
angular.module('ui.wisoft').controller('MenuCtrl',MenuCtrl);
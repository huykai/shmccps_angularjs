var getStatsMMECtrl = ['$scope', function($scope) {
    $scope.vm = {
        
    };
    
	var ctrl = this;
	$scope.querystatsparams = [
	{	
		parameters: [
			{id: '0', name: 'MME/SGSN告警查询', func: 'getAlarmsMMECtrl'},
			{id: '1', name: 'MME/SGSN告警统计', func: 'getAlarmStatsMMECtrl'},
			{id: '2', name: 'SAEGW/GGSN告警查询', func: 'getAlarmsSAEGWCtrl'},
			{id: '3', name: 'SAEGW/GGSN告警统计', func: 'getAlarmStatsSAEGWCtrl'},
			{id: '4', name: 'MME/SGSN统计查询', func: 'getStatsMMECtrl'},
			{id: '6', name: 'SAEGW/GGSN统计查询', func: 'getStatsSAEGWCtrl'}
		]
	}
	];
}];
angular.module('ui.wisoft')
.constant("GetMMEStats","scripts/PM_statis_report.py")
.controller('getStatsMMECtrl',getStatsCtrl($scope,$http,GetMMEStats) {
	$scope.queryStatis = function() {
		var config = {
			transformResponse: fucntion (data,headers) {
				if (headers("content-type") == "application/xml"
					&& angular.isString(data)) {
					StatsData = [];
					var titleElems = angular.element(data.trim()).find("name");
					for (var i = 0; i < titleElems.length; i++) {
						var title = titleElems.eq(i);
						console.log(title);
					}
				}
			}
		}
		$http.get(GetMMEStats,config).success(function(data){
			$scope.products = data;
		});
		
	}
});
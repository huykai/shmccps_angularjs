var TreeDemoSelectCtrl = ['$rootScope',function($rootScope) {
    var vm = this;
    var cascadeData_mme_element = [
        {id:'1',text:'Element',pid:'root'},
        {id:'11',text:'SHMME03BNK',pid:'1'},
        {id:'12',text:'SHMME04BNK',pid:'1'},
        {id:'13',text:'SHMME05BNK',pid:'1'}
    ];
	
    var cascadeData_mme_kpi = [
        {id:'2',text:'KPI',pid:'root'},
        {id:'21',text:'GSM',pid:'2'},
        {id:'22',text:'TD-SCDMA',pid:'2'},
        {id:'23',text:'LTE',pid:'2'},
        {id:'211',text:'GSM-ATTACH',pid:'21'},
        {id:'212',text:'GSM-PDP',pid:'21'},
		{id:'221',text:'TDS-ATTACH',pid:'22'},
        {id:'222',text:'TDS-PDP',pid:'22'},
        {id:'231',text:'LTE-ATTACH',pid:'23'},
        {id:'232',text:'LTE-PDP',pid:'23'}
    ];

        

	var cascadeData_saegw_element = [
        {id:'1',text:'Element',pid:'root'},
        {id:'11',text:'SHSAEGW03BNK',pid:'1'},
        {id:'12',text:'SHSAEGW04BNK',pid:'1'},
        {id:'13',text:'SHSAEGW04BNK',pid:'1'}
    ];

    var cascadeData_saegw_kpi = [
        {id:'2',text:'KPI',pid:'root'},
        {id:'21',text:'LTE',pid:'2'},
        {id:'211',text:'PDP',pid:'21'}
    ];
	
    vm.mul = true;
    vm.myFun=function(){
        vm.mul=!vm.mul;
    };

    vm.cascadeData_mme_element = cascadeData_mme_element;
    vm.cascadeData_mme_kpi = cascadeData_mme_kpi;
	vm.cascadeData_saegw_element = cascadeData_saegw_element;
    vm.cascadeData_saegw_kpi = cascadeData_saegw_kpi;
	$rootScope.isMME = true;
    $rootScope.treedata_mme_element = vm.cascadeData_mme_element;
    $rootScope.treedata_mme_kpi = vm.cascadeData_mme_kpi;
    $rootScope.treedata_saegw_element = vm.cascadeData_saegw_element;
    $rootScope.treedata_saegw_kpi = vm.cascadeData_saegw_kpi;
}];
angular.module('shmcc_app').controller('TreeDemoSelectCtrl',TreeDemoSelectCtrl);
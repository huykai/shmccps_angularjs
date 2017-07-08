var TreeDemoSelectCtrl = ['$rootScope',function($rootScope) {
    var vm = this;
    var cascadeData_mme_element = [
        {id:'1',text:'Element',pid:'root'},
        {id:'11',text:'SHMME03BNK',pid:'1'},
        {id:'12',text:'SHMME04BNK',pid:'1'},
        {id:'13',text:'SHMME05BNK',pid:'1'},
        {id:'14',text:'SHMME06BNK',pid:'1'},
        {id:'15',text:'SHMME07BNK',pid:'1'},
        {id:'16',text:'SHMME08BNK',pid:'1'},
        {id:'17',text:'SHMME09BNK',pid:'1'},
        {id:'18',text:'SHMME10BNK',pid:'1'}
    ];
	
    var cascadeData_mme_kpi = [
        {id:'2',text:'KPI',pid:'root'},
        {id:'21',text:'GSM',pid:'2'},
        {id:'22',text:'TD-SCDMA',pid:'2'},
        {id:'23',text:'LTE',pid:'2'},
        {id:'211',text:'GSM-ATTACH',pid:'21'},
        {id:'212',text:'GSM-PDP',pid:'21'},
        {id:'213',text:'GSM-RAU',pid:'21'},
        {id:'214',text:'GSM-PAGING',pid:'21'},
        {id:'221',text:'TDS-ATTACH',pid:'22'},
        {id:'222',text:'TDS-PDP',pid:'22'},
		{id:'223',text:'TDS-RAU',pid:'22'},
        {id:'224',text:'TDS-PAGING',pid:'22'},
        {id:'231',text:'LTE-ATTACH',pid:'23'},
        {id:'232',text:'LTE-PDP',pid:'23'},
        {id:'233',text:'LTE-TAUPAGING',pid:'23'},
        {id:'234',text:'LTE-VOLTE',pid:'23'},
        {id:'235',text:'LTE-ESRVCC',pid:'23'},
        {id:'236',text:'LTE-CSFB',pid:'23'},
        {id:'237',text:'LTE-AUTH',pid:'23'},
        {id:'238',text:'LTE-USER',pid:'23'},
        {id:'239',text:'LTE-CPU',pid:'23'}
    ];

        

	var cascadeData_saegw_element = [
        {id:'1',text:'Element',pid:'root'},
        {id:'11',text:'SHSAEGW03BNK',pid:'1'},
        {id:'12',text:'SHSAEGW04BNK',pid:'1'},
        {id:'13',text:'SHSAEGW05BNK',pid:'1'},
        {id:'14',text:'SHSAEGW06BNK',pid:'1'},
        {id:'15',text:'SHSAEGW07BNK',pid:'1'},
        {id:'16',text:'SHSAEGW08BNK',pid:'1'},
        {id:'17',text:'SHSAEGW09BNK',pid:'1'},
        {id:'18',text:'SHSAEGW10BNK',pid:'1'},
        {id:'19',text:'SHSAEGW11BNK',pid:'1'},
        {id:'20',text:'SHSAEGW12BNK',pid:'1'}
    ];

    var cascadeData_saegw_kpi = [
        {id:'2',text:'KPI',pid:'root'},
        {id:'21',text:'LTE',pid:'2'},
        {id:'211',text:'LTE-PGW',pid:'21'},
        {id:'212',text:'LTE-SGW',pid:'21'},
        {id:'213',text:'LTE-CDR-RADIUS',pid:'21'},
        {id:'214',text:'LTE-SGW-THROUGH',pid:'21'},
        {id:'215',text:'LTE-GTPU-THROUGH',pid:'21'},
        {id:'216',text:'LTE-S1U-TRHONGH',pid:'21'},
        {id:'217',text:'LTE-SESSION',pid:'21'},
        {id:'218',text:'LTE-SGI-THROUGH',pid:'21'},
        {id:'219',text:'LTE-IPPOOL',pid:'21'}

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

    vm.onselect =  function() {
        $rootScope.queryoptionchanged = !$rootScope.queryoptionchanged;
    };
    vm.oncancelselect =  function() {
        $rootScope.queryoptionchanged = !$rootScope.queryoptionchanged;
    };
}];
angular.module('shmcc_app').controller('TreeDemoSelectCtrl',TreeDemoSelectCtrl);
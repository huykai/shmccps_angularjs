var TreeDemoSelectCtrl = ['$rootScope',function($rootScope) {
    var vm = this;
    var cascadeData1 = [
        {id:'1',text:'MME网元',pid:'root'},
        {id:'2',text:'指标',pid:'root'},
        {id:'13',text:'SHMME05BNK',pid:'1'},
        {id:'12',text:'SHMME04BNK',pid:'1'},
        {id:'11',text:'SHMME03BNK',pid:'1'},
        {id:'21',text:'GSM',pid:'2'},
        {id:'22',text:'TD-SCDMA',pid:'2'},
        {id:'23',text:'LTE',pid:'2'},
        {id:'211',text:'ATTACH',pid:'21'},
        {id:'212',text:'PDP',pid:'21'},
		{id:'221',text:'ATTACH',pid:'22'},
        {id:'222',text:'PDP',pid:'22'},
        {id:'231',text:'ATTACH',pid:'23'},
        {id:'232',text:'PDP',pid:'23'}
    ];
	
	var cascadeData2 = [
        {id:'1',text:'SAEGW网元',pid:'root'},
        {id:'2',text:'指标',pid:'root'},
        {id:'13',text:'SHSAEGW05BNK',pid:'1'},
        {id:'12',text:'SHSAEGW04BNK',pid:'1'},
        {id:'11',text:'SHSAEGW03BNK',pid:'1'},
        {id:'21',text:'LTE',pid:'2'},
        {id:'211',text:'PDP',pid:'21'}
    ];
	
    vm.mul = true;
    vm.myFun=function(){
        vm.mul=!vm.mul;
    };
    vm.cascadeData1 = cascadeData1;
	vm.cascadeData2 = cascadeData2;
	$rootScope.isMME = false;
}];
angular.module('ui.wisoft').controller('TreeDemoSelectCtrl',TreeDemoSelectCtrl);
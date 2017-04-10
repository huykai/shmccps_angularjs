'use strict';
 
//测试类型描述，这里表示测试unitTestApp的controllers
describe('shmcc_app mainSubmitCtrl', function() {
 
  //beforeEach 表示在运行所有测试前的准备工作。
    //这里生成unitTestApp 的module
    beforeEach(angular.mock.module('shmcc_app'));  
  //测试类型描述，这里表示测试unitTestCtrl这个controller
  describe('mainSubmitCtrl', function(){
      
    
    
    //定义在测试中会用到的object,以便在整个测试环境中使用
    var scope,ctrl;

        //inject利用angular的依赖注入，将需要的模块,服务插入作用域
    beforeEach(inject(function ($controller, $rootScope) {
        //模拟生成scope, $rootScope是angular中的顶级scope，angular中每个controller中的     
        //scope都是rootScope new出来的
        scope = $rootScope.$new();
        //模拟生成controller 并把先前生成的scope传入以方便测试
        ctrl = $controller('mainSubmitCtrl', {$scope: scope});
    }));
        
    //测试从这里开始
    // it 里'should create name william wood in unitTestCtrl' 说明测试的项目
   
    it('should change queryoptionchanged', 
       inject(function() {
        //测试期望 scope.name 的值为 william wood  
        expect(scope.queryoptionchanged).toEqual(false);
    }));
    it('should service getTreedata work', 
       inject(function($injector) {
        var treedata_elementdemo = [{"pid":"root","id":"1","text":"Element","__selected":false,"__semi":true,"__level":0},{"pid":"1","id":"11","text":"SHMME03BNK","__selected":true,"__semi":false,"__level":1},{"pid":"1","id":"12","text":"SHMME04BNK","__selected":true,"__semi":false,"__level":1},{"pid":"1","id":"13","text":"SHMME05BNK","__level":1}]
        var treedata_element_expect = ["SHMME03BNK","SHMME04BNK"];
        var treedata_kpidemo = [{"pid":"root","id":"2","text":"KPI","__selected":false,"__semi":false,"__level":0},{"pid":"2","id":"21","text":"GSM","__selected":false,"__semi":true,"__level":1},{"pid":"2","id":"22","text":"TD-SCDMA","__selected":false,"__semi":true,"__level":1},{"pid":"2","id":"23","text":"LTE","__selected":false,"__semi":true,"__level":1},{"pid":"21","id":"211","text":"GSM-ATTACH","__level":2},{"pid":"21","id":"212","text":"GSM-PDP","__selected":true,"__semi":false,"__level":2},{"pid":"22","id":"221","text":"TDS-ATTACH","__level":2},{"pid":"22","id":"222","text":"TDS-PDP","__selected":true,"__semi":false,"__level":2},{"pid":"23","id":"231","text":"LTE-ATTACH","__level":2},{"pid":"23","id":"232","text":"LTE-PDP","__selected":true,"__semi":false,"__level":2}];
        var treedata_kpi_expect = ["GSM-PDP","TDS-PDP","LTE-PDP"];

        var getTreeData = $injector.get('getTreeData');
        expect(getTreeData.getTreeData_elements(treedata_elementdemo)).toEqual(treedata_element_expect);
        expect(getTreeData.getTreeData_kpis(treedata_kpidemo)).toEqual(treedata_kpi_expect);
    }));
  });
});
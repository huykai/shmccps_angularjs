'use strict';
 
//测试类型描述，这里表示测试unitTestApp的controllers
describe('TreeDemoSelectCtrl TreeData', function() {
 
  //测试类型描述，这里表示测试unitTestCtrl这个controller
  describe('TreeDemoSelectCtrl', function(){
      
    //beforeEach 表示在运行所有测试前的准备工作。
    //这里生成unitTestApp 的module
    beforeEach(module('shmcc_app'));
    
    //定义在测试中会用到的object,以便在整个测试环境中使用
    var scope,ctrl;

        //inject利用angular的依赖注入，将需要的模块,服务插入作用域
    beforeEach(inject(function ($controller, $rootScope) {
        //模拟生成scope, $rootScope是angular中的顶级scope，angular中每个controller中的     
        //scope都是rootScope new出来的
        scope = $rootScope.$new();
        $rootScope.queryoptionchanged = false;
        //模拟生成controller 并把先前生成的scope传入以方便测试
        ctrl = $controller('TreeDemoSelectCtrl', {$scope: scope});
    }));
    // beforeEach(inject(function () {
    //    scope.queryoptionchanged = false ;
   // }));
        
    //测试从这里开始
    // it 里'should create name william wood in unitTestCtrl' 说明测试的项目
    it('should change queryoptionchanged', 
       inject(function() {
        //测试期望 scope.name 的值为 william wood  
        expect(scope.queryoptionchanged).toEqual(false);
        ctrl.onselect();
        expect(scope.queryoptionchanged).toEqual(true);
    }));
    it('should define onselect', 
       inject(function() {
        //测试期望 scope.name 的值为 william wood  
        expect(ctrl.onselect).toBeDefined();
    }));
    it('should define onunselect', 
       inject(function() {
        //测试期望 scope.name 的值为 william wood  
        expect(ctrl.oncancelselect).toBeDefined();
    }));
    
  });
});
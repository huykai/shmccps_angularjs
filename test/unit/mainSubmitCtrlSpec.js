'use strict';
 
if (navigator.userAgent.match(/firefox/i)) {
  describe('Firefox tests', function() {
    it('this would only be reported when printFirstSuccess is true', function() {
      console.log('firefox test');
    });
  });
}

//测试类型描述，这里表示测试unitTestApp的controllers
describe('shmcc_app mainSubmitCtrl', function() {
 
    //beforeEach 表示在运行所有测试前的准备工作。
    //这里生成unitTestApp 的module
    //beforeEach(angular.mock.module('shmcc_app'));  
    
    //beforeEach(module('ngCookies',[]));
    //beforeEach(module('appDirectives',[]));
    //beforeEach(module('appControllers',[]));
    //beforeEach(module('appServices',[]));
    //beforeEach(module('ngRoute',[]));
    //beforeEach(module('ui.wisoft',[]));
    //beforeEach(module('ui.wisoft.tpls',[]));
    //beforeEach(module('ui.bootstrap',[]));
    //beforeEach(module('chart.js',[]));
    //beforeEach(module('shmcc_app'),['ngCookies', 'appDirectives','appControllers','appServices','ngRoute','ui.wisoft','ui.wisoft.tpls','ui.bootstrap','chart.js']);  
    //定义在测试中会用到的object,以便在整个测试环境中使用
    var $httpBackend, scope, $rootScope, ctrl, httpProvider, qProvider, routeProvider;
    var queryRequestHandler, authRequestHandler;

    //module('shmcc_app', function (_$httpProvider_) {
    //    httpProvider = _$httpProvider_;
    //});
    beforeEach( function() {
      module('shmcc_app', function (_$httpProvider_, _$qProvider_,_$routeProvider_) {
        httpProvider = _$httpProvider_;
        qProvider = _$qProvider_;
        routeProvider = _$routeProvider_;
        
        console.log('beforeEach');
      })
      //inject();
    });

    

    //测试类型描述，这里表示测试mainSubmitCtrl这个controller
    describe('mainSubmitCtrl', function(){
      //inject利用angular的依赖注入，将需要的模块,服务插入作用域
      beforeEach(inject(function (_$injector_, _$controller_, _$rootScope_) {
        //模拟生成scope, $rootScope是angular中的顶级scope，angular中每个controller中的     
        //scope都是rootScope new出来的
        scope = _$rootScope_.$new();
        
        $httpBackend = _$injector_.get('$httpBackend');
        //模拟生成controller 并把先前生成的scope传入以方便测试
        ctrl = _$controller_('mainSubmitCtrl', {$scope: scope});
        $rootScope = _$injector_.get('$rootScope');
        //mainctrlscope = $scope.$new();
        //httpProvider = $httpProvider;
        console.log('beforeEach mainSubmitCtrl');
      }));
        
      //测试从这里开始
      
      it('should change queryoptionchanged', 
        inject(function() {
          //测试期望 scope.queryoptionchanged 的init值为 false  
          //console.log(scope.queryoptionchanged);
          expect(scope.queryoptionchanged).toEqual(false);
      }));
      
      it('should service getTreedata work', 
        inject(function($injector) {
          var treedata_elementdemo = [{"pid":"root","id":"1","text":"Element","__selected":false,"__semi":true,"__level":0},{"pid":"1","id":"11","text":"SHMME03BNK","__selected":true,"__semi":false,"__level":1},{"pid":"1","id":"12","text":"SHMME04BNK","__selected":true,"__semi":false,"__level":1},{"pid":"1","id":"13","text":"SHMME05BNK","__level":1}]
          var treedata_element_expect = ["SHMME03BNK","SHMME04BNK"];
          var treedata_kpidemo = [{"pid":"root","id":"2","text":"KPI","__selected":false,"__semi":false,"__level":0},{"pid":"2","id":"21","text":"GSM","__selected":false,"__semi":true,"__level":1},{"pid":"2","id":"22","text":"TD-SCDMA","__selected":false,"__semi":true,"__level":1},{"pid":"2","id":"23","text":"LTE","__selected":false,"__semi":true,"__level":1},{"pid":"21","id":"211","text":"GSM-ATTACH","__level":2},{"pid":"21","id":"212","text":"GSM-PDP","__selected":true,"__semi":false,"__level":2},{"pid":"22","id":"221","text":"TDS-ATTACH","__level":2},{"pid":"22","id":"222","text":"TDS-PDP","__selected":true,"__semi":false,"__level":2},{"pid":"23","id":"231","text":"LTE-ATTACH","__level":2},{"pid":"23","id":"232","text":"LTE-PDP","__selected":true,"__semi":false,"__level":2}];
          var treedata_kpi_expect = ["GSM-PDP","TDS-PDP","LTE-PDP"];

          var getTreeData = $injector.get('getTreeData');
          //expect(getTreeData.getTreeData_elements(treedata_elementdemo)).toEqual(treedata_element_expect);
          var promise = getTreeData.getTreeData_elements(treedata_elementdemo);
          promise.then(function(data){
            expect(data).toEqual(treedata_element_expect); 
          });
          expect(getTreeData.getTreeData_kpis(treedata_kpidemo)).toEqual(treedata_kpi_expect);
      }));

      it('should Controller mainSubmitCtrl work', 
        inject(function($injector) {
          var oldqueryoptionchanged = scope.queryoptionchanged;
          scope.onStartPickedHandler('2017-06-12');
          expect(scope.begin_datetime).toEqual('2017-06-12');
          //expect(scope.queryoptionchanged).toEqual(!oldqueryoptionchanged);
          //$rootScope=$injector.get('$rootScope');
          $rootScope.isMME = true;
          var testObject = {id: 1, name: "TAC", $$hashKey: "object:39"};
          scope.itemUnitChangeHandler(testObject);
          ;
          expect(scope.mme_statis_unit).toEqual(testObject);
          expect(scope.queryoptionchanged).toEqual(oldqueryoptionchanged);
      }));

      it('should Controller mainSubmitCtrl tabs ',
        inject(function($injector) {
          scope.tabs = [];
          var name = 'test';
          var datas = {};
          var columns = {};
          var newtab = scope.addtab(name, datas, columns);
          expect(newtab.name).toEqual(name);
          expect(newtab.datas).toEqual(datas);
          expect(newtab.col).toEqual(columns);
          expect(newtab.id).toEqual(1);
        }
      ));
      
      it('should Controller mainSubmitCtrl http post', 
        inject(function($injector){
          // Set up the mock http service responses
          //console.log('scope.isMME:', scope.isMME);
          //var rootscope = $injector.get('$rootScope');
          $rootScope.isMME = true;
          //console.log('$rootScope.isMME:', $rootScope.isMME);
          //var scope = $injector.get('$scope');
          var tabscount = $rootScope.tabs.length;
          //var headers = function (d){
          //  b||(b=vd(a));return d?(d=b[Q(d)],void 0===d&&(d=null),d):b
          //};
          var data_return = "\
<\?xml version=\"1.0\" encoding=\"GB2312\"?>\
<response>\
<GSM-PAGING>\
<TabName>\
<name>GSM-PAGING</name>\
</TabName>\
<Title>\
<name>设备名称</name>\
<name>日期</name>\
<name>时间</name>\
<name>Paging尝试次数2G</name>\
<name>Paging成功次数2G</name>\
<name>Paging成功率2G</name>\
</Title>\
<Item>\
<ItemCol>\
<value>\
SHMME07BNK\
</value>\
</ItemCol>\
<ItemCol>\
<value>\
2017-07-03\
</value>\
</ItemCol>\
<ItemCol>\
<value>\
21:45\
</value>\
</ItemCol>\
<ItemCol>\
<value>\
67084\
</value>\
</ItemCol>\
<ItemCol>\
<value>\
56844\
</value>\
</ItemCol>\
<ItemCol>\
<value>\
84.74\
</value>\
</ItemCol>\
</Item>\
<Item>\
<ItemCol>\
<value>\
SHMME07BNK\
</value>\
</ItemCol>\
<ItemCol>\
<value>\
2017-07-03\
</value>\
</ItemCol>\
<ItemCol>\
<value>\
22:00\
</value>\
</ItemCol>\
<ItemCol>\
<value>\
61255\
</value>\
</ItemCol>\
<ItemCol>\
<value>\
51345\
</value>\
</ItemCol>\
<ItemCol>\
<value>\
83.82\
</value>\
</ItemCol>\
</Item>\
<Item>\
<ItemCol>\
<value>\
SHMME07BNK\
</value>\
</ItemCol>\
<ItemCol>\
<value>\
2017-07-03\
</value>\
</ItemCol>\
<ItemCol>\
<value>\
22:15\
</value>\
</ItemCol>\
<ItemCol>\
<value>\
57830\
</value>\
</ItemCol>\
<ItemCol>\
<value>\
48853\
</value>\
</ItemCol>\
<ItemCol>\
<value>\
84.48\
</value>\
</ItemCol>\
</Item>\
<Item>\
<ItemCol>\
<value>\
SHMME07BNK\
</value>\
</ItemCol>\
<ItemCol>\
<value>\
2017-07-03\
</value>\
</ItemCol>\
<ItemCol>\
<value>\
22:30\
</value>\
</ItemCol>\
<ItemCol>\
<value>\
52568\
</value>\
</ItemCol>\
<ItemCol>\
<value>\
44430\
</value>\
</ItemCol>\
<ItemCol>\
<value>\
84.52\
</value>\
</ItemCol>\
</Item>\
</GSM-PAGING>\
</response>\
";

          $httpBackend.expectPOST('/api/mme_query').respond(200,data_return,{'Content-type':'text/xml'});
          scope.mme_statis_unit = {name:'test'};
          //console.log('scope.queryStatis:', typeof(scope.queryStatis));
          var param_config = {};
          var config = {data: param_config};
          scope.queryStatis(config);
          //scope.postapi('/api/mme_query',{data:{}});
          //$httpBackend.expectPOST('/api/mme_query',param_config);
          $httpBackend.flush();
          var newtabscount = $rootScope.tabs.length;
          expect(newtabscount).toBe(tabscount+1);

          

          
          
          
        })
      );
      
      //it('should Controller mainSubmitCtrl api setting', 
      //  inject(function($injector){
      //    expect(scope.api_string['MME_query']).toBe('/api/mme_query');
      //}));

      it('should app module config ',
        inject(function($injector){
        //inject(function($injector){
          //var http = $injector.get('$http');
          //var httpprovider = $injector.get('$httpProvider');
          //var q = $injector.get('$q');
          //var qq = q.errorOnUnhandledRejections();
          //  console.log(http);
          //expect($httpProvider.defaults.withCredentials).toEqual(true);
          expect(httpProvider.defaults.withCredentials).toEqual(true);
          //expect(httpProvider.interceptors['TokenInterceptor']).toBeDefined;
          expect(httpProvider.interceptors).toContain('TokenInterceptor');
          expect(qProvider.errorOnUnhandledRejections()).toEqual(false);
          var $route = $injector.get('$route');
          //console.log($route.routes);
          expect($route.routes['/'].templateUrl).toEqual('/index_main_v2.html');
          expect($route.routes['/'].controller).toEqual('mainSubmitCtrl');
          expect($route.routes['/admin/login'].templateUrl).toEqual('partials/admin.signin.html');
          expect($route.routes['/admin/login'].controller).toEqual('AdminUserCtrl');
        })
      );

      if('should Controller mainStreamCtrl ',function() {

      });
      afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
      });  
    });
});
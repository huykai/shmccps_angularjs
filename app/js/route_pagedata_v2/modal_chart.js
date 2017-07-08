'use strict';

      

angular.module('shmcc_app').controller('ModalDemoCtrl', function ($uibModal, $log, $document,$rootScope) {
  var $ctrl = this;
  $ctrl.items = ['item1', 'item2', 'item3'];

  $ctrl.animationsEnabled = true;

  $rootScope.max_chartdata = 0;
  $rootScope.min_chartdata = -1;
  
  $rootScope.get_distinct = function(data,attr){
    var data_distinct = {};
    var data_distinct_key = [];
    for (var id in data) {
      data_distinct[data[id][attr]] = 1;
    };
    for (var id in data_distinct) {
      data_distinct_key.push(id);
    }
    //console.log(data_distinct_key);
    return data_distinct_key;
  };

  $rootScope.get_chartdata = function(data,datacol,label,labelcol,series,seriescol) {
    var chartdata = [];
    
    $rootScope.max_chartdata = 0;
    $rootScope.min_chartdata = -1;

    for (var seriesid in series) {
      //console.log(series[seriesid]);
      var chartdataitem = [];
      for (var labelid in label) {
        //console.log(label[labelid]);
        for (var id in data){
          //console.log(data[id]);
          if (data[id][labelcol] == label[labelid] && data[id][seriescol] == series[seriesid]) {
            chartdataitem.push(data[id][datacol]);
            var dataitem = parseInt(data[id][datacol]);
            //console.log('new data :' , dataitem);
            //console.log('dataitem type :', typeof(dataitem))
            if (dataitem > $rootScope.max_chartdata) {
              $rootScope.max_chartdata = dataitem;
              if ($rootScope.min_chartdata == -1) {
                $rootScope.min_chartdata = $rootScope.max_chartdata;
              }
            } else if (dataitem < $rootScope.min_chartdata){
              $rootScope.min_chartdata = dataitem;
            }
            //console.log('new max_chartdata :' , $rootScope.max_chartdata , ' new min_chartdata:',$rootScope.min_chartdata);

          }
        }
      }
      
      chartdata.push(chartdataitem);
    }
    //console.log(chartdata);
    return chartdata;
  };

 

  $rootScope.getData = function(){
    $rootScope.col_labels = 'col2';
    $rootScope.col_series = 'col0';
    var maxcol=$rootScope.activetab.col.length;
    $rootScope.col_datas = 'col'+(maxcol-1)
    $rootScope.active_chart_data = $rootScope.activetab.col[maxcol-1].name;
    //console.log('max column: ', $rootScope.col_datas);
    $rootScope.chart_labels = this.get_distinct($rootScope.activetab.datas,$rootScope.col_labels);
    $rootScope.chart_series = this.get_distinct($rootScope.activetab.datas,$rootScope.col_series);
    $rootScope.chart_data = this.get_chartdata($rootScope.activetab.datas,$rootScope.col_datas,$rootScope.chart_labels,$rootScope.col_labels,$rootScope.chart_series,$rootScope.col_series);
  };

  $ctrl.open = function (size, parentSelector) {
    $rootScope.getData();
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      //size: size,
      size: 'lg',
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $ctrl.openComponentModal = function () {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      component: 'modalComponent',
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('modal-component dismissed at: ' + new Date());
    });
  };

  $ctrl.openMultipleModals = function () {
    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title-bottom',
      ariaDescribedBy: 'modal-body-bottom',
      templateUrl: 'stackedModal.html',
      size: 'sm',
      controller: function($scope) {
        $scope.name = 'bottom';  
      }
    });

    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title-top',
      ariaDescribedBy: 'modal-body-top',
      templateUrl: 'stackedModal.html',
      size: 'sm',
      controller: function($scope) {
        $scope.name = 'top';  
      }
    });
  };

  $ctrl.toggleAnimation = function () {
    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  };
});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('shmcc_app').controller('ModalInstanceCtrl', function ($uibModalInstance, items,$rootScope) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  $ctrl.changechartlabels = function(columnname){
    console.log("chart label:",columnname,"; chart series: ",$rootScope.col_series,"; chart datas: ",$rootScope.col_datas);
    $rootScope.chart_labels = $rootScope.get_distinct($rootScope.activetab.datas,columnname);
    $rootScope.col_labels = columnname;
    $rootScope.chart_data = $rootScope.get_chartdata($rootScope.activetab.datas,$rootScope.col_datas,$rootScope.chart_labels,$rootScope.col_labels,$rootScope.chart_series,$rootScope.col_series);
  };

  $ctrl.changechartseries = function(columnname){
    console.log("chart label:",$rootScope.col_labels,"; chart series: ",columnname,"; chart datas: ",$rootScope.col_datas);
    $rootScope.chart_series = $rootScope.get_distinct($rootScope.activetab.datas,columnname);
    $rootScope.col_series = columnname;
    $rootScope.chart_data = $rootScope.get_chartdata($rootScope.activetab.datas,$rootScope.col_datas,$rootScope.chart_labels,$rootScope.col_labels,$rootScope.chart_series,$rootScope.col_series);
  };

  $ctrl.changechartdatas = function(columnname){
    console.log("chart label:",$rootScope.col_labels,"; chart series: ",$rootScope.col_series,"chart datas:",columnname);
    $rootScope.col_datas = columnname;
    var index=parseInt(columnname.substring(3));
    $rootScope.active_chart_data = $rootScope.activetab.col[index].name;
    $rootScope.chart_data = $rootScope.get_chartdata($rootScope.activetab.datas,$rootScope.col_datas,$rootScope.chart_labels,$rootScope.col_labels,$rootScope.chart_series,$rootScope.col_series);
  };
});

// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('shmcc_app').component('modalComponent', {
  templateUrl: 'myModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
    };

    $ctrl.ok = function () {
      $ctrl.close({$value: $ctrl.selected.item});
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
});
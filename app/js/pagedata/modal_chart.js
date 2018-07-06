'use strict';

      

angular.module('shmcc_app').controller('ModalDemoCtrl', function ($uibModal, $log, $document,$rootScope) {
  var $ctrl = this;
  $ctrl.items = ['item1', 'item2', 'item3'];

  $ctrl.animationsEnabled = true;

  $ctrl.get_distinct = function(data,attr){
    var data_distinct = {};
    var data_distinct_key = [];
    for (var id in data) {
      data_distinct[data[id][attr]] = 1;
    };
    for (var id in data_distinct) {
      data_distinct_key.push(id);
    }
    console.log(data_distinct_key);
    return data_distinct_key;
  };

  $ctrl.get_chartdata = function(data,datacol,label,labelcol,series,seriescol) {
    var chartdata = [];
    for (var seriesid in series) {
      //console.log(series[seriesid]);
      var chartdataitem = [];
      for (var labelid in label) {
        //console.log(label[labelid]);
        for (var id in data){
          //console.log(data[id]);
          if (data[id][labelcol] == label[labelid] && data[id][seriescol] == series[seriesid]) {
            chartdataitem.push(data[id][datacol]);
          }
        }
      }
      
      chartdata.push(chartdataitem);
    }
    console.log(chartdata);
    return chartdata;
  };

  $ctrl.test = function(){
    $rootScope.chart_labels = this.get_distinct($rootScope.activetab.datas,'col3');
    $rootScope.chart_series = this.get_distinct($rootScope.activetab.datas,'col1');
    $rootScope.chart_data = this.get_chartdata($rootScope.activetab.datas,'col8',$rootScope.chart_labels,'col3',$rootScope.chart_series,'col1');
  };

  $ctrl.open = function (size, parentSelector) {
    this.test();
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
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

angular.module('shmcc_app').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
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
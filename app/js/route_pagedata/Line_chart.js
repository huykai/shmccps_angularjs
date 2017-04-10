'use strict';

angular.module("shmcc_app").controller("LineCtrl", function ($scope,$rootScope) {

  var ctrl = this;
  $scope.chart_data = $rootScope.chart_data;
  $scope.chart_labels = $rootScope.chart_labels;
  $scope.chart_series = $rootScope.chart_series;
  
  console.log($scope.chart_data);
  console.log($scope.chart_labels);
  console.log($scope.chart_series);
  //$scope.chart_labels = ["January", "February", "March", "April", "May", "June", "July"];
  //var activetab = $rootScope.activetab; 
  //$scope.labels = activetab.
  //$scope.chart_series = ['Series A', 'Series B'];
  //$scope.series = 
  //$scope.chart_data = [
  //  [65, 59, 80, 81, 56, 55, 40],
  //  [28, 48, 40, 19, 86, 27, 90]
  //];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);

  };
  //$scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }
        //,
        //{
        //  id: 'y-axis-2',
        //  type: 'linear',
        //  display: true,
        //  position: 'right'
       // }
      ]
    }
  };
});
        
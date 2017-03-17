angular.module('ui.wisoft', []).
            controller('mainCtrl', ['$scope', function ($scope){
    $scope.vm = {
        selectFn: function(f){
            console.log(f);
        }
    };
    var ctrl = this;
    ctrl.data = [
        {id: '0', label: 'js '},
        {id: '1', label: 'node1'},
        {id: '2', label: 'node2'},
        {id: '3', label: 'sss', enabled: false}
    ];
}]);
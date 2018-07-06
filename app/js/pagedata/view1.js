// controller
//'use strict';

var shmcc_app = angular.module('shmcc_app',['ngRoute', 'ui.router','ngResource']);
shmcc_app.constant('USER_ROLES', {
  all: '*',
  admin: 'admin',
  editor: 'editor',
  guest: 'guest'
});
shmcc_app.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
});
shmcc_app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1.html',
    controller: 'View1Ctrl'
  });
  $routeProvider.when('/view2', {
    templateUrl: 'view2.html',
    controller: 'View2Ctrl'
  });
  $routeProvider.when('/dashboard', {
    templateUrl: 'shmccps_main_v1_2.html'
  });
}]);
shmcc_app.config(['$stateProvider', 'USER_ROLES', function ($stateProvider, USER_ROLES) {
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: 'dashboard/index.html',
    data: {
      authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
    }
  });
}])
.controller('View1Ctrl', [function() {

}])
.factory('AuthService', function ($http, $resource, Session) {
  var authService = {};
 
  authService.login = function (credentials) {

    //本地提供的服务，可用loopback快速搭建
    var api = $resource('http://localhost:3300/api/api/users_tests');
    
    //因为没有写服务端验证用户密码，使用save是为了方便；
    //这里，如果服务端已存在该credentials，返回的response会包含错误信息，可用来替代401、403等；
    return api.save(credentials)
        .$promise
        .then(function(res) {
            Session.create(res.id, res.id,
                           res.Role);
            return res;
        });
  };
 
  authService.isAuthenticated = function () {
    return !!Session.userId;
  };
 
  authService.isAuthorized = function (authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (authService.isAuthenticated() &&
      authorizedRoles.indexOf(Session.userRole) !== -1);
  };
 
  return authService;
})
.service('Session', function () {
  this.create = function (sessionId, userId, userRole) {
    this.id = sessionId;
    this.userId = userId;
    this.userRole = userRole;
  };
  this.destroy = function () {
    this.id = null;
    this.userId = null;
    this.userRole = null;
  };
})
.controller('LoginController', function($scope, $rootScope, AUTH_EVENTS, AuthService) {
  $scope.credentials = {
     username : '',
     password : ''
};  
  $scope.login = function(credentials) {
    console.log('login', credentials);
    AuthService.login(credentials).then(function(user) {
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        $scope.$parent.setCurrentUser(user);
    }, function() {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    });
  };
})
.controller('ApplicationController', function ($location,$scope, USER_ROLES, AuthService) {
  $scope.currentUser = null;
  $scope.userRoles = USER_ROLES;
  $scope.isAuthorized = AuthService.isAuthorized;
  $scope.pass = false;
 
  $scope.setCurrentUser = function (user) {
    $scope.currentUser = user;
  };
})
.run(function ($rootScope, AUTH_EVENTS, AuthService) {
  $rootScope.$on('$stateChangeStart', function (event, next) {
    var authorizedRoles = next.data.authorizedRoles;
    if (!AuthService.isAuthorized(authorizedRoles)) {
      event.preventDefault();
      if (AuthService.isAuthenticated()) {
        $scope.pass = true;
        // user is not allowed
        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
      } else {
        // user is not logged in
        $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
      }
    }
  });
  $rootScope.$on('AUTH_EVENTS.loginSuccess', function (event, next) {
    $location.path("/dashboard");
  });
})
.config(function ($httpProvider) {
  $httpProvider.interceptors.push([
    '$injector',
    function ($injector) {
      return $injector.get('AuthInterceptor');
    }
  ]);
})
.factory('AuthInterceptor', function ($rootScope, $q,
                                      AUTH_EVENTS) {
  return {
    responseError: function (response) { 
      $rootScope.$broadcast({
        401: AUTH_EVENTS.notAuthenticated,
        403: AUTH_EVENTS.notAuthorized,
        419: AUTH_EVENTS.sessionTimeout,
        440: AUTH_EVENTS.sessionTimeout
      }[response.status], response);
      return $q.reject(response);
    }
  };
})
.directive('loginDialog', function (AUTH_EVENTS) {
  return {
    restrict: 'A',
    //template: '<div ng-if="visible" ng-include="\'view1/view1.html\'">',
    template: '<div ng-if="visible" ng-include="\'view1.html\'"></div>',
    link: function (scope) {
      var showDialog = function () {
        scope.visible = true;
      };
  
      scope.visible = false;
      scope.$on(AUTH_EVENTS.notAuthenticated, showDialog);
      scope.$on(AUTH_EVENTS.sessionTimeout, showDialog)
    }
  };
})
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  
  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.controller('View2Ctrl', [function() {
  console.log('View2Ctrl');
  //$scope.currentUser = $scope.$parent.currentUser;
}]);
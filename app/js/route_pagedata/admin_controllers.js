appControllers.controller('AdminUserCtrl', ['$rootScope', '$scope', '$location', '$window', 'UserService', 'AuthenticationService',  
    function AdminUserCtrl($rootScope, $scope, $location, $window, UserService, AuthenticationService) {
        //Admin User Controller (signIn, logOut)
        $scope.signIn = function signIn(username, password) {
            if (username != null && password != null) {

                //UserService.signIn(username, password).success(function(data) {
                //    AuthenticationService.isAuthenticated = true;
                //    $window.sessionStorage.token = data.token;
                //    $location.path("/admin");
                //}).error(function(status, data) {
                //    console.log(status);
                //    console.log(data);
                //});
                UserService.signIn(username, password).then(function(status,data) {
                    AuthenticationService.isAuthenticated = true;
                    AuthenticationService.currentUser = username;
                    //$scope.isAuthenticated = AuthenticationService.isAuthenticated;
                    $window.sessionStorage.token = status.data.token;
                    $window.sessionStorage.currentUser = username;
                    $window.sessionStorage.isAuthenticated = true;
                    console.log("signIn return data:",data);
                    $location.path("/");
                },function(status, data) {
                    console.log("signIn return status:",status);
                    console.log("signIn return data:",data);
                });
                
            }
        }

        $scope.logOut = function logOut() {
            if (AuthenticationService.isAuthenticated) {
                
                UserService.logOut().then(function(data) {
                    AuthenticationService.isAuthenticated = false;
                    AuthenticationService.currentUser = null;
                    delete $window.sessionStorage.token;
                    delete $window.sessionStorage.currentUser;
                    delete $window.sessionStorage.isAuthenticated;
                    $rootScope.isAuthenticated = false;
                    $location.path("/admin/login");
                },function(status, data) {
                    console.log(status);
                    console.log(data);
                });
            }
            else {
                $location.path("/admin/login");
            }
        }

        $scope.logIn = function logIn() {
            $location.path("/admin/login");
        }


        $scope.toRegister = function toregister() {
            $location.path("/admin/register");
        }

        //$scope.register = function register(username, password, passwordConfirm) {
        //    if (AuthenticationService.isAuthenticated) {
        //        $location.path("/admin");
        //    }
        //    else {
        //        UserService.register(username, password, passwordConfirm).success(function(data) {
        //            $location.path("/admin/login");
        //        }).error(function(status, data) {
        //            console.log(status);
        //            console.log(data);
        //        });
        //    }
        //}

        $scope.register = function register(username, password, passwordConfirm) {
            if (AuthenticationService.isAuthenticated) {
                $location.path("/");
            }
            else {
                UserService.register(username, password, passwordConfirm).then(function(data) {
                    $location.path("/admin/login");
                },function(status, data) {
                    console.log(status);
                    console.log(data);
                });
            }
        }

    }
]);
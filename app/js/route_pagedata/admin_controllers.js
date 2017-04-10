appControllers.controller('AdminUserCtrl', ['$scope', '$location', '$window', 'UserService', 'AuthenticationService',  
    function AdminUserCtrl($scope, $location, $window, UserService, AuthenticationService) {
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
                UserService.signIn(username, password).then(function(data) {
                    AuthenticationService.isAuthenticated = true;
                    AuthenticationService.currentUser = username;
                    //$scope.isAuthenticated = AuthenticationService.isAuthenticated;
                    $window.sessionStorage.token = data.data.token;
                    $location.path("/");
                },function(status, data) {
                    console.log(status);
                    console.log(data);
                });
                
            }
        }

        $scope.logOut = function logOut() {
            if (AuthenticationService.isAuthenticated) {
                
                UserService.logOut().then(function(data) {
                    AuthenticationService.isAuthenticated = false;
                    AuthenticationService.currentUser = null;
                    delete $window.sessionStorage.token;
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
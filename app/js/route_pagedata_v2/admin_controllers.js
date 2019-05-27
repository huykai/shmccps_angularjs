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
                //alert("signIn");
                UserService.signIn(username, password).then(function(status,data) {
                    AuthenticationService.isAuthenticated = true;
                    AuthenticationService.currentUser = username;
                    //$scope.isAuthenticated = AuthenticationService.isAuthenticated;
                    $window.sessionStorage.token = status.data.token;
                    $window.sessionStorage.currentUser = username;
                    $window.sessionStorage.isAuthenticated = true;
                    $window.sessionStorage.isUserAdmin = status.data.is_admin;
                    $rootScope.isAuthenticated = true;
                    $rootScope.currentUser = username;
                    $rootScope.isUserAdmin = status.data.is_admin;
                    console.log("signIn return status:", status);
                    //$location.path("/");
                    //alert("signIn service return ok");
                    $location.path("/main");
                },function(status, data) {
                    //alert('signIn service return : ' + status.data + ' ' + status.status);
                    AuthenticationService.isAuthenticated = false;
                    AuthenticationService.currentUser = username;
                    //$scope.isAuthenticated = AuthenticationService.isAuthenticated;
                    $window.sessionStorage.token = null;
                    $window.sessionStorage.currentUser = username;
                    $window.sessionStorage.isAuthenticated = false;
                    $window.sessionStorage.isUserAdmin = false;
                    $rootScope.isAuthenticated = false;
                    $rootScope.currentUser = username;
                    console.log("signIn return status:",status);
                    console.log("signIn return data:",data);
                    if (status.data === "EBADCSRFTOKEN"){
                        console.log('status: EBADCSRFTOKEN, remove cookie')
                        document.cookie = "XSRF-TOKEN" +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                        document.cookie = "_csrf" +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                        $location.path("/admin/login");
                    }
                });
                
            } else {
                alert("name or password can not be null");
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
                    $rootScope.currentUser = null;
                    //$location.path("/admin/login");
                    $location.url("/");
                },function(status, data) {
                    $rootScope.isAuthenticated = false;
                    $rootScope.currentUser = null;
                    $location.url("/");
                    console.log(status);
                    console.log(data);
                });
            }
            else {
                //$location.path("/admin/login");
                $location.path("/");
            }
        }

        $scope.logIn = function logIn() {
            $location.path("/admin/login");
        }


        $scope.toRegister = function toregister() {
            //alert("toRegister");
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
            console.log(`register: username ${username}`)
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
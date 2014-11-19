'use strict';

angular.module('gags').controller('GagsController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		// Controller Logic
        console.log(' Authentication:',  Authentication);

        $scope.authentication = Authentication;

        console.log('GAG SCOPE: ', $scope);
        if (!$scope.authentication.user) $location.path('/');



        $scope.add = function() {
            console.log('scope: ', $scope);
            //$scope.details.addedBy = Authentication.user._id;

            $http.post('/ga/add', $scope.details).success(function(response) {
                //
                //console.log('gag client controller add response', response);
                $scope.get();
            }).error(function(response) {
                //console.log('gag client controller add response', response);
                    $scope.error = response.message;
            });
        };
            //the id doesn't do anything, but it breaks when I remove so fuck it.
        $scope.get = function() {
            $http.get('/ga/get', {'id' : '008'}).success(function(res) {
                console.log('get success: ', res);
                $scope.gags = res;
            }).error(function(res) {
                console.log('get error: ', res);
            });
        };
        $scope.get();
        /*
        $scope.get = function() {
            console.log('get scope: ', $scope);
            $http.post('/art/get', $scope.details).success(function(res) {
                console.log('success');
            }).error(function(res) {
                $scope.error = res.message;
            });
        };
        */
	}
]);
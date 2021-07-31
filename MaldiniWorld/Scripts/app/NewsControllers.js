 var  modules = modules || [];
(function () {
    'use strict';
    modules.push('News');

    angular.module('News',['ngRoute'])
    .controller('News_list', ['$scope', '$http', function($scope, $http){

        $http.get('/Api/News/')
        .then(function(response){$scope.data = response.data;});

    }])
    .controller('News_details', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

        $http.get('/Api/News/' + $routeParams.id)
        .then(function(response){$scope.data = response.data;});

    }])
    .controller('News_create', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){

        $scope.data = {};
        
        $scope.save = function(){
            $http.post('/Api/News/', $scope.data)
            .then(function(response){ $location.path("News"); });
        }

    }])
    .controller('News_edit', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){

        $http.get('/Api/News/' + $routeParams.id)
        .then(function(response){$scope.data = response.data;});

        
        $scope.save = function(){
            $http.put('/Api/News/' + $routeParams.id, $scope.data)
            .then(function(response){ $location.path("News"); });
        }

    }])
    .controller('News_delete', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){

        $http.get('/Api/News/' + $routeParams.id)
        .then(function(response){$scope.data = response.data;});
        $scope.save = function(){
            $http.delete('/Api/News/' + $routeParams.id, $scope.data)
            .then(function(response){ $location.path("News"); });
        }

    }])

    .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
            .when('/News', {
                title: 'News - List',
                templateUrl: '/Static/News_List',
                controller: 'News_list'
            })
            .when('/News/Create', {
                title: 'News - Create',
                templateUrl: '/Static/News_Edit',
                controller: 'News_create'
            })
            .when('/News/Edit/:id', {
                title: 'News - Edit',
                templateUrl: '/Static/News_Edit',
                controller: 'News_edit'
            })
            .when('/News/Delete/:id', {
                title: 'News - Delete',
                templateUrl: '/Static/News_Delete',
                controller: 'News_delete'
            })
            .when('/News/:id', {
                title: 'News - Details',
                templateUrl: '/Static/News_Details',
                controller: 'News_details'
            })
    }])
;

})();

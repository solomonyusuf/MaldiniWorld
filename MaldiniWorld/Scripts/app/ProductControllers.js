 var  modules = modules || [];
(function () {
    'use strict';
    modules.push('Product');

    angular.module('Product',['ngRoute'])
    .controller('Product_list', ['$scope', '$http', function($scope, $http){

        $http.get('/Api/Product/')
        .then(function(response){$scope.data = response.data;});

    }])
    .controller('Product_details', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

        $http.get('/Api/Product/' + $routeParams.id)
        .then(function(response){$scope.data = response.data;});

    }])
    .controller('Product_create', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){

        $scope.data = {};
        
        $scope.save = function(){
            $http.post('/Api/Product/', $scope.data)
            .then(function(response){ $location.path("Product"); });
        }

    }])
    .controller('Product_edit', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){

        $http.get('/Api/Product/' + $routeParams.id)
        .then(function(response){$scope.data = response.data;});

        
        $scope.save = function(){
            $http.put('/Api/Product/' + $routeParams.id, $scope.data)
            .then(function(response){ $location.path("Product"); });
        }

    }])
    .controller('Product_delete', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){

        $http.get('/Api/Product/' + $routeParams.id)
        .then(function(response){$scope.data = response.data;});
        $scope.save = function(){
            $http.delete('/Api/Product/' + $routeParams.id, $scope.data)
            .then(function(response){ $location.path("Product"); });
        }

    }])

    .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
            .when('/Product', {
                title: 'Product - List',
                templateUrl: '/Static/Product_List',
                controller: 'Product_list'
            })
            .when('/Product/Create', {
                title: 'Product - Create',
                templateUrl: '/Static/Product_Edit',
                controller: 'Product_create'
            })
            .when('/Product/Edit/:id', {
                title: 'Product - Edit',
                templateUrl: '/Static/Product_Edit',
                controller: 'Product_edit'
            })
            .when('/Product/Delete/:id', {
                title: 'Product - Delete',
                templateUrl: '/Static/Product_Delete',
                controller: 'Product_delete'
            })
            .when('/Product/:id', {
                title: 'Product - Details',
                templateUrl: '/Static/Product_Details',
                controller: 'Product_details'
            })
    }])
;

})();

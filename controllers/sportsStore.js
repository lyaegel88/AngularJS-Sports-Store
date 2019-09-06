angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:8080/Lukes_SpringMVC_war_exploded/products")
    .controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {

        $scope.data = {};

        $http.get(dataUrl)
            .success(function (data) {
                $scope.data.products = data;
            })
            .error(function (error) {
                $scope.data.error = error;
            })
});
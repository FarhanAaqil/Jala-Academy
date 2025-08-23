angular
  .module("myApp", [])
  .controller("AppCtrl", function ($scope) {
    $scope.message = "Hello from controller!";
  })
  .directive("sampleDirective", function () {
    return {
      restrict: "A",
      template: '<div ng-controller="AppCtrl">{{message}}</div>',
    };
  });

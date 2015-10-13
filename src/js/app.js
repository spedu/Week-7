angular.module('fizzbuzzer', []);
angular.module('fizzbuzzer', []).controller('MyController', ['$rootScope', '$scope', function($rootScope, $scope){
  $rootScope.buzzer = "something else";
  $scope.buzzer = 1;

}]);

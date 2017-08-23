angular.module('app', [])

.controller('MyController', ['$scope', function($scope) {
  $scope.message = 'Hello world';

}]);

setTimeout(function() {
  angular.bootstrap(document.getElementById('body'), ['app']);
});

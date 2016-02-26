var app = angular.module('app', [])

app.factory('GitHubService', function($http) {
  return {
    fetchUsers: function () {
      return $http.get('https://api.github.com/users')
    }
  }
})

app.controller('GitHubController', function($scope, GitHubService) {
  GitHubService.fetchUsers().success(function (users) {
    $scope.users = users;
  })
})
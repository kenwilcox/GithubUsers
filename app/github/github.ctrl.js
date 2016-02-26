angular.module('app')
.controller('GitHubController', function($scope, GitHubService) {
  GitHubService.fetchUsers().success(function (users) {
    $scope.users = users
  })
})

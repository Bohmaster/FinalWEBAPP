'use strict';

/**
 * @ngdoc function
 * @name azWebAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the azWebAppApp
 */
angular.module('azWebAppApp')
  .controller('ActionsCtrl', function ($uibModalInstance, $scope, $rootScope) {
    $scope.close = function() {
        $uibModalInstance.close();
    }      
  });

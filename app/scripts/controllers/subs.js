'use strict';

/**
 * @ngdoc function
 * @name azWebAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the azWebAppApp
 */
angular.module('azWebAppApp')
  .controller('SubsController', function ($rootScope, $scope, $http, Usuario, Entity) {

        $scope.entities = [];

        loadAllTheThings();
        
        console.log('sabe');

        function loadAllTheThings() {

            var array = [];

            var URL_CONSTRUCT = 'http://104.131.113.114:3004/api/usuarios/' + $rootScope.currentUser.userId + '/likes?access_token=' + localStorage.getItem('$LoopBack$accessTokenId');

            $http.get(URL_CONSTRUCT)
                .success(function(likes) {
                    console.log(likes);
                    for (var i = 0; i <  10 ; i++) {
                        console.log(2, likes);
                        Entity.find({
                            filter: {
                                where: {
                                    id: likes[i].likedObjectId
                                }
                            }
                        }).$promise.then(function(entities) {
                            console.log(1, entities);
                            array.push(entities);
                            angular.copy(array, $scope.entities)
                        })
                    }
                });

        }

    });

'use strict';

/**
 * @ngdoc overview
 * @name azWebAppApp
 * @description
 * # azWebAppApp
 *
 * Main module of the application.
 */
angular
  .module('azWebAppApp', [
    'ngAnimate',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'lbServices',
    'ngSanitize',
    'ngTouch',
    'ngOpenFB',
    'ngToast'
  ])
  .constant('ProjectSettings', {
    serverUrl: 'http://104.131.113.114:3002',
    apiUrl: 'http://104.131.113.114:3002/api',
    storageUrl: 'http://other.arg.az/store/',
    geolocateStorageVar: 'azappGeolocationActivated',
    bookmarksStorageVar: 'azappBookmarksObject',
    cityStorageVar: 'azappCityObject',
    tour: 'azappTour'
  })
  .config(function ($stateProvider, $urlRouterProvider, ngToastProvider) {
    
    $urlRouterProvider.otherwise('/app/home');

    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        controller: 'MainCtrl',
        templateUrl: 'views/app.html'
      })
      .state('app.home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl as home'
      })
      .state('app.login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl as login'
      })
      .state('app.subs', {
        url: '/favoritos',
        templateUrl: 'views/favorites.html',
        controller: 'SubsController'
      })
      .state('app.entityDetail', {
        url: '/detail/:entityId',
        templateUrl: 'views/entityDetail.html',
        controller: 'EntityController'
      })
      .state('app.map', {
        url: '/mapa',
        templateUrl: 'views/mapa.html',
        controller: function($scope, Entity) {
          $scope.directions = [];

          loadMapEntries();

          function loadMapEntries() {
            Entity.find({
              filter: {
                where: {
                  cityId: '5722a8699d3900c279fa8d1c'
                },
                limit: 50,
                include: 'categories'
              }
            }).$promise
              .then(function (data) {
                console.log('CATEGROY', data);
                angular.forEach(data, function (entity) {
                  console.log(entity.name);



                  //console.log(entity);
                  var _obj = {};
                  _obj.address = entity.address;
                  _obj.telephone = entity.phone;
                  _obj.name = entity.name;
                  _obj.active = entity.active;
                  _obj.direction = entity.geopoint;
                  _obj.imageUrl = 'http://104.131.113.114:3004/api/containers/entity_' + entity.id + '/download/logo.image'
                  _obj.subdomain = entity.subdomain;
                  _obj.categoryId = (entity.categories[0] == undefined) ? null : entity.categories[0].id

                  $scope.directions.push(_obj);
                });
              });
          }
        }
      })
      .state('app.chat', {
        url: '/chat',
        templateUrl: 'views/chatArea.html',
        controller: 'ChatController'
      })
      .state('app.chat.result', {
        url: '/:chatroomId',
        templateUrl: 'views/conversation.html',
        controller: 'ChatResultController',
        params: {
                    loginRequired: true,
                    owner: null
                }
      });

      ngToastProvider.configure({
        animation: 'fade' // or 'fade'
      });  

  })
  .run(function($rootScope, ngFB) {
    
     $rootScope.currentUser = JSON.parse(localStorage.getItem('user'));
     console.log($rootScope.currentUser);

     $rootScope.userMenuOpened = false;

     Webflow.ready();

     ngFB.init({appId: '1635919233357054'});
  })
  .controller('MainController', function($rootScope, $uibModal, EntityService) {
    $rootScope.userMenuOpened = false;

    $rootScope.loginModal = function() {
      $uibModal.open({
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        size: 'md'
      });
    };

    $rootScope.registerModal = function() {
      $uibModal.open({
        templateUrl: 'views/register.html',
        controller: 'LoginCtrl',
        size: 'md'
      });
    };

    $rootScope.openMenu = function() {
      if (!$rootScope.userMenuOpened) {
        $rootScope.userMenuOpened = true;
      } else {
        $rootScope.userMenuOpened = false;
      }
    };

    $rootScope.like = function(e, id) {
      EntityService.like(e, id);
    };
    
    $rootScope.rank = function(e, id) {
      EntityService.rank(e, id);
    };

    $rootScope.send = function() {
      $uibModal.open({
        templateUrl: 'views/send.html',
        controller: 'ActionsCtrl',
        size: 'md'
      });
    };

    $rootScope.suggest = function() {
      $uibModal.open({
        templateUrl: 'views/suggest.html',
        controller: 'ActionsCtrl',
        size: 'md'
      });
    };

  })
  .directive('sabe', function ($interpolate) {
    return {
        restrict: 'E',
        template: '<div id="mapProtector"><div ng-if="!full" id="mapi" class="mapa" style="width: 100%; height: 300px; margin-top: 20px;"></div><div ng-if="full" id="mapi" class="mapa" style="width: 100%; height: 100vh; margin-top: -20px;"></div></div>',
        link    : function (scope, elem, attrs) {

            var geocoder;
            var map;

            console.log('DIRECTIVE', attrs);

            // if (attrs.full) {
            //   angular.element('#map').css('height', '87vh');
            // }

            // $("#map").on('hover', function(e) {
            //   //console.log(e);
            //   $("#mapProtector").css('display', 'block');
            // });

            console.log(1, attrs);

            if (attrs.full) {
              console.log('TRUE');
              scope.full = true;
            }

            attrs.$observe('dir', function (value) {

                var _dirs = JSON.parse(attrs.dir);

                // console.log(_dirs);

                var mapOptions = {
                    zoom     : 13,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: false
                };
                map            = new google.maps.Map(document.getElementById("mapi"), mapOptions);

                map.addListener('mouseover', function(e) {
                  //console.log('over mouse');
                });

                map.setCenter(new google.maps.LatLng(-32.917961, -60.812714), 30);

                geocoder = new google.maps.Geocoder();

                angular.forEach(_dirs, function(entity, value) {
                    //console.log(_dirs[i].address);
                   //console.log(status);

                  //console.log('MAPPING', entity, value);

                          console.log(entity, value);



                            if (entity.active) {
                              var marker = new google.maps.Marker({
                                  map      : map,
                                  position : entity.direction,
                                  icon     : {
                                    size: new google.maps.Size(41, 41),
                                    url: 'images/icon.png',
                                  },
                                  animation: google.maps.Animation.DROP
                              });

                              marker.addListener('click', function () {
                                  var contentString =
                                      '<div class="mapContentWrapper" style="text-align: center; background: white; color: black;">' +
                                      '<div class="entityHeader" style="margin-bottom:5px; font-size:18px;">' + entity.name + '</div>' +
                                      '<img src="' + entity.imageUrl + '" width="65" style="border-radius: 30px;"></img>' +
                                      '<div class="entityBody" style="color: black;">' +
                                       '<div style="color: black; margin-top: 5px;">' + entity.address + '</div> ' +
                                         '<div style="color: black">' + entity.telephone + '</div> ' +
                                        '<a style="color: blue;" href="http://www.' + entity.subdomain.name + '.arg.az" target="_blank">www.' + entity.subdomain.name + '.arg.az</a>' +
                                      '</div>' +
                                      '</div>';
                                  var infowindow    = new google.maps.InfoWindow({
                                      content: contentString
                                  });

                                  infowindow.open(map, marker);

                                });
                            } else {
                              //console.log('http://104.131.113.114:3004/api/containers/category_' + entity.categoryId + '/download/logo.image');
                              var marker = new google.maps.Marker({
                                  map      : map,
                                  position : entity.direction,
                                  icon     : {
                                             url: 'images/icon.png',
                                             size: new google.maps.Size(41, 41)
                                  },
                                  animation: google.maps.Animation.DROP
                              });

                              marker.addListener('click', function () {
                                  var contentString =
                                      '<div class="mapContentWrapper" style="text-align: center; background: white; color: black;">' +
                                      '<div class="entityHeader" style="margin-bottom:5px; font-size:18px;">' + entity.name + '</div>' +
                                      '<div style="background: black; border-radius:30px; width: 67px; position: relative; margin: 0 auto;"><img src="' + 'http://104.131.113.114:3004/api/containers/category_' + entity.categoryId + '/download/logo.image' + '" width="65" style="border-radius: 30px;"></img></div>' +
                                      '<div class="entityBody" style="color: black;">' +
                                       '<div style="color: black; margin-top: 5px;">' + entity.address + '</div> ' +
                                         '<div style="color: black">' + entity.telephone + '</div> ' +
                                      '</div>' +
                                      '</div>';

                                  var infowindow    = new google.maps.InfoWindow({
                                      content: contentString
                                  });

                                  infowindow.open(map, marker);

                                });
                            }


                });
            });

        }
    }
}).filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                  //Also remove . and , so its gives a cleaner result.
                  if (value.charAt(lastspace-1) == '.' || value.charAt(lastspace-1) == ',') {
                    lastspace = lastspace - 1;
                  }
                  value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    });

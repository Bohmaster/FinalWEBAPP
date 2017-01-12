'use strict';

/**
 * @ngdoc function
 * @name azWebAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the azWebAppApp
 */
angular.module('azWebAppApp')
  .controller('EntityController', function ($rootScope, $scope, $stateParams, $http, $compile, Entity) {
    
      var entityId = $stateParams.entityId;

      var CONTAINER_URL = 'http://104.131.113.114:3002/api/containers/entity_';

      var AZ_PROFILE = "UNO";

      $scope.entity = {};

      var entity = {};

      Entity.find({
          filter: {
              where: {
                  id: entityId
              },
              include: [
                    { relation: "city" },
                    { relation: "subscription" },
                    { relation: "adverts" },
                    { relation: "products" },
                    { relation: "hours",
                      scope: {
                        fields: {dayOfWeek: true, openTime: true, closeTime: true, entityId: false}
                      }
                    },
                    {
                      relation: "owners",
                      scope: {
                        fields: {id: true}
                      }
                    },
                    {
                      relation: "likes",
                      scope: {
                        where: {
                          usuarioId: ($rootScope.currentUser)?$scope.currentUser.id:0
                        }
                      }
                    },
                    {
                      relation: "ranks",
                      scope: {
                        where: {
                          usuarioId: ($scope.currentUser)?$scope.currentUser.id:0
                        }
                      }
                    }
                  ]
          }
      }, function(entity) {
          console.log(entity);
          $scope.entity = entity = entity[0];

          getEntityFiles();
      });

      function getEntityFiles () {
        var FILES_URL = CONTAINER_URL + entityId + '/files';
        var FILES = [];        
        
        $http.get(FILES_URL)
            .success(function (files) {
                console.log(1, files);
                for (var i = 0; i < files.length; i++) {
                    if (files[i].name != entity.cover &&
                        files[i].name != entity.logo &&
                        files[i].name.indexOf('.photo') != -1) {
                            files[i].url = CONTAINER_URL + entityId + '/download/' + files[i].name;
                            
                            FILES.push(files[i]);
                            console.log(files[i]);
                    }
                }
                //console.log(FILES);
                fixAngularWebflow(entityId, FILES);
            });
    }

        function fixAngularWebflow (entityId, files, adverts) {
            var Slide  = {};
            var Advert = {};

            var FILE_URL = CONTAINER_URL + entityId;

            console.log('adverts', adverts);

            switch (AZ_PROFILE) {
                case 'UNO':
                    for (var i = 0; i < files.length; i++) {
                        Slide.id   = 'id="slide-' + i + '"';
                        Slide.name = files[i].name;

                        var div = '<div class="w-slide" ' + Slide.id + 'data-name="' + Slide.name + '" data-eId="' + entityId + '"></div>';
                        $(div).appendTo($('#az-slider'));

                        var _div = $('#slide-' + i);
                        _div.css('background-image', 'url("' + FILE_URL + '/download/' + Slide.name + '")');
                        _div.css('background-repeat', 'no-repeat');
                        _div.css('background-size', 'cover');

                        console.log(i, _div);

                        $compile(_div)($scope);
                    }

                    // for (var i = 0; i < adverts.length; i++) {
                    //     Advert.id   = 'id="slide-a' + i + '"';
                    //     Advert.url  = adverts[i].id + '.advert';

                    //     if (!adverts[i].banner) {
                    //         var div =   '<div class="w-slide"' + Advert.id + '>' +
                    //                         '<div class="divpromo"' + 'ng-click="profile.popUpAdvert($event)" data-id="' + adverts[i].id + '"' + 'style="background-size: cover; background-repeat: no-repeat; background-image: url("http://104.131.113.114:3004/api/containers/entity_' + entityId + '/' + Advert.url + '")">' +
                    //                             '<div class="fechapromo"><div class="txtfechapromo ng-binding">{{profile.entity.name}}</div></div>' +
                    //                             '<div class="titulopromo"><div class="txttitpromo ng-binding" uib-popover="asdasd" popover-trigger="mouseover mouseleave">' + adverts[i].title + '</div></div>' +
                    //                             '<div class="descripromo"><div class="txtdescripromo ng-binding" style="text-transform: capitalize;" uib-popover="asdadad" popover-trigger="mouseover mouseleave">' + adverts[i].description + '</div></div>' +
                    //                             '<div class="divsubtit"><div class="txtsubtit ng-binding" uib-popover="ada" popover-trigger="mouseover mouseleave">' + adverts[i].subtitle + '</div></div>' +
                    //                         '</div>' +
                    //                     '</div>';
                    //     } else {
                    //         var div =   '<div class="w-slide"' + Advert.id + 'ng-click="popUpAdvert($event)" data-id="' + Advert.id + '>' +
                    //                         '<div class="divpromo" style="background-size: cover; background-repeat: no-repeat; border: 4px solid #27547e; background-image: url("http://104.131.113.114:3004/api/containers/entity_' + entityId + '/' + Advert.url + '")"></div>' + 
                    //                     '</div>';
                    //     }

                    //     $(div).appendTo($('#az-adverts'));

                    //     var _div = $('#slide-a' + i).find('.divpromo');
                    //     _div.css('background-image', 'url("' + FILE_URL + '/download/' + Advert.url + '")');
                    //     // _div.css('background-repeat', 'no-repeat');
                    //     // _div.css('background-size', 'cover');

                    //     console.log(i, _div, $compile, $scope);

                    //     $compile(_div)($scope);
                        
                    // }
                    
                    // var services = $('.iconoswrapper p p img');
                    // services.addClass('iconos');
                                    
                    Webflow.ready();

                    console.log('1111111111111111111111');
                    
                    
                    break;
            }
        } 

  });
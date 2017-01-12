(function() {
    'use strict';

    angular
        .module('azWebAppApp')
        .factory('EntityService', EntityService);

    EntityService.$inject = ['Entity', '$http', 'ProjectSettings', '$q', 'ngToast'];

    /* @ngInject */
    function EntityService(Entity, $http, ProjectSettings, $q, ngToast) {
        var service = {
            like: like,
            rank: rank
        };

        return service;

        function like(entity, userId) {

          return $q(function(resolve, reject) {

            // save the article in local storage
            var bookmarks = JSON.parse(window.localStorage[ProjectSettings.bookmarksStorageVar] || '[]');

            if(entity.likes.length) {
              // el link entre entidad y usuario ya existe, hay que actualizarlo
              $http.delete(
                ProjectSettings.apiUrl + "/entities/" + entity.id + "/likes/" + entity.likes[0].id
              ).then(function(res) {
                entity.likes = [];
                entity.totalLikes = res.data.totalLikes;

                console.log(res);

                ngToast.create('Desmarcado como favorito');

                for (var i = 0; i < bookmarks.length; i++) {
                  if(bookmarks[i].id===entity.id) {
                    bookmarks.splice(i,1);
                  }
                }

                window.localStorage[ProjectSettings.bookmarksStorageVar] = JSON.stringify(bookmarks);

                resolve(entity);

              }, function(err) {
                console.error(err);
                reject(err);
              });

            } else {

              // el link no existe, hay que crearlo
              Entity.prototype$__create__likes(
                {'id': entity.id},
                { "likedObjectType": "entity",
                  "usuarioId": userId
                },
                function(res,headers) {
                  entity.likes[0] = res.likeObject;
                  entity.totalLikes = res.totalLikes;

                  console.log(res);

                  ngToast.create('Marcado como favorito');

                  bookmarks.unshift(entity);

                  window.localStorage[ProjectSettings.bookmarksStorageVar] = JSON.stringify(bookmarks);

                  resolve(entity);

                }, function(err){
                  console.error(err);
                  reject(err);
                });
            }

          });

        }

        function rank(entity, value, userId) {

          return $q(function(resolve, reject) {

            if(entity.ranks && entity.ranks.length) {

              // el link entre entidad y usuario ya existe, hay que actualizarlo
              $http.delete(
                ProjectSettings.apiUrl + "/entities/" + entity.id + "/ranks/" + entity.ranks[0].id
              ).then(function(res) {
                entity.ranks = [];
                entity.ranking = res.data.value;
                resolve(entity);

                console.log(res);

              }, function(err) {
                console.error(err);
                reject(err);
              });

              // // el link entre entidad y usuario ya existe, hay que actualizarlo
              // $http.put(
              //   ProjectSettings.apiUrl + "/entities/" + entity.id + "/ranks/" + entity.ranks[0].id,
              //   {"value":0}
              // ).then(function(res) {
              //   if(res.status===200) {
              //     entity.ranks[0] = res.data.rankObject;
              //     entity.ranking = res.data.value;
              //   }
              //   resolve(entity);
              //
              // }, function(err) {
              //   console.error(err);
              //   reject(err);
              // });

            } else {

              // el link no existe, hay que crearlo
              Entity.prototype$__create__ranks(
                {'id': entity.id},
                { "value": 1,
                  "rankedObjectType": "entity",
                  "usuarioId": userId
                },
                function(res,headers) {
                  if(!entity.ranks) {
                    entity.ranks = [];
                    entity.ranks.push(res.rankObject);
                  } else {
                    entity.ranks[0] = res.rankObject;
                  }

                  console.log(res);
                  
                  ngToast.create('Destacado');

                  entity.ranking = res.value;
                  resolve(entity);
                }, function(err){
                  console.error(err);
                  reject(err);
                });
            }

          });

        }
    }
})();
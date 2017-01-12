'use strict';

/**
 * @ngdoc function
 * @name azWebAppApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the azWebAppApp
 */
angular.module('azWebAppApp')
  .controller('HomeCtrl', function ($rootScope, $http, $scope, $uibModal, $stateParams, $state, Category, Entity, Advert, Product, City, Container) {
    var vm = this;

    var urlBase = 'http://104.131.113.114:3002/api/';

    vm.items = [];
    vm.categories = [];
    vm.cities = [];
    vm.items = [];
    vm.offset = 0;
    vm.resultadoFound = false;
    vm.directions = [];

    vm.typeResult = 'adverts';

    vm.selectedEntry = 'Publicaciones';

    console.log(vm.selectedEntry);

    loadMapEntries();

    var cityId = '55e205ad7118c6ccfc78bd4d';

    vm.changeCity = function(){
      vm.selectedCityBind = angular.copy(vm.selectedCity);
      vm.selectedCityBind = JSON.parse(vm.selectedCityBind);
      vm.getSelectedEntry(vm.selectedEntry);
    }

    vm.query = null;

    vm.search = function() {
      if (vm.selectedEntry === 'Publicaciones') {
        Advert.search({
          like: vm.query,
          cityId: vm.selectedCityBind.id
        }, function(data) {
          vm.items = data.results;
          vm.typeResult = 'adverts';
          if (vm.items.length > 0) {
            vm.resultadoFound = true;
          } else {
            vm.resultadoFound = false;
          }
          console.log('SEARCHED', vm.selectedEntry, data, vm.query);
        });
      } else if (vm.selectedEntry === 'Comercios') {
        Entity.search({
          like: vm.query,
          cityId: vm.selectedCityBind.id
        }, function(data) {
          vm.items = data.results;
          vm.typeResult = 'entities';
          if (vm.items.length > 0) {
            vm.resultadoFound = true;
          } else {
            vm.resultadoFound = false;
          }
          console.log('SEARCHED', vm.selectedEntry, data, vm.query);
        });
      } else {
        Product.search({
          like: vm.query,
          cityId: vm.selectedCityBind.id
        }, function(data) {
          vm.items = data.results;
          vm.typeResult = 'products';
          if (vm.items.length > 0) {
            vm.resultadoFound = true;
            
          } else {
            vm.resultadoFound = false;
          }
          console.log('SEARCHED', vm.selectedEntry, data, vm.query);
        });
      }
    };

    function getCities(){
      City.find(function(data){
        vm.cities = data;
        vm.selectedCity = JSON.stringify(vm.cities[0]);
        vm.changeCity();
      }, function(err){
        console.log(err);
      });
    }

    vm.openAdvert = function(advert) {
      $uibModal.open({
        templateUrl: 'views/advertDetail.html',
        controller: function($scope) {
          $scope.item = advert;
        }
      });
    }

    vm.openProduct = function(product) {
      $uibModal.open({
        templateUrl: 'views/productDetail.html',
        controller: function($scope) {
          $scope.item = product;
        }
      });
    }

    getCities();

    //loadMapEntries();


    function getCategories() {
        Category.__get__root({
            filter: {
                include: "subcategories"
            }})
            .$promise
            .then(function(data) {
                vm.categories = data;
            });
    }

    vm.offSet = function(operator){
      if(operator) {
        switch (operator) {
          case '+':
            vm.offset +=9;
            break;
          case '-':
            vm.offset -=9;
            break;
          default:

        }
      }
    }

    vm.selectPage = function(operator){
      if(operator) {
        switch (operator) {
          case '+':
            vm.selectedPage ++;
            break;
          case '-':
            vm.selectedPage --;
            break;
          default:

        }
      }
    }

    function getDefaultAdverts() {
      if(vm.selectedPage === 1){
        loadPagesCount('Advert');
      }
      Advert.find(
        {
          filter: {
            where: {
              cityId : vm.selectedCityBind.id
            },
            limit: 9,
            offset: vm.offset,
            include: {
              relation: 'entity',
              scope: {
                fields: ['name', 'description', 'address', 'phone', 'mobile']
              }
            }
          }
        },
        function (res) {
          vm.items = res;
          vm.typeResult = 'adverts';
          if(vm.items.length > 0){
            vm.resultadoFound = true;
          }else{
            vm.resultadoFound = false;
          }
        }, function (err) {
          console.error(err);
      });
    };

    getCategories();

    // select

    vm.selectedEntry = 'Publicaciones';
    vm.getSelectedEntry = function(type, e, category) {
      if(angular.isDefined(e)){
        e.preventDefault();
        e.stopPropagation();
      }

      if (typeof type !== 'undefined') {
        vm.selectedEntry = type;
        switch (type) {
          case 'Publicaciones':
            if(category && category.id && type){
              getByCategory(category, type);
            }else{
              if(vm.selectedPage === 1){
                vm.offset = 0;
              }
              getDefaultAdverts();
            }
            break;
          case 'Comercios':
            if(category && category.id && type){
              getByCategory(category, type);
            }else{
              if(vm.selectedPage === 1){
                vm.offset = 0;
              }
              getEntities();
            }
            break;
          case 'Productos':
            if(category && category.id && type){
              getByCategory(category, type);
            }else{
              if(vm.selectedPage === 1){
                vm.offset = 0;
              }
              getProducts();
            }
            break;
          default:
            vm.offset = 0;
            vm.selectedPage = 1;
            getDefaultAdverts();
        }
      }
    }

    // filter

    vm.scrollToSection = function(selector, e){

      if(angular.isDefined(e)){
        e.preventDefault();
        e.stopPropagation();
      }

      $('html, body').animate({
          scrollTop: $( $(selector) ).offset().top
      }, 500);
    }
  
    //

    vm.getEntitiesOrder = function (order) {
        if(vm.selectedPage === 1){
           loadPagesCount('Entity');
        }
       Entity.find(
              {
                filter: {
                  where: {
                    cityId : vm.selectedCityBind.id
                  },
                  limit: 9,
                  offset: vm.offset,
                  order: ['active DESC', order],
                  include: [
                    { relation: "city" },
                    { relation: "subscription" },
                    { relation: "adverts" },
                    { relation: "categories" },
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
                          usuarioId: ($scope.currentUser)?$scope.currentUser.id:0
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
              }
            ).$promise.then(
              function (res) {
                vm.items = res;
                
                vm.typeResult = 'entities';
                if(vm.items.length > 0){
                  vm.resultadoFound = true;
                  console.log(vm.items, 'ENTITIES');
                }else{
                  vm.resultadoFound = false;
                }
              },function (err) {
                console.log(err);
              });
    }

    //

    function getEntities(category) {
        if(vm.selectedPage === 1){
           loadPagesCount('Entity');
        }
       Entity.find(
              {
                filter: {
                  where: {
                    cityId : vm.selectedCityBind.id
                  },
                  limit: 9,
                  offset: vm.offset,
                  order: 'active DESC',
                  include: [
                    { relation: "city" },
                    { relation: "subscription" },
                    { relation: "adverts" },
                    { relation: "categories" },
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
                          usuarioId: ($scope.currentUser)?$scope.currentUser.id:0
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
              }
            ).$promise.then(
              function (res) {
                vm.items = res;
                
                vm.typeResult = 'entities';
                if(vm.items.length > 0){
                  vm.resultadoFound = true;
                  console.log(vm.items, 'ENTITIES');
                }else{
                  vm.resultadoFound = false;
                }
              },function (err) {
                console.log(err);
              });
    }

    function getProducts(category) {
      if(vm.selectedPage === 1){
         loadPagesCount('Product', category);
      }

      Product.find(
         {
           filter: {
             where: {
               cityId : vm.selectedCityBind.id
             },
             limit: 9,
             offset: vm.offset,
             include: {
               relation: 'entity',
               scope: {
                 fields: ['name','description','address','phone','mobile']
               }
             }
           }
         },
         function (res) {
           vm.items = res;
           vm.typeResult = 'products';
           if(vm.items.length > 0){
             vm.resultadoFound = true;
             
             for (var i = 0; i < vm.items.length; i++) {
                getFiles(vm.items[i], (i==vm.items[i].length-1)?true:false);
             }

             console.log('PRODUCTS', vm.items); 
           }else{
             vm.resultadoFound = false;
           }
           
         }, function (err) {
             console.error(err);
         });
    }


    // # Pagination

    vm.pages_quantity = 0;
    vm.total_found = 0;
    vm.selectedPage = 1;
    vm.found = [];

    function loadCountByCategory(type, category){
      if(type && category){
        switch (type) {
          case 'Advert':
            Category.adverts(
              {
                id: category.id,
                filter: {
                  where: {
                    cityId: vm.selectedCityBind.id
                  },
                  fields: {id: true}
                }
              }, function(data){
                vm.found = data;
                vm.total_found = vm.found.length;
                if(vm.total_found > 9){
                  vm.pages_quantity = vm.total_found / 9;
                }else{
                  if(vm.total_found === 0){
                    vm.pages_quantity = 0;
                  }else{
                    vm.pages_quantity = 1;
                  }
                }
                if(vm.pages_quantity % 1 > 0) {
                  vm.pages_quantity = vm.pages_quantity+1;
                }
                vm.pages_quantity = Math.floor(vm.pages_quantity);
              });
            break;
          case 'Product':
            Category.products(
              {
                id: category.id,
                filter: {
                  where: {
                    cityId: vm.selectedCityBind.id
                  },
                  fields: {id: true}
                }
              }, function(data){
                vm.found = data;
                vm.total_found = vm.found.length;
                if(vm.total_found > 9){
                  vm.pages_quantity = vm.total_found / 9;
                }else{
                  if(vm.total_found === 0){
                    vm.pages_quantity = 0;
                  }else{
                    vm.pages_quantity = 1;
                  }
                }
                if(vm.pages_quantity % 1 > 0) {
                  vm.pages_quantity = vm.pages_quantity+1;
                }
                vm.pages_quantity = Math.floor(vm.pages_quantity);
              });
            break;
          case 'Entity':
            Category.entities(
              {
                id: category.id,
                filter: {
                  where: {
                    cityId: vm.selectedCityBind.id
                  },
                  fields: {id: true}
                }
              }, function(data){
                vm.found = data;
                vm.total_found = vm.found.length;
                if(vm.total_found > 9){
                  vm.pages_quantity = vm.total_found / 9;
                }else{
                  if(vm.total_found === 0){
                    vm.pages_quantity = 0;
                  }else{
                    vm.pages_quantity = 1;
                  }
                }
                if(vm.pages_quantity % 1 > 0) {
                  vm.pages_quantity = vm.pages_quantity+1;
                }
                vm.pages_quantity = Math.floor(vm.pages_quantity);
              });
            break;
          default:

        }
      }
    }

    function loadPagesCount(type, category, offset){
      // TODO: complete the count request with filters
      if(typeof type !== 'undefined'){
        vm.pages_quantity = 0;
        switch (type) {
          case 'Advert':
            if(category){
              loadCountByCategory(type, category);
            }else{
              Advert.count({
                where: {
                  cityId: vm.selectedCityBind.id
                }
              },function(res){
                vm.total_found = res.count;
                if(vm.total_found > 9){
                  vm.pages_quantity = vm.total_found / 9;
                }else{
                  if(vm.total_found === 0){
                    vm.pages_quantity = 0;
                  }else{
                    vm.pages_quantity = 1;
                  }
                }
                if(vm.pages_quantity % 1 > 0) {
                  vm.pages_quantity = vm.pages_quantity+1;
                }
                vm.pages_quantity = Math.floor(vm.pages_quantity);
              }, function(err){
                console.error(err);
              });
            }

            break;
          case 'Product':
            if(category){
              loadCountByCategory(type, category);
            }else{
              Product.count({
                  where: {
                    cityId: vm.selectedCityBind.id
                  }
                },function(res){
                vm.total_found = res.count;
                if(vm.total_found > 9){
                  vm.pages_quantity = vm.total_found / 9;
                }else{
                  if(vm.total_found === 0){
                    vm.pages_quantity = 0;
                  }else{
                    vm.pages_quantity = 1;
                  }
                }
                if(vm.pages_quantity % 1 > 0) {
                  vm.pages_quantity = vm.pages_quantity+1;
                }
                vm.pages_quantity = Math.floor(vm.pages_quantity);
              }, function(err){
                console.error(err);
              });
            }
            break;
          case 'Entity':
            if(category){
              loadCountByCategory(type, category);
            }else{
              Entity.count({
                  where: {
                    cityId: vm.selectedCityBind.id
                  }
                },function(res){
                vm.total_found = res.count;
                if(vm.total_found > 9){
                  vm.pages_quantity = vm.total_found / 9;
                }else{
                  if(vm.total_found === 0){
                    vm.pages_quantity = 0;
                  }else{
                    vm.pages_quantity = 1;
                  }
                }
                if(vm.pages_quantity % 1 > 0) {
                  vm.pages_quantity = vm.pages_quantity+1;
                }
                vm.pages_quantity = Math.floor(vm.pages_quantity);
              }, function(err){
                console.error(err);
              });
            }
            break;
          default:

        }
      }
    }

     vm.toggleCategory = function(category, e){
        if(angular.isDefined(e)){
          e.preventDefault();
          e.stopPropagation();
        }
        angular.forEach(vm.categories, function(c, i){
          if(c.id !== category.id){
            c.open = false;
          }
        });
        if(typeof category.open !== 'undefined'){
          category.open = !category.open;
        }else{
          category.open = true;
        }
    }

    vm.selectedCategory = {};
    function getByCategory(category, type){
      if(category.id !== vm.selectedCategory.id){
        vm.selectedPage = 1;
        vm.offset = 0;
        vm.selectedCategory = category;
      }
      switch (type) {
        case 'Publicaciones':
            $http.get(urlBase + 'categories/' +
                      category.id + '/adverts?filter=%7B%22where%22%3A%20%7B%22cityId%22%3A%20%22'
                      + vm.selectedCityBind.id + '%22%7D%7D')
                      .success(function(data) {
                        vm.items = data;
                        vm.typeResult = 'adverts';
                        if(vm.items.length > 0){
                          vm.resultadoFound = true;
                          
                        }else{
                          vm.resultadoFound = false;
                        }
                        console.log('HERE', category, type, data);
                        if(vm.selectedPage === 1){
                          loadPagesCount('Advert', category);
                        }  
                      });
          break;
        case 'Comercios':
          Category.entities(
            {
              id: category.id,
              filter: {
                where: {
                  cityId: vm.selectedCityBind.id,
                },
                order: 'active ASC',
                limit: 9,
                offset: vm.offset
              }
            }, function(data){
              vm.items = data;
              vm.typeResult = 'entities';
              if(vm.items.length > 0){
                vm.resultadoFound = true;
              }else{
                vm.resultadoFound = false;
              }
              console.log('HERE', category, type, data);
              if(vm.selectedPage === 1){
                loadPagesCount('Entity', category);
              }

            });
          break;
        case 'Productos':
          $http.get(urlBase + 'categories/' +
                      category.id + '/products?filter=%7B%22where%22%3A%20%7B%22cityId%22%3A%20%22'
                      + vm.selectedCityBind.id + '%22%7D%7D')
                      .success(function(data) {
                        vm.items = data;
                        vm.typeResult = 'products';
                        if(vm.items.length > 0){
                          vm.resultadoFound = true;
                          for (var i = 0; i < vm.items.length; i++) {
                              getFiles(vm.items[i], (i==vm.items[i].length-1)?true:false);
                          }
                        }else{
                          vm.resultadoFound = false;
                        }
                        console.log('HERE', category, type, data);
                        if(vm.selectedPage === 1){
                          loadPagesCount('Product', category);
                        }  
                      });
          break;
        default:

      }
    }

    // function getFiles(item) {
    //     var containerName = 'entity_' + item.entity.id;
    //     item['images'] = [];
    //
    //     Container.getFiles({'container':containerName}, function(files) {
    //       for (var i = 0; i < files.length; i++) {
    //         if(files[i].name.indexOf('product')!=-1 && files[i].name.substr(0,files[i].name.indexOf('.')) == item.id) {
    //           item.images.push(files[i].name);
    //         }
    //       }
    //     }, function(err){
    //       console.error(err);
    //     });
    //   }

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

            vm.directions.push(_obj);
          });
        });
    }

    function getFiles(item, last) {
        var containerName = 'entity_' + item.entityId;
        item['images'] = [];

        Container.getFiles({'container':containerName}, function(files) {
          for (var i = 0; i < files.length; i++) {
            if(files[i].name.indexOf('product')!=-1 && files[i].name.substr(0,files[i].name.indexOf('.')) == item.id) {
              item.images.push(files[i].name);
            }
          }

          if(last) {
            console.log(last);
          }

        }, function(err){
          console.error(err);
        });
      }

  });

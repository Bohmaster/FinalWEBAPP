(function(window, angular, undefined) {'use strict';

var urlBase = "http://104.131.113.114:3002/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Category
 * @header lbServices.Category
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Category` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Category",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/categories/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Category.subcategories.findById() instead.
        "prototype$__findById__subcategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/subcategories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.subcategories.destroyById() instead.
        "prototype$__destroyById__subcategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/subcategories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.subcategories.updateById() instead.
        "prototype$__updateById__subcategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/subcategories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.entities.findById() instead.
        "prototype$__findById__entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/entities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.entities.destroyById() instead.
        "prototype$__destroyById__entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/entities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.entities.updateById() instead.
        "prototype$__updateById__entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/entities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.entities.link() instead.
        "prototype$__link__entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/entities/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.entities.unlink() instead.
        "prototype$__unlink__entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/entities/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.entities.exists() instead.
        "prototype$__exists__entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/entities/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Category.tags.findById() instead.
        "prototype$__findById__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/tags/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.tags.destroyById() instead.
        "prototype$__destroyById__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/tags/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.tags.updateById() instead.
        "prototype$__updateById__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/tags/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.tags.link() instead.
        "prototype$__link__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/tags/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.tags.unlink() instead.
        "prototype$__unlink__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/tags/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.tags.exists() instead.
        "prototype$__exists__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/tags/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Category.adverts.findById() instead.
        "prototype$__findById__adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/adverts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.adverts.destroyById() instead.
        "prototype$__destroyById__adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/adverts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.adverts.updateById() instead.
        "prototype$__updateById__adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/adverts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.adverts.link() instead.
        "prototype$__link__adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/adverts/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.adverts.unlink() instead.
        "prototype$__unlink__adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/adverts/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.adverts.exists() instead.
        "prototype$__exists__adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/adverts/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Category.subdomain() instead.
        "prototype$__get__subdomain": {
          url: urlBase + "/categories/:id/subdomain",
          method: "GET"
        },

        // INTERNAL. Use Category.subdomain.create() instead.
        "prototype$__create__subdomain": {
          url: urlBase + "/categories/:id/subdomain",
          method: "POST"
        },

        // INTERNAL. Use Category.subdomain.update() instead.
        "prototype$__update__subdomain": {
          url: urlBase + "/categories/:id/subdomain",
          method: "PUT"
        },

        // INTERNAL. Use Category.subdomain.destroy() instead.
        "prototype$__destroy__subdomain": {
          url: urlBase + "/categories/:id/subdomain",
          method: "DELETE"
        },

        // INTERNAL. Use Category.cities.findById() instead.
        "prototype$__findById__cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/cities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.cities.destroyById() instead.
        "prototype$__destroyById__cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/cities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.cities.updateById() instead.
        "prototype$__updateById__cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/cities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.cities.link() instead.
        "prototype$__link__cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/cities/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.cities.unlink() instead.
        "prototype$__unlink__cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/cities/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.cities.exists() instead.
        "prototype$__exists__cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/cities/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Category.products.findById() instead.
        "prototype$__findById__products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/products/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.products.destroyById() instead.
        "prototype$__destroyById__products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/products/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.products.updateById() instead.
        "prototype$__updateById__products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/products/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.products.link() instead.
        "prototype$__link__products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/products/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.products.unlink() instead.
        "prototype$__unlink__products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/products/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.products.exists() instead.
        "prototype$__exists__products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/products/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Category.subcategories() instead.
        "prototype$__get__subcategories": {
          isArray: true,
          url: urlBase + "/categories/:id/subcategories",
          method: "GET"
        },

        // INTERNAL. Use Category.subcategories.create() instead.
        "prototype$__create__subcategories": {
          url: urlBase + "/categories/:id/subcategories",
          method: "POST"
        },

        // INTERNAL. Use Category.subcategories.destroyAll() instead.
        "prototype$__delete__subcategories": {
          url: urlBase + "/categories/:id/subcategories",
          method: "DELETE"
        },

        // INTERNAL. Use Category.subcategories.count() instead.
        "prototype$__count__subcategories": {
          url: urlBase + "/categories/:id/subcategories/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#__get__root
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Queries root of category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "__get__root": {
          isArray: true,
          url: urlBase + "/categories/root",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#__create__root
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Creates a new instance in root of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "__create__root": {
          url: urlBase + "/categories/root",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#__delete__root
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Deletes all root of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "__delete__root": {
          url: urlBase + "/categories/root",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#__count__root
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Counts root of category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "__count__root": {
          url: urlBase + "/categories/root/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#__get__subrubros
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Queries subrubros of category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "__get__subrubros": {
          isArray: true,
          url: urlBase + "/categories/subrubros",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#__create__subrubros
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Creates a new instance in subrubros of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "__create__subrubros": {
          url: urlBase + "/categories/subrubros",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#__delete__subrubros
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Deletes all subrubros of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "__delete__subrubros": {
          url: urlBase + "/categories/subrubros",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#__count__subrubros
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Counts subrubros of category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "__count__subrubros": {
          url: urlBase + "/categories/subrubros/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#__get__has_entities
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Queries has_entities of category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "__get__has_entities": {
          isArray: true,
          url: urlBase + "/categories/has_entities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#__create__has_entities
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Creates a new instance in has_entities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "__create__has_entities": {
          url: urlBase + "/categories/has_entities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#__delete__has_entities
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Deletes all has_entities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "__delete__has_entities": {
          url: urlBase + "/categories/has_entities",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#__count__has_entities
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Counts has_entities of category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "__count__has_entities": {
          url: urlBase + "/categories/has_entities/count",
          method: "GET"
        },

        // INTERNAL. Use Category.entities() instead.
        "prototype$__get__entities": {
          isArray: true,
          url: urlBase + "/categories/:id/entities",
          method: "GET"
        },

        // INTERNAL. Use Category.entities.create() instead.
        "prototype$__create__entities": {
          url: urlBase + "/categories/:id/entities",
          method: "POST"
        },

        // INTERNAL. Use Category.entities.destroyAll() instead.
        "prototype$__delete__entities": {
          url: urlBase + "/categories/:id/entities",
          method: "DELETE"
        },

        // INTERNAL. Use Category.entities.count() instead.
        "prototype$__count__entities": {
          url: urlBase + "/categories/:id/entities/count",
          method: "GET"
        },

        // INTERNAL. Use Category.tags() instead.
        "prototype$__get__tags": {
          isArray: true,
          url: urlBase + "/categories/:id/tags",
          method: "GET"
        },

        // INTERNAL. Use Category.tags.create() instead.
        "prototype$__create__tags": {
          url: urlBase + "/categories/:id/tags",
          method: "POST"
        },

        // INTERNAL. Use Category.tags.destroyAll() instead.
        "prototype$__delete__tags": {
          url: urlBase + "/categories/:id/tags",
          method: "DELETE"
        },

        // INTERNAL. Use Category.tags.count() instead.
        "prototype$__count__tags": {
          url: urlBase + "/categories/:id/tags/count",
          method: "GET"
        },

        // INTERNAL. Use Category.adverts() instead.
        "prototype$__get__adverts": {
          isArray: true,
          url: urlBase + "/categories/:id/adverts",
          method: "GET"
        },

        // INTERNAL. Use Category.adverts.create() instead.
        "prototype$__create__adverts": {
          url: urlBase + "/categories/:id/adverts",
          method: "POST"
        },

        // INTERNAL. Use Category.adverts.destroyAll() instead.
        "prototype$__delete__adverts": {
          url: urlBase + "/categories/:id/adverts",
          method: "DELETE"
        },

        // INTERNAL. Use Category.adverts.count() instead.
        "prototype$__count__adverts": {
          url: urlBase + "/categories/:id/adverts/count",
          method: "GET"
        },

        // INTERNAL. Use Category.cities() instead.
        "prototype$__get__cities": {
          isArray: true,
          url: urlBase + "/categories/:id/cities",
          method: "GET"
        },

        // INTERNAL. Use Category.cities.create() instead.
        "prototype$__create__cities": {
          url: urlBase + "/categories/:id/cities",
          method: "POST"
        },

        // INTERNAL. Use Category.cities.destroyAll() instead.
        "prototype$__delete__cities": {
          url: urlBase + "/categories/:id/cities",
          method: "DELETE"
        },

        // INTERNAL. Use Category.cities.count() instead.
        "prototype$__count__cities": {
          url: urlBase + "/categories/:id/cities/count",
          method: "GET"
        },

        // INTERNAL. Use Category.products() instead.
        "prototype$__get__products": {
          isArray: true,
          url: urlBase + "/categories/:id/products",
          method: "GET"
        },

        // INTERNAL. Use Category.products.create() instead.
        "prototype$__create__products": {
          url: urlBase + "/categories/:id/products",
          method: "POST"
        },

        // INTERNAL. Use Category.products.destroyAll() instead.
        "prototype$__delete__products": {
          url: urlBase + "/categories/:id/products",
          method: "DELETE"
        },

        // INTERNAL. Use Category.products.count() instead.
        "prototype$__count__products": {
          url: urlBase + "/categories/:id/products/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#create
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/categories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#createMany
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/categories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#upsert
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/categories",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#exists
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/categories/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#findById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/categories/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#find
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/categories",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#findOne
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/categories/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#updateAll
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/categories/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#deleteById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/categories/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#count
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/categories/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#prototype$updateAttributes
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/categories/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#createChangeStream
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/categories/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#activeEntities
         * @methodOf lbServices.Category
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{string}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `entities` – `{*=}` -
         */
        "activeEntities": {
          url: urlBase + "/categories/:id/entities/active",
          method: "GET"
        },

        // INTERNAL. Use Category.subcategories.findById() instead.
        "::findById::category::subcategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/subcategories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.subcategories.destroyById() instead.
        "::destroyById::category::subcategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/subcategories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.subcategories.updateById() instead.
        "::updateById::category::subcategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/subcategories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.subcategories() instead.
        "::get::category::subcategories": {
          isArray: true,
          url: urlBase + "/categories/:id/subcategories",
          method: "GET"
        },

        // INTERNAL. Use Category.subcategories.create() instead.
        "::create::category::subcategories": {
          url: urlBase + "/categories/:id/subcategories",
          method: "POST"
        },

        // INTERNAL. Use Category.subcategories.createMany() instead.
        "::createMany::category::subcategories": {
          isArray: true,
          url: urlBase + "/categories/:id/subcategories",
          method: "POST"
        },

        // INTERNAL. Use Category.subcategories.destroyAll() instead.
        "::delete::category::subcategories": {
          url: urlBase + "/categories/:id/subcategories",
          method: "DELETE"
        },

        // INTERNAL. Use Category.subcategories.count() instead.
        "::count::category::subcategories": {
          url: urlBase + "/categories/:id/subcategories/count",
          method: "GET"
        },

        // INTERNAL. Use Entity.categories.findById() instead.
        "::findById::entity::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/categories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Entity.categories.destroyById() instead.
        "::destroyById::entity::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/categories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.categories.updateById() instead.
        "::updateById::entity::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/categories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entity.categories.link() instead.
        "::link::entity::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/categories/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entity.categories.unlink() instead.
        "::unlink::entity::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/categories/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.categories.exists() instead.
        "::exists::entity::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/categories/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Entity.categories() instead.
        "::get::entity::categories": {
          isArray: true,
          url: urlBase + "/entities/:id/categories",
          method: "GET"
        },

        // INTERNAL. Use Entity.categories.create() instead.
        "::create::entity::categories": {
          url: urlBase + "/entities/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use Entity.categories.createMany() instead.
        "::createMany::entity::categories": {
          isArray: true,
          url: urlBase + "/entities/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use Entity.categories.destroyAll() instead.
        "::delete::entity::categories": {
          url: urlBase + "/entities/:id/categories",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.categories.count() instead.
        "::count::entity::categories": {
          url: urlBase + "/entities/:id/categories/count",
          method: "GET"
        },

        // INTERNAL. Use Tag.categories.findById() instead.
        "::findById::tag::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/categories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Tag.categories.destroyById() instead.
        "::destroyById::tag::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/categories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.categories.updateById() instead.
        "::updateById::tag::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/categories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.categories.link() instead.
        "::link::tag::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/categories/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.categories.unlink() instead.
        "::unlink::tag::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/categories/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.categories.exists() instead.
        "::exists::tag::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/categories/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Tag.categories() instead.
        "::get::tag::categories": {
          isArray: true,
          url: urlBase + "/tags/:id/categories",
          method: "GET"
        },

        // INTERNAL. Use Tag.categories.create() instead.
        "::create::tag::categories": {
          url: urlBase + "/tags/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use Tag.categories.createMany() instead.
        "::createMany::tag::categories": {
          isArray: true,
          url: urlBase + "/tags/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use Tag.categories.destroyAll() instead.
        "::delete::tag::categories": {
          url: urlBase + "/tags/:id/categories",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.categories.count() instead.
        "::count::tag::categories": {
          url: urlBase + "/tags/:id/categories/count",
          method: "GET"
        },

        // INTERNAL. Use Advert.categories.findById() instead.
        "::findById::advert::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/adverts/:id/categories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Advert.categories.destroyById() instead.
        "::destroyById::advert::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/adverts/:id/categories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Advert.categories.updateById() instead.
        "::updateById::advert::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/adverts/:id/categories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Advert.categories.link() instead.
        "::link::advert::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/adverts/:id/categories/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Advert.categories.unlink() instead.
        "::unlink::advert::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/adverts/:id/categories/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Advert.categories.exists() instead.
        "::exists::advert::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/adverts/:id/categories/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Advert.categories() instead.
        "::get::advert::categories": {
          isArray: true,
          url: urlBase + "/adverts/:id/categories",
          method: "GET"
        },

        // INTERNAL. Use Advert.categories.create() instead.
        "::create::advert::categories": {
          url: urlBase + "/adverts/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use Advert.categories.createMany() instead.
        "::createMany::advert::categories": {
          isArray: true,
          url: urlBase + "/adverts/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use Advert.categories.destroyAll() instead.
        "::delete::advert::categories": {
          url: urlBase + "/adverts/:id/categories",
          method: "DELETE"
        },

        // INTERNAL. Use Advert.categories.count() instead.
        "::count::advert::categories": {
          url: urlBase + "/adverts/:id/categories/count",
          method: "GET"
        },

        // INTERNAL. Use City.categories.findById() instead.
        "::findById::city::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/categories/:fk",
          method: "GET"
        },

        // INTERNAL. Use City.categories.destroyById() instead.
        "::destroyById::city::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/categories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use City.categories.updateById() instead.
        "::updateById::city::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/categories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use City.categories.link() instead.
        "::link::city::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/categories/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use City.categories.unlink() instead.
        "::unlink::city::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/categories/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use City.categories.exists() instead.
        "::exists::city::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/categories/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use City.categories() instead.
        "::get::city::categories": {
          isArray: true,
          url: urlBase + "/cities/:id/categories",
          method: "GET"
        },

        // INTERNAL. Use City.categories.create() instead.
        "::create::city::categories": {
          url: urlBase + "/cities/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use City.categories.createMany() instead.
        "::createMany::city::categories": {
          isArray: true,
          url: urlBase + "/cities/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use City.categories.destroyAll() instead.
        "::delete::city::categories": {
          url: urlBase + "/cities/:id/categories",
          method: "DELETE"
        },

        // INTERNAL. Use City.categories.count() instead.
        "::count::city::categories": {
          url: urlBase + "/cities/:id/categories/count",
          method: "GET"
        },

        // INTERNAL. Use Product.categories.findById() instead.
        "::findById::product::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/categories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Product.categories.destroyById() instead.
        "::destroyById::product::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/categories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Product.categories.updateById() instead.
        "::updateById::product::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/categories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.categories.link() instead.
        "::link::product::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/categories/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.categories.unlink() instead.
        "::unlink::product::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/categories/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Product.categories.exists() instead.
        "::exists::product::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/categories/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Product.categories() instead.
        "::get::product::categories": {
          isArray: true,
          url: urlBase + "/products/:id/categories",
          method: "GET"
        },

        // INTERNAL. Use Product.categories.create() instead.
        "::create::product::categories": {
          url: urlBase + "/products/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use Product.categories.createMany() instead.
        "::createMany::product::categories": {
          isArray: true,
          url: urlBase + "/products/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use Product.categories.destroyAll() instead.
        "::delete::product::categories": {
          url: urlBase + "/products/:id/categories",
          method: "DELETE"
        },

        // INTERNAL. Use Product.categories.count() instead.
        "::count::product::categories": {
          url: urlBase + "/products/:id/categories/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Category#updateOrCreate
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Category#update
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Category#destroyById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Category#removeById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Category#modelName
    * @propertyOf lbServices.Category
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Category`.
    */
    R.modelName = "Category";

    /**
     * @ngdoc object
     * @name lbServices.Category.subcategories
     * @header lbServices.Category.subcategories
     * @object
     * @description
     *
     * The object `Category.subcategories` groups methods
     * manipulating `Category` instances related to `Category`.
     *
     * Call {@link lbServices.Category#subcategories Category.subcategories()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Category#subcategories
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Queries subcategories of category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.subcategories = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::category::subcategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.subcategories#count
         * @methodOf lbServices.Category.subcategories
         *
         * @description
         *
         * Counts subcategories of category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.subcategories.count = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::count::category::subcategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.subcategories#create
         * @methodOf lbServices.Category.subcategories
         *
         * @description
         *
         * Creates a new instance in subcategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.subcategories.create = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::create::category::subcategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.subcategories#createMany
         * @methodOf lbServices.Category.subcategories
         *
         * @description
         *
         * Creates a new instance in subcategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.subcategories.createMany = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::createMany::category::subcategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.subcategories#destroyAll
         * @methodOf lbServices.Category.subcategories
         *
         * @description
         *
         * Deletes all subcategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.subcategories.destroyAll = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::delete::category::subcategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.subcategories#destroyById
         * @methodOf lbServices.Category.subcategories
         *
         * @description
         *
         * Delete a related item by id for subcategories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subcategories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.subcategories.destroyById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::destroyById::category::subcategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.subcategories#findById
         * @methodOf lbServices.Category.subcategories
         *
         * @description
         *
         * Find a related item by id for subcategories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subcategories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.subcategories.findById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::findById::category::subcategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.subcategories#updateById
         * @methodOf lbServices.Category.subcategories
         *
         * @description
         *
         * Update a related item by id for subcategories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for subcategories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.subcategories.updateById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::updateById::category::subcategories"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Category.entities
     * @header lbServices.Category.entities
     * @object
     * @description
     *
     * The object `Category.entities` groups methods
     * manipulating `Entity` instances related to `Category`.
     *
     * Call {@link lbServices.Category#entities Category.entities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Category#entities
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Queries entities of category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::get::category::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.entities#count
         * @methodOf lbServices.Category.entities
         *
         * @description
         *
         * Counts entities of category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.entities.count = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::count::category::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.entities#create
         * @methodOf lbServices.Category.entities
         *
         * @description
         *
         * Creates a new instance in entities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities.create = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::create::category::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.entities#createMany
         * @methodOf lbServices.Category.entities
         *
         * @description
         *
         * Creates a new instance in entities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities.createMany = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::createMany::category::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.entities#destroyAll
         * @methodOf lbServices.Category.entities
         *
         * @description
         *
         * Deletes all entities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.entities.destroyAll = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::delete::category::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.entities#destroyById
         * @methodOf lbServices.Category.entities
         *
         * @description
         *
         * Delete a related item by id for entities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.entities.destroyById = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::destroyById::category::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.entities#exists
         * @methodOf lbServices.Category.entities
         *
         * @description
         *
         * Check the existence of entities relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities.exists = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::exists::category::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.entities#findById
         * @methodOf lbServices.Category.entities
         *
         * @description
         *
         * Find a related item by id for entities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities.findById = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::findById::category::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.entities#link
         * @methodOf lbServices.Category.entities
         *
         * @description
         *
         * Add a related item by id for entities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities.link = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::link::category::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.entities#unlink
         * @methodOf lbServices.Category.entities
         *
         * @description
         *
         * Remove the entities relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.entities.unlink = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::unlink::category::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.entities#updateById
         * @methodOf lbServices.Category.entities
         *
         * @description
         *
         * Update a related item by id for entities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities.updateById = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::updateById::category::entities"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Category.tags
     * @header lbServices.Category.tags
     * @object
     * @description
     *
     * The object `Category.tags` groups methods
     * manipulating `Tag` instances related to `Category`.
     *
     * Call {@link lbServices.Category#tags Category.tags()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Category#tags
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Queries tags of category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::get::category::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.tags#count
         * @methodOf lbServices.Category.tags
         *
         * @description
         *
         * Counts tags of category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.tags.count = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::count::category::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.tags#create
         * @methodOf lbServices.Category.tags
         *
         * @description
         *
         * Creates a new instance in tags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.create = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::create::category::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.tags#createMany
         * @methodOf lbServices.Category.tags
         *
         * @description
         *
         * Creates a new instance in tags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.createMany = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::createMany::category::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.tags#destroyAll
         * @methodOf lbServices.Category.tags
         *
         * @description
         *
         * Deletes all tags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tags.destroyAll = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::delete::category::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.tags#destroyById
         * @methodOf lbServices.Category.tags
         *
         * @description
         *
         * Delete a related item by id for tags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tags.destroyById = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::destroyById::category::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.tags#exists
         * @methodOf lbServices.Category.tags
         *
         * @description
         *
         * Check the existence of tags relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.exists = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::exists::category::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.tags#findById
         * @methodOf lbServices.Category.tags
         *
         * @description
         *
         * Find a related item by id for tags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.findById = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::findById::category::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.tags#link
         * @methodOf lbServices.Category.tags
         *
         * @description
         *
         * Add a related item by id for tags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.link = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::link::category::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.tags#unlink
         * @methodOf lbServices.Category.tags
         *
         * @description
         *
         * Remove the tags relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tags.unlink = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::unlink::category::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.tags#updateById
         * @methodOf lbServices.Category.tags
         *
         * @description
         *
         * Update a related item by id for tags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.updateById = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::updateById::category::tags"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Category.adverts
     * @header lbServices.Category.adverts
     * @object
     * @description
     *
     * The object `Category.adverts` groups methods
     * manipulating `Advert` instances related to `Category`.
     *
     * Call {@link lbServices.Category#adverts Category.adverts()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Category#adverts
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Queries adverts of category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        R.adverts = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::get::category::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.adverts#count
         * @methodOf lbServices.Category.adverts
         *
         * @description
         *
         * Counts adverts of category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.adverts.count = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::count::category::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.adverts#create
         * @methodOf lbServices.Category.adverts
         *
         * @description
         *
         * Creates a new instance in adverts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        R.adverts.create = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::create::category::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.adverts#createMany
         * @methodOf lbServices.Category.adverts
         *
         * @description
         *
         * Creates a new instance in adverts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        R.adverts.createMany = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::createMany::category::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.adverts#destroyAll
         * @methodOf lbServices.Category.adverts
         *
         * @description
         *
         * Deletes all adverts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.adverts.destroyAll = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::delete::category::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.adverts#destroyById
         * @methodOf lbServices.Category.adverts
         *
         * @description
         *
         * Delete a related item by id for adverts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for adverts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.adverts.destroyById = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::destroyById::category::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.adverts#exists
         * @methodOf lbServices.Category.adverts
         *
         * @description
         *
         * Check the existence of adverts relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for adverts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        R.adverts.exists = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::exists::category::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.adverts#findById
         * @methodOf lbServices.Category.adverts
         *
         * @description
         *
         * Find a related item by id for adverts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for adverts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        R.adverts.findById = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::findById::category::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.adverts#link
         * @methodOf lbServices.Category.adverts
         *
         * @description
         *
         * Add a related item by id for adverts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for adverts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        R.adverts.link = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::link::category::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.adverts#unlink
         * @methodOf lbServices.Category.adverts
         *
         * @description
         *
         * Remove the adverts relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for adverts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.adverts.unlink = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::unlink::category::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.adverts#updateById
         * @methodOf lbServices.Category.adverts
         *
         * @description
         *
         * Update a related item by id for adverts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for adverts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        R.adverts.updateById = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::updateById::category::adverts"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Category.subdomain
     * @header lbServices.Category.subdomain
     * @object
     * @description
     *
     * The object `Category.subdomain` groups methods
     * manipulating `Subdomain` instances related to `Category`.
     *
     * Call {@link lbServices.Category#subdomain Category.subdomain()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Category#subdomain
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Fetches hasOne relation subdomain.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subdomain` object.)
         * </em>
         */
        R.subdomain = function() {
          var TargetResource = $injector.get("Subdomain");
          var action = TargetResource["::get::category::subdomain"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.subdomain#create
         * @methodOf lbServices.Category.subdomain
         *
         * @description
         *
         * Creates a new instance in subdomain of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subdomain` object.)
         * </em>
         */
        R.subdomain.create = function() {
          var TargetResource = $injector.get("Subdomain");
          var action = TargetResource["::create::category::subdomain"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.subdomain#createMany
         * @methodOf lbServices.Category.subdomain
         *
         * @description
         *
         * Creates a new instance in subdomain of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subdomain` object.)
         * </em>
         */
        R.subdomain.createMany = function() {
          var TargetResource = $injector.get("Subdomain");
          var action = TargetResource["::createMany::category::subdomain"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.subdomain#destroy
         * @methodOf lbServices.Category.subdomain
         *
         * @description
         *
         * Deletes subdomain of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.subdomain.destroy = function() {
          var TargetResource = $injector.get("Subdomain");
          var action = TargetResource["::destroy::category::subdomain"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.subdomain#update
         * @methodOf lbServices.Category.subdomain
         *
         * @description
         *
         * Update subdomain of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subdomain` object.)
         * </em>
         */
        R.subdomain.update = function() {
          var TargetResource = $injector.get("Subdomain");
          var action = TargetResource["::update::category::subdomain"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Category.cities
     * @header lbServices.Category.cities
     * @object
     * @description
     *
     * The object `Category.cities` groups methods
     * manipulating `City` instances related to `Category`.
     *
     * Call {@link lbServices.Category#cities Category.cities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Category#cities
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Queries cities of category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::get::category::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.cities#count
         * @methodOf lbServices.Category.cities
         *
         * @description
         *
         * Counts cities of category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.cities.count = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::count::category::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.cities#create
         * @methodOf lbServices.Category.cities
         *
         * @description
         *
         * Creates a new instance in cities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.create = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::create::category::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.cities#createMany
         * @methodOf lbServices.Category.cities
         *
         * @description
         *
         * Creates a new instance in cities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.createMany = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::createMany::category::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.cities#destroyAll
         * @methodOf lbServices.Category.cities
         *
         * @description
         *
         * Deletes all cities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cities.destroyAll = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::delete::category::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.cities#destroyById
         * @methodOf lbServices.Category.cities
         *
         * @description
         *
         * Delete a related item by id for cities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cities.destroyById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::destroyById::category::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.cities#exists
         * @methodOf lbServices.Category.cities
         *
         * @description
         *
         * Check the existence of cities relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.exists = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::exists::category::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.cities#findById
         * @methodOf lbServices.Category.cities
         *
         * @description
         *
         * Find a related item by id for cities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.findById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::findById::category::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.cities#link
         * @methodOf lbServices.Category.cities
         *
         * @description
         *
         * Add a related item by id for cities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.link = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::link::category::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.cities#unlink
         * @methodOf lbServices.Category.cities
         *
         * @description
         *
         * Remove the cities relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cities.unlink = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::unlink::category::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.cities#updateById
         * @methodOf lbServices.Category.cities
         *
         * @description
         *
         * Update a related item by id for cities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.updateById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::updateById::category::cities"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Category.products
     * @header lbServices.Category.products
     * @object
     * @description
     *
     * The object `Category.products` groups methods
     * manipulating `Product` instances related to `Category`.
     *
     * Call {@link lbServices.Category#products Category.products()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Category#products
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Queries products of category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R.products = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::get::category::products"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.products#count
         * @methodOf lbServices.Category.products
         *
         * @description
         *
         * Counts products of category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.products.count = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::count::category::products"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.products#create
         * @methodOf lbServices.Category.products
         *
         * @description
         *
         * Creates a new instance in products of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R.products.create = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::create::category::products"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.products#createMany
         * @methodOf lbServices.Category.products
         *
         * @description
         *
         * Creates a new instance in products of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R.products.createMany = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::createMany::category::products"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.products#destroyAll
         * @methodOf lbServices.Category.products
         *
         * @description
         *
         * Deletes all products of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.products.destroyAll = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::delete::category::products"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.products#destroyById
         * @methodOf lbServices.Category.products
         *
         * @description
         *
         * Delete a related item by id for products.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for products
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.products.destroyById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::destroyById::category::products"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.products#exists
         * @methodOf lbServices.Category.products
         *
         * @description
         *
         * Check the existence of products relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for products
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R.products.exists = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::exists::category::products"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.products#findById
         * @methodOf lbServices.Category.products
         *
         * @description
         *
         * Find a related item by id for products.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for products
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R.products.findById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::findById::category::products"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.products#link
         * @methodOf lbServices.Category.products
         *
         * @description
         *
         * Add a related item by id for products.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for products
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R.products.link = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::link::category::products"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.products#unlink
         * @methodOf lbServices.Category.products
         *
         * @description
         *
         * Remove the products relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for products
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.products.unlink = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::unlink::category::products"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.products#updateById
         * @methodOf lbServices.Category.products
         *
         * @description
         *
         * Update a related item by id for products.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for products
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R.products.updateById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::updateById::category::products"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Entity
 * @header lbServices.Entity
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Entity` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Entity",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/entities/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Entity.categories.findById() instead.
        "prototype$__findById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/categories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Entity.categories.destroyById() instead.
        "prototype$__destroyById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/categories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.categories.updateById() instead.
        "prototype$__updateById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/categories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entity.categories.link() instead.
        "prototype$__link__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/categories/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entity.categories.unlink() instead.
        "prototype$__unlink__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/categories/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.categories.exists() instead.
        "prototype$__exists__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/categories/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Entity.tags.findById() instead.
        "prototype$__findById__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/tags/:fk",
          method: "GET"
        },

        // INTERNAL. Use Entity.tags.destroyById() instead.
        "prototype$__destroyById__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/tags/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.tags.updateById() instead.
        "prototype$__updateById__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/tags/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entity.tags.link() instead.
        "prototype$__link__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/tags/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entity.tags.unlink() instead.
        "prototype$__unlink__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/tags/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.tags.exists() instead.
        "prototype$__exists__tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/tags/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Entity.adverts.findById() instead.
        "prototype$__findById__adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/adverts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Entity.adverts.destroyById() instead.
        "prototype$__destroyById__adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/adverts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.adverts.updateById() instead.
        "prototype$__updateById__adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/adverts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entity.owners.findById() instead.
        "prototype$__findById__owners": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/owners/:fk",
          method: "GET"
        },

        // INTERNAL. Use Entity.owners.destroyById() instead.
        "prototype$__destroyById__owners": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/owners/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.owners.updateById() instead.
        "prototype$__updateById__owners": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/owners/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entity.subdomain() instead.
        "prototype$__get__subdomain": {
          url: urlBase + "/entities/:id/subdomain",
          method: "GET"
        },

        // INTERNAL. Use Entity.subdomain.create() instead.
        "prototype$__create__subdomain": {
          url: urlBase + "/entities/:id/subdomain",
          method: "POST"
        },

        // INTERNAL. Use Entity.subdomain.update() instead.
        "prototype$__update__subdomain": {
          url: urlBase + "/entities/:id/subdomain",
          method: "PUT"
        },

        // INTERNAL. Use Entity.subdomain.destroy() instead.
        "prototype$__destroy__subdomain": {
          url: urlBase + "/entities/:id/subdomain",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.city() instead.
        "prototype$__get__city": {
          url: urlBase + "/entities/:id/city",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#prototype$__findById__ranks
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Find a related item by id for ranks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ranks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        "prototype$__findById__ranks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/ranks/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#prototype$__destroyById__ranks
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Delete a related item by id for ranks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ranks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__ranks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/ranks/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#prototype$__updateById__ranks
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Update a related item by id for ranks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ranks
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        "prototype$__updateById__ranks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/ranks/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#prototype$__findById__likes
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Find a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        "prototype$__findById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/likes/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#prototype$__destroyById__likes
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Delete a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/likes/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#prototype$__updateById__likes
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Update a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        "prototype$__updateById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/likes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entity.clients.findById() instead.
        "prototype$__findById__clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/clients/:fk",
          method: "GET"
        },

        // INTERNAL. Use Entity.clients.destroyById() instead.
        "prototype$__destroyById__clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/clients/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.clients.updateById() instead.
        "prototype$__updateById__clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/clients/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entity.clients.link() instead.
        "prototype$__link__clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/clients/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entity.clients.unlink() instead.
        "prototype$__unlink__clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/clients/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.clients.exists() instead.
        "prototype$__exists__clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/clients/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Entity.hours.findById() instead.
        "prototype$__findById__hours": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/hours/:fk",
          method: "GET"
        },

        // INTERNAL. Use Entity.hours.destroyById() instead.
        "prototype$__destroyById__hours": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/hours/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.hours.updateById() instead.
        "prototype$__updateById__hours": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/hours/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entity.subscription() instead.
        "prototype$__get__subscription": {
          url: urlBase + "/entities/:id/subscription",
          method: "GET"
        },

        // INTERNAL. Use Entity.categories() instead.
        "prototype$__get__categories": {
          isArray: true,
          url: urlBase + "/entities/:id/categories",
          method: "GET"
        },

        // INTERNAL. Use Entity.categories.create() instead.
        "prototype$__create__categories": {
          url: urlBase + "/entities/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use Entity.categories.destroyAll() instead.
        "prototype$__delete__categories": {
          url: urlBase + "/entities/:id/categories",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.categories.count() instead.
        "prototype$__count__categories": {
          url: urlBase + "/entities/:id/categories/count",
          method: "GET"
        },

        // INTERNAL. Use Entity.tags() instead.
        "prototype$__get__tags": {
          isArray: true,
          url: urlBase + "/entities/:id/tags",
          method: "GET"
        },

        // INTERNAL. Use Entity.tags.create() instead.
        "prototype$__create__tags": {
          url: urlBase + "/entities/:id/tags",
          method: "POST"
        },

        // INTERNAL. Use Entity.tags.destroyAll() instead.
        "prototype$__delete__tags": {
          url: urlBase + "/entities/:id/tags",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.tags.count() instead.
        "prototype$__count__tags": {
          url: urlBase + "/entities/:id/tags/count",
          method: "GET"
        },

        // INTERNAL. Use Entity.adverts() instead.
        "prototype$__get__adverts": {
          isArray: true,
          url: urlBase + "/entities/:id/adverts",
          method: "GET"
        },

        // INTERNAL. Use Entity.adverts.create() instead.
        "prototype$__create__adverts": {
          url: urlBase + "/entities/:id/adverts",
          method: "POST"
        },

        // INTERNAL. Use Entity.adverts.destroyAll() instead.
        "prototype$__delete__adverts": {
          url: urlBase + "/entities/:id/adverts",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.adverts.count() instead.
        "prototype$__count__adverts": {
          url: urlBase + "/entities/:id/adverts/count",
          method: "GET"
        },

        // INTERNAL. Use Entity.owners() instead.
        "prototype$__get__owners": {
          isArray: true,
          url: urlBase + "/entities/:id/owners",
          method: "GET"
        },

        // INTERNAL. Use Entity.owners.create() instead.
        "prototype$__create__owners": {
          url: urlBase + "/entities/:id/owners",
          method: "POST"
        },

        // INTERNAL. Use Entity.owners.destroyAll() instead.
        "prototype$__delete__owners": {
          url: urlBase + "/entities/:id/owners",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.owners.count() instead.
        "prototype$__count__owners": {
          url: urlBase + "/entities/:id/owners/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#prototype$__get__ranks
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Queries ranks of entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        "prototype$__get__ranks": {
          isArray: true,
          url: urlBase + "/entities/:id/ranks",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#prototype$__create__ranks
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Creates a new instance in ranks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        "prototype$__create__ranks": {
          url: urlBase + "/entities/:id/ranks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#prototype$__delete__ranks
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Deletes all ranks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__ranks": {
          url: urlBase + "/entities/:id/ranks",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#prototype$__count__ranks
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Counts ranks of entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__ranks": {
          url: urlBase + "/entities/:id/ranks/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#prototype$__get__likes
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Queries likes of entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        "prototype$__get__likes": {
          isArray: true,
          url: urlBase + "/entities/:id/likes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#prototype$__create__likes
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        "prototype$__create__likes": {
          url: urlBase + "/entities/:id/likes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#prototype$__delete__likes
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Deletes all likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__likes": {
          url: urlBase + "/entities/:id/likes",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#prototype$__count__likes
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Counts likes of entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__likes": {
          url: urlBase + "/entities/:id/likes/count",
          method: "GET"
        },

        // INTERNAL. Use Entity.clients() instead.
        "prototype$__get__clients": {
          isArray: true,
          url: urlBase + "/entities/:id/clients",
          method: "GET"
        },

        // INTERNAL. Use Entity.clients.create() instead.
        "prototype$__create__clients": {
          url: urlBase + "/entities/:id/clients",
          method: "POST"
        },

        // INTERNAL. Use Entity.clients.destroyAll() instead.
        "prototype$__delete__clients": {
          url: urlBase + "/entities/:id/clients",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.clients.count() instead.
        "prototype$__count__clients": {
          url: urlBase + "/entities/:id/clients/count",
          method: "GET"
        },

        // INTERNAL. Use Entity.hours() instead.
        "prototype$__get__hours": {
          isArray: true,
          url: urlBase + "/entities/:id/hours",
          method: "GET"
        },

        // INTERNAL. Use Entity.hours.create() instead.
        "prototype$__create__hours": {
          url: urlBase + "/entities/:id/hours",
          method: "POST"
        },

        // INTERNAL. Use Entity.hours.destroyAll() instead.
        "prototype$__delete__hours": {
          url: urlBase + "/entities/:id/hours",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.hours.count() instead.
        "prototype$__count__hours": {
          url: urlBase + "/entities/:id/hours/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#create
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/entities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#createMany
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/entities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#upsert
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/entities",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#exists
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/entities/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#findById
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/entities/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#find
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/entities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#findOne
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/entities/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#updateAll
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/entities/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#deleteById
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/entities/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#count
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/entities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#prototype$updateAttributes
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/entities/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#createChangeStream
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/entities/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#activation
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `entityId` – `{string=}` -
         *
         *  - `activate` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `success` – `{boolean=}` -
         */
        "activation": {
          url: urlBase + "/entities/activation",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entity#search
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `like` – `{string=}` -
         *
         *  - `cityId` – `{string=}` -
         *
         *  - `usuarioId` – `{string=}` -
         *
         *  - `adverts` – `{boolean=}` -
         *
         *  - `products` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `results` – `{*=}` -
         */
        "search": {
          url: urlBase + "/entities/search",
          method: "GET"
        },

        // INTERNAL. Use Category.entities.findById() instead.
        "::findById::category::entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/entities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.entities.destroyById() instead.
        "::destroyById::category::entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/entities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.entities.updateById() instead.
        "::updateById::category::entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/entities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.entities.link() instead.
        "::link::category::entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/entities/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.entities.unlink() instead.
        "::unlink::category::entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/entities/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.entities.exists() instead.
        "::exists::category::entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/entities/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Category.entities() instead.
        "::get::category::entities": {
          isArray: true,
          url: urlBase + "/categories/:id/entities",
          method: "GET"
        },

        // INTERNAL. Use Category.entities.create() instead.
        "::create::category::entities": {
          url: urlBase + "/categories/:id/entities",
          method: "POST"
        },

        // INTERNAL. Use Category.entities.createMany() instead.
        "::createMany::category::entities": {
          isArray: true,
          url: urlBase + "/categories/:id/entities",
          method: "POST"
        },

        // INTERNAL. Use Category.entities.destroyAll() instead.
        "::delete::category::entities": {
          url: urlBase + "/categories/:id/entities",
          method: "DELETE"
        },

        // INTERNAL. Use Category.entities.count() instead.
        "::count::category::entities": {
          url: urlBase + "/categories/:id/entities/count",
          method: "GET"
        },

        // INTERNAL. Use Tag.entities.findById() instead.
        "::findById::tag::entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/entities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Tag.entities.destroyById() instead.
        "::destroyById::tag::entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/entities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.entities.updateById() instead.
        "::updateById::tag::entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/entities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.entities.link() instead.
        "::link::tag::entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/entities/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.entities.unlink() instead.
        "::unlink::tag::entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/entities/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.entities.exists() instead.
        "::exists::tag::entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/entities/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Tag.entities() instead.
        "::get::tag::entities": {
          isArray: true,
          url: urlBase + "/tags/:id/entities",
          method: "GET"
        },

        // INTERNAL. Use Tag.entities.create() instead.
        "::create::tag::entities": {
          url: urlBase + "/tags/:id/entities",
          method: "POST"
        },

        // INTERNAL. Use Tag.entities.createMany() instead.
        "::createMany::tag::entities": {
          isArray: true,
          url: urlBase + "/tags/:id/entities",
          method: "POST"
        },

        // INTERNAL. Use Tag.entities.destroyAll() instead.
        "::delete::tag::entities": {
          url: urlBase + "/tags/:id/entities",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.entities.count() instead.
        "::count::tag::entities": {
          url: urlBase + "/tags/:id/entities/count",
          method: "GET"
        },

        // INTERNAL. Use Advert.entity() instead.
        "::get::advert::entity": {
          url: urlBase + "/adverts/:id/entity",
          method: "GET"
        },

        // INTERNAL. Use Usuario.entity() instead.
        "::get::usuario::entity": {
          url: urlBase + "/usuarios/:id/entity",
          method: "GET"
        },

        // INTERNAL. Use Usuario.sellers.findById() instead.
        "::findById::usuario::sellers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/sellers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Usuario.sellers.destroyById() instead.
        "::destroyById::usuario::sellers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/sellers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Usuario.sellers.updateById() instead.
        "::updateById::usuario::sellers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/sellers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Usuario.sellers.link() instead.
        "::link::usuario::sellers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/sellers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Usuario.sellers.unlink() instead.
        "::unlink::usuario::sellers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/sellers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Usuario.sellers.exists() instead.
        "::exists::usuario::sellers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/sellers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Usuario.sellers() instead.
        "::get::usuario::sellers": {
          isArray: true,
          url: urlBase + "/usuarios/:id/sellers",
          method: "GET"
        },

        // INTERNAL. Use Usuario.sellers.create() instead.
        "::create::usuario::sellers": {
          url: urlBase + "/usuarios/:id/sellers",
          method: "POST"
        },

        // INTERNAL. Use Usuario.sellers.createMany() instead.
        "::createMany::usuario::sellers": {
          isArray: true,
          url: urlBase + "/usuarios/:id/sellers",
          method: "POST"
        },

        // INTERNAL. Use Usuario.sellers.destroyAll() instead.
        "::delete::usuario::sellers": {
          url: urlBase + "/usuarios/:id/sellers",
          method: "DELETE"
        },

        // INTERNAL. Use Usuario.sellers.count() instead.
        "::count::usuario::sellers": {
          url: urlBase + "/usuarios/:id/sellers/count",
          method: "GET"
        },

        // INTERNAL. Use City.entities.findById() instead.
        "::findById::city::entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/entities/:fk",
          method: "GET"
        },

        // INTERNAL. Use City.entities.destroyById() instead.
        "::destroyById::city::entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/entities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use City.entities.updateById() instead.
        "::updateById::city::entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/entities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use City.entities() instead.
        "::get::city::entities": {
          isArray: true,
          url: urlBase + "/cities/:id/entities",
          method: "GET"
        },

        // INTERNAL. Use City.entities.create() instead.
        "::create::city::entities": {
          url: urlBase + "/cities/:id/entities",
          method: "POST"
        },

        // INTERNAL. Use City.entities.createMany() instead.
        "::createMany::city::entities": {
          isArray: true,
          url: urlBase + "/cities/:id/entities",
          method: "POST"
        },

        // INTERNAL. Use City.entities.destroyAll() instead.
        "::delete::city::entities": {
          url: urlBase + "/cities/:id/entities",
          method: "DELETE"
        },

        // INTERNAL. Use City.entities.count() instead.
        "::count::city::entities": {
          url: urlBase + "/cities/:id/entities/count",
          method: "GET"
        },

        // INTERNAL. Use Client.entity() instead.
        "::get::client::entity": {
          url: urlBase + "/clients/:id/entity",
          method: "GET"
        },

        // INTERNAL. Use Product.entity() instead.
        "::get::product::entity": {
          url: urlBase + "/products/:id/entity",
          method: "GET"
        },

        // INTERNAL. Use Horario.entity() instead.
        "::get::horario::entity": {
          url: urlBase + "/horarios/:id/entity",
          method: "GET"
        },

        // INTERNAL. Use Subscription.entities.findById() instead.
        "::findById::subscription::entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/subscriptions/:id/entities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Subscription.entities.destroyById() instead.
        "::destroyById::subscription::entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/subscriptions/:id/entities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Subscription.entities.updateById() instead.
        "::updateById::subscription::entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/subscriptions/:id/entities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Subscription.entities() instead.
        "::get::subscription::entities": {
          isArray: true,
          url: urlBase + "/subscriptions/:id/entities",
          method: "GET"
        },

        // INTERNAL. Use Subscription.entities.create() instead.
        "::create::subscription::entities": {
          url: urlBase + "/subscriptions/:id/entities",
          method: "POST"
        },

        // INTERNAL. Use Subscription.entities.createMany() instead.
        "::createMany::subscription::entities": {
          isArray: true,
          url: urlBase + "/subscriptions/:id/entities",
          method: "POST"
        },

        // INTERNAL. Use Subscription.entities.destroyAll() instead.
        "::delete::subscription::entities": {
          url: urlBase + "/subscriptions/:id/entities",
          method: "DELETE"
        },

        // INTERNAL. Use Subscription.entities.count() instead.
        "::count::subscription::entities": {
          url: urlBase + "/subscriptions/:id/entities/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Entity#updateOrCreate
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Entity#update
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Entity#destroyById
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Entity#removeById
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Entity#modelName
    * @propertyOf lbServices.Entity
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Entity`.
    */
    R.modelName = "Entity";

    /**
     * @ngdoc object
     * @name lbServices.Entity.categories
     * @header lbServices.Entity.categories
     * @object
     * @description
     *
     * The object `Entity.categories` groups methods
     * manipulating `Category` instances related to `Entity`.
     *
     * Call {@link lbServices.Entity#categories Entity.categories()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Entity#categories
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Queries categories of entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::entity::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.categories#count
         * @methodOf lbServices.Entity.categories
         *
         * @description
         *
         * Counts categories of entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.categories.count = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::count::entity::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.categories#create
         * @methodOf lbServices.Entity.categories
         *
         * @description
         *
         * Creates a new instance in categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.create = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::create::entity::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.categories#createMany
         * @methodOf lbServices.Entity.categories
         *
         * @description
         *
         * Creates a new instance in categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.createMany = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::createMany::entity::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.categories#destroyAll
         * @methodOf lbServices.Entity.categories
         *
         * @description
         *
         * Deletes all categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.destroyAll = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::delete::entity::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.categories#destroyById
         * @methodOf lbServices.Entity.categories
         *
         * @description
         *
         * Delete a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.destroyById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::destroyById::entity::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.categories#exists
         * @methodOf lbServices.Entity.categories
         *
         * @description
         *
         * Check the existence of categories relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.exists = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::exists::entity::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.categories#findById
         * @methodOf lbServices.Entity.categories
         *
         * @description
         *
         * Find a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.findById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::findById::entity::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.categories#link
         * @methodOf lbServices.Entity.categories
         *
         * @description
         *
         * Add a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.link = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::link::entity::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.categories#unlink
         * @methodOf lbServices.Entity.categories
         *
         * @description
         *
         * Remove the categories relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.unlink = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::unlink::entity::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.categories#updateById
         * @methodOf lbServices.Entity.categories
         *
         * @description
         *
         * Update a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.updateById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::updateById::entity::categories"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Entity.tags
     * @header lbServices.Entity.tags
     * @object
     * @description
     *
     * The object `Entity.tags` groups methods
     * manipulating `Tag` instances related to `Entity`.
     *
     * Call {@link lbServices.Entity#tags Entity.tags()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Entity#tags
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Queries tags of entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::get::entity::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.tags#count
         * @methodOf lbServices.Entity.tags
         *
         * @description
         *
         * Counts tags of entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.tags.count = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::count::entity::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.tags#create
         * @methodOf lbServices.Entity.tags
         *
         * @description
         *
         * Creates a new instance in tags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.create = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::create::entity::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.tags#createMany
         * @methodOf lbServices.Entity.tags
         *
         * @description
         *
         * Creates a new instance in tags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.createMany = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::createMany::entity::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.tags#destroyAll
         * @methodOf lbServices.Entity.tags
         *
         * @description
         *
         * Deletes all tags of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tags.destroyAll = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::delete::entity::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.tags#destroyById
         * @methodOf lbServices.Entity.tags
         *
         * @description
         *
         * Delete a related item by id for tags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tags.destroyById = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::destroyById::entity::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.tags#exists
         * @methodOf lbServices.Entity.tags
         *
         * @description
         *
         * Check the existence of tags relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.exists = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::exists::entity::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.tags#findById
         * @methodOf lbServices.Entity.tags
         *
         * @description
         *
         * Find a related item by id for tags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.findById = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::findById::entity::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.tags#link
         * @methodOf lbServices.Entity.tags
         *
         * @description
         *
         * Add a related item by id for tags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.link = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::link::entity::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.tags#unlink
         * @methodOf lbServices.Entity.tags
         *
         * @description
         *
         * Remove the tags relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tags.unlink = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::unlink::entity::tags"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.tags#updateById
         * @methodOf lbServices.Entity.tags
         *
         * @description
         *
         * Update a related item by id for tags.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tags
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R.tags.updateById = function() {
          var TargetResource = $injector.get("Tag");
          var action = TargetResource["::updateById::entity::tags"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Entity.adverts
     * @header lbServices.Entity.adverts
     * @object
     * @description
     *
     * The object `Entity.adverts` groups methods
     * manipulating `Advert` instances related to `Entity`.
     *
     * Call {@link lbServices.Entity#adverts Entity.adverts()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Entity#adverts
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Queries adverts of entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        R.adverts = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::get::entity::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.adverts#count
         * @methodOf lbServices.Entity.adverts
         *
         * @description
         *
         * Counts adverts of entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.adverts.count = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::count::entity::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.adverts#create
         * @methodOf lbServices.Entity.adverts
         *
         * @description
         *
         * Creates a new instance in adverts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        R.adverts.create = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::create::entity::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.adverts#createMany
         * @methodOf lbServices.Entity.adverts
         *
         * @description
         *
         * Creates a new instance in adverts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        R.adverts.createMany = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::createMany::entity::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.adverts#destroyAll
         * @methodOf lbServices.Entity.adverts
         *
         * @description
         *
         * Deletes all adverts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.adverts.destroyAll = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::delete::entity::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.adverts#destroyById
         * @methodOf lbServices.Entity.adverts
         *
         * @description
         *
         * Delete a related item by id for adverts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for adverts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.adverts.destroyById = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::destroyById::entity::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.adverts#findById
         * @methodOf lbServices.Entity.adverts
         *
         * @description
         *
         * Find a related item by id for adverts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for adverts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        R.adverts.findById = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::findById::entity::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.adverts#updateById
         * @methodOf lbServices.Entity.adverts
         *
         * @description
         *
         * Update a related item by id for adverts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for adverts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        R.adverts.updateById = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::updateById::entity::adverts"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Entity.owners
     * @header lbServices.Entity.owners
     * @object
     * @description
     *
     * The object `Entity.owners` groups methods
     * manipulating `Usuario` instances related to `Entity`.
     *
     * Call {@link lbServices.Entity#owners Entity.owners()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Entity#owners
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Queries owners of entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.owners = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::entity::owners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.owners#count
         * @methodOf lbServices.Entity.owners
         *
         * @description
         *
         * Counts owners of entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.owners.count = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::count::entity::owners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.owners#create
         * @methodOf lbServices.Entity.owners
         *
         * @description
         *
         * Creates a new instance in owners of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.owners.create = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::create::entity::owners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.owners#createMany
         * @methodOf lbServices.Entity.owners
         *
         * @description
         *
         * Creates a new instance in owners of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.owners.createMany = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::createMany::entity::owners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.owners#destroyAll
         * @methodOf lbServices.Entity.owners
         *
         * @description
         *
         * Deletes all owners of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.owners.destroyAll = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::delete::entity::owners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.owners#destroyById
         * @methodOf lbServices.Entity.owners
         *
         * @description
         *
         * Delete a related item by id for owners.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for owners
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.owners.destroyById = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::destroyById::entity::owners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.owners#findById
         * @methodOf lbServices.Entity.owners
         *
         * @description
         *
         * Find a related item by id for owners.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for owners
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.owners.findById = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::findById::entity::owners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.owners#updateById
         * @methodOf lbServices.Entity.owners
         *
         * @description
         *
         * Update a related item by id for owners.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for owners
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.owners.updateById = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::updateById::entity::owners"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Entity.subdomain
     * @header lbServices.Entity.subdomain
     * @object
     * @description
     *
     * The object `Entity.subdomain` groups methods
     * manipulating `Subdomain` instances related to `Entity`.
     *
     * Call {@link lbServices.Entity#subdomain Entity.subdomain()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Entity#subdomain
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Fetches hasOne relation subdomain.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subdomain` object.)
         * </em>
         */
        R.subdomain = function() {
          var TargetResource = $injector.get("Subdomain");
          var action = TargetResource["::get::entity::subdomain"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.subdomain#create
         * @methodOf lbServices.Entity.subdomain
         *
         * @description
         *
         * Creates a new instance in subdomain of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subdomain` object.)
         * </em>
         */
        R.subdomain.create = function() {
          var TargetResource = $injector.get("Subdomain");
          var action = TargetResource["::create::entity::subdomain"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.subdomain#createMany
         * @methodOf lbServices.Entity.subdomain
         *
         * @description
         *
         * Creates a new instance in subdomain of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subdomain` object.)
         * </em>
         */
        R.subdomain.createMany = function() {
          var TargetResource = $injector.get("Subdomain");
          var action = TargetResource["::createMany::entity::subdomain"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.subdomain#destroy
         * @methodOf lbServices.Entity.subdomain
         *
         * @description
         *
         * Deletes subdomain of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.subdomain.destroy = function() {
          var TargetResource = $injector.get("Subdomain");
          var action = TargetResource["::destroy::entity::subdomain"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.subdomain#update
         * @methodOf lbServices.Entity.subdomain
         *
         * @description
         *
         * Update subdomain of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subdomain` object.)
         * </em>
         */
        R.subdomain.update = function() {
          var TargetResource = $injector.get("Subdomain");
          var action = TargetResource["::update::entity::subdomain"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity#city
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Fetches belongsTo relation city.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.city = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::get::entity::city"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Entity.clients
     * @header lbServices.Entity.clients
     * @object
     * @description
     *
     * The object `Entity.clients` groups methods
     * manipulating `Usuario` instances related to `Entity`.
     *
     * Call {@link lbServices.Entity#clients Entity.clients()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Entity#clients
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Queries clients of entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.clients = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::entity::clients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.clients#count
         * @methodOf lbServices.Entity.clients
         *
         * @description
         *
         * Counts clients of entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.clients.count = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::count::entity::clients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.clients#create
         * @methodOf lbServices.Entity.clients
         *
         * @description
         *
         * Creates a new instance in clients of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.clients.create = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::create::entity::clients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.clients#createMany
         * @methodOf lbServices.Entity.clients
         *
         * @description
         *
         * Creates a new instance in clients of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.clients.createMany = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::createMany::entity::clients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.clients#destroyAll
         * @methodOf lbServices.Entity.clients
         *
         * @description
         *
         * Deletes all clients of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.clients.destroyAll = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::delete::entity::clients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.clients#destroyById
         * @methodOf lbServices.Entity.clients
         *
         * @description
         *
         * Delete a related item by id for clients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for clients
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.clients.destroyById = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::destroyById::entity::clients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.clients#exists
         * @methodOf lbServices.Entity.clients
         *
         * @description
         *
         * Check the existence of clients relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for clients
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.clients.exists = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::exists::entity::clients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.clients#findById
         * @methodOf lbServices.Entity.clients
         *
         * @description
         *
         * Find a related item by id for clients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for clients
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.clients.findById = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::findById::entity::clients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.clients#link
         * @methodOf lbServices.Entity.clients
         *
         * @description
         *
         * Add a related item by id for clients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for clients
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.clients.link = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::link::entity::clients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.clients#unlink
         * @methodOf lbServices.Entity.clients
         *
         * @description
         *
         * Remove the clients relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for clients
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.clients.unlink = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::unlink::entity::clients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.clients#updateById
         * @methodOf lbServices.Entity.clients
         *
         * @description
         *
         * Update a related item by id for clients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for clients
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.clients.updateById = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::updateById::entity::clients"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Entity.hours
     * @header lbServices.Entity.hours
     * @object
     * @description
     *
     * The object `Entity.hours` groups methods
     * manipulating `Horario` instances related to `Entity`.
     *
     * Call {@link lbServices.Entity#hours Entity.hours()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Entity#hours
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Queries hours of entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Horario` object.)
         * </em>
         */
        R.hours = function() {
          var TargetResource = $injector.get("Horario");
          var action = TargetResource["::get::entity::hours"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.hours#count
         * @methodOf lbServices.Entity.hours
         *
         * @description
         *
         * Counts hours of entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.hours.count = function() {
          var TargetResource = $injector.get("Horario");
          var action = TargetResource["::count::entity::hours"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.hours#create
         * @methodOf lbServices.Entity.hours
         *
         * @description
         *
         * Creates a new instance in hours of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Horario` object.)
         * </em>
         */
        R.hours.create = function() {
          var TargetResource = $injector.get("Horario");
          var action = TargetResource["::create::entity::hours"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.hours#createMany
         * @methodOf lbServices.Entity.hours
         *
         * @description
         *
         * Creates a new instance in hours of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Horario` object.)
         * </em>
         */
        R.hours.createMany = function() {
          var TargetResource = $injector.get("Horario");
          var action = TargetResource["::createMany::entity::hours"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.hours#destroyAll
         * @methodOf lbServices.Entity.hours
         *
         * @description
         *
         * Deletes all hours of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.hours.destroyAll = function() {
          var TargetResource = $injector.get("Horario");
          var action = TargetResource["::delete::entity::hours"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.hours#destroyById
         * @methodOf lbServices.Entity.hours
         *
         * @description
         *
         * Delete a related item by id for hours.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for hours
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.hours.destroyById = function() {
          var TargetResource = $injector.get("Horario");
          var action = TargetResource["::destroyById::entity::hours"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.hours#findById
         * @methodOf lbServices.Entity.hours
         *
         * @description
         *
         * Find a related item by id for hours.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for hours
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Horario` object.)
         * </em>
         */
        R.hours.findById = function() {
          var TargetResource = $injector.get("Horario");
          var action = TargetResource["::findById::entity::hours"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity.hours#updateById
         * @methodOf lbServices.Entity.hours
         *
         * @description
         *
         * Update a related item by id for hours.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for hours
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Horario` object.)
         * </em>
         */
        R.hours.updateById = function() {
          var TargetResource = $injector.get("Horario");
          var action = TargetResource["::updateById::entity::hours"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entity#subscription
         * @methodOf lbServices.Entity
         *
         * @description
         *
         * Fetches belongsTo relation subscription.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subscription` object.)
         * </em>
         */
        R.subscription = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::get::entity::subscription"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Tag
 * @header lbServices.Tag
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Tag` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Tag",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/tags/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Tag.categories.findById() instead.
        "prototype$__findById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/categories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Tag.categories.destroyById() instead.
        "prototype$__destroyById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/categories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.categories.updateById() instead.
        "prototype$__updateById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/categories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.categories.link() instead.
        "prototype$__link__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/categories/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.categories.unlink() instead.
        "prototype$__unlink__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/categories/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.categories.exists() instead.
        "prototype$__exists__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/categories/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Tag.entities.findById() instead.
        "prototype$__findById__entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/entities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Tag.entities.destroyById() instead.
        "prototype$__destroyById__entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/entities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.entities.updateById() instead.
        "prototype$__updateById__entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/entities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.entities.link() instead.
        "prototype$__link__entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/entities/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tag.entities.unlink() instead.
        "prototype$__unlink__entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/entities/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.entities.exists() instead.
        "prototype$__exists__entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tags/:id/entities/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Tag.owner() instead.
        "prototype$__get__owner": {
          url: urlBase + "/tags/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Tag.categories() instead.
        "prototype$__get__categories": {
          isArray: true,
          url: urlBase + "/tags/:id/categories",
          method: "GET"
        },

        // INTERNAL. Use Tag.categories.create() instead.
        "prototype$__create__categories": {
          url: urlBase + "/tags/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use Tag.categories.destroyAll() instead.
        "prototype$__delete__categories": {
          url: urlBase + "/tags/:id/categories",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.categories.count() instead.
        "prototype$__count__categories": {
          url: urlBase + "/tags/:id/categories/count",
          method: "GET"
        },

        // INTERNAL. Use Tag.entities() instead.
        "prototype$__get__entities": {
          isArray: true,
          url: urlBase + "/tags/:id/entities",
          method: "GET"
        },

        // INTERNAL. Use Tag.entities.create() instead.
        "prototype$__create__entities": {
          url: urlBase + "/tags/:id/entities",
          method: "POST"
        },

        // INTERNAL. Use Tag.entities.destroyAll() instead.
        "prototype$__delete__entities": {
          url: urlBase + "/tags/:id/entities",
          method: "DELETE"
        },

        // INTERNAL. Use Tag.entities.count() instead.
        "prototype$__count__entities": {
          url: urlBase + "/tags/:id/entities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#create
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/tags",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#createMany
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/tags",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#upsert
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/tags",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#exists
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/tags/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#findById
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/tags/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#find
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/tags",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#findOne
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/tags/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#updateAll
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/tags/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#deleteById
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/tags/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#count
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/tags/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#prototype$updateAttributes
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/tags/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tag#createChangeStream
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/tags/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Category.tags.findById() instead.
        "::findById::category::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/tags/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.tags.destroyById() instead.
        "::destroyById::category::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/tags/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.tags.updateById() instead.
        "::updateById::category::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/tags/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.tags.link() instead.
        "::link::category::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/tags/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.tags.unlink() instead.
        "::unlink::category::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/tags/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.tags.exists() instead.
        "::exists::category::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/tags/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Category.tags() instead.
        "::get::category::tags": {
          isArray: true,
          url: urlBase + "/categories/:id/tags",
          method: "GET"
        },

        // INTERNAL. Use Category.tags.create() instead.
        "::create::category::tags": {
          url: urlBase + "/categories/:id/tags",
          method: "POST"
        },

        // INTERNAL. Use Category.tags.createMany() instead.
        "::createMany::category::tags": {
          isArray: true,
          url: urlBase + "/categories/:id/tags",
          method: "POST"
        },

        // INTERNAL. Use Category.tags.destroyAll() instead.
        "::delete::category::tags": {
          url: urlBase + "/categories/:id/tags",
          method: "DELETE"
        },

        // INTERNAL. Use Category.tags.count() instead.
        "::count::category::tags": {
          url: urlBase + "/categories/:id/tags/count",
          method: "GET"
        },

        // INTERNAL. Use Entity.tags.findById() instead.
        "::findById::entity::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/tags/:fk",
          method: "GET"
        },

        // INTERNAL. Use Entity.tags.destroyById() instead.
        "::destroyById::entity::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/tags/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.tags.updateById() instead.
        "::updateById::entity::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/tags/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entity.tags.link() instead.
        "::link::entity::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/tags/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entity.tags.unlink() instead.
        "::unlink::entity::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/tags/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.tags.exists() instead.
        "::exists::entity::tags": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/tags/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Entity.tags() instead.
        "::get::entity::tags": {
          isArray: true,
          url: urlBase + "/entities/:id/tags",
          method: "GET"
        },

        // INTERNAL. Use Entity.tags.create() instead.
        "::create::entity::tags": {
          url: urlBase + "/entities/:id/tags",
          method: "POST"
        },

        // INTERNAL. Use Entity.tags.createMany() instead.
        "::createMany::entity::tags": {
          isArray: true,
          url: urlBase + "/entities/:id/tags",
          method: "POST"
        },

        // INTERNAL. Use Entity.tags.destroyAll() instead.
        "::delete::entity::tags": {
          url: urlBase + "/entities/:id/tags",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.tags.count() instead.
        "::count::entity::tags": {
          url: urlBase + "/entities/:id/tags/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Tag#updateOrCreate
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Tag#update
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Tag#destroyById
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Tag#removeById
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tag` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Tag#modelName
    * @propertyOf lbServices.Tag
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Tag`.
    */
    R.modelName = "Tag";

    /**
     * @ngdoc object
     * @name lbServices.Tag.categories
     * @header lbServices.Tag.categories
     * @object
     * @description
     *
     * The object `Tag.categories` groups methods
     * manipulating `Category` instances related to `Tag`.
     *
     * Call {@link lbServices.Tag#categories Tag.categories()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Tag#categories
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Queries categories of tag.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::tag::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.categories#count
         * @methodOf lbServices.Tag.categories
         *
         * @description
         *
         * Counts categories of tag.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.categories.count = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::count::tag::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.categories#create
         * @methodOf lbServices.Tag.categories
         *
         * @description
         *
         * Creates a new instance in categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.create = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::create::tag::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.categories#createMany
         * @methodOf lbServices.Tag.categories
         *
         * @description
         *
         * Creates a new instance in categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.createMany = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::createMany::tag::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.categories#destroyAll
         * @methodOf lbServices.Tag.categories
         *
         * @description
         *
         * Deletes all categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.destroyAll = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::delete::tag::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.categories#destroyById
         * @methodOf lbServices.Tag.categories
         *
         * @description
         *
         * Delete a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.destroyById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::destroyById::tag::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.categories#exists
         * @methodOf lbServices.Tag.categories
         *
         * @description
         *
         * Check the existence of categories relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.exists = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::exists::tag::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.categories#findById
         * @methodOf lbServices.Tag.categories
         *
         * @description
         *
         * Find a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.findById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::findById::tag::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.categories#link
         * @methodOf lbServices.Tag.categories
         *
         * @description
         *
         * Add a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.link = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::link::tag::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.categories#unlink
         * @methodOf lbServices.Tag.categories
         *
         * @description
         *
         * Remove the categories relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.unlink = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::unlink::tag::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.categories#updateById
         * @methodOf lbServices.Tag.categories
         *
         * @description
         *
         * Update a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.updateById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::updateById::tag::categories"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Tag.entities
     * @header lbServices.Tag.entities
     * @object
     * @description
     *
     * The object `Tag.entities` groups methods
     * manipulating `Entity` instances related to `Tag`.
     *
     * Call {@link lbServices.Tag#entities Tag.entities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Tag#entities
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Queries entities of tag.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::get::tag::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.entities#count
         * @methodOf lbServices.Tag.entities
         *
         * @description
         *
         * Counts entities of tag.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.entities.count = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::count::tag::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.entities#create
         * @methodOf lbServices.Tag.entities
         *
         * @description
         *
         * Creates a new instance in entities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities.create = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::create::tag::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.entities#createMany
         * @methodOf lbServices.Tag.entities
         *
         * @description
         *
         * Creates a new instance in entities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities.createMany = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::createMany::tag::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.entities#destroyAll
         * @methodOf lbServices.Tag.entities
         *
         * @description
         *
         * Deletes all entities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.entities.destroyAll = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::delete::tag::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.entities#destroyById
         * @methodOf lbServices.Tag.entities
         *
         * @description
         *
         * Delete a related item by id for entities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.entities.destroyById = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::destroyById::tag::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.entities#exists
         * @methodOf lbServices.Tag.entities
         *
         * @description
         *
         * Check the existence of entities relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities.exists = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::exists::tag::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.entities#findById
         * @methodOf lbServices.Tag.entities
         *
         * @description
         *
         * Find a related item by id for entities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities.findById = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::findById::tag::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.entities#link
         * @methodOf lbServices.Tag.entities
         *
         * @description
         *
         * Add a related item by id for entities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities.link = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::link::tag::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.entities#unlink
         * @methodOf lbServices.Tag.entities
         *
         * @description
         *
         * Remove the entities relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.entities.unlink = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::unlink::tag::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag.entities#updateById
         * @methodOf lbServices.Tag.entities
         *
         * @description
         *
         * Update a related item by id for entities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities.updateById = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::updateById::tag::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tag#owner
         * @methodOf lbServices.Tag
         *
         * @description
         *
         * Fetches belongsTo relation owner.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.owner = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::tag::owner"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Advert
 * @header lbServices.Advert
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Advert` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Advert",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/adverts/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Advert.entity() instead.
        "prototype$__get__entity": {
          url: urlBase + "/adverts/:id/entity",
          method: "GET"
        },

        // INTERNAL. Use Advert.categories.findById() instead.
        "prototype$__findById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/adverts/:id/categories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Advert.categories.destroyById() instead.
        "prototype$__destroyById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/adverts/:id/categories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Advert.categories.updateById() instead.
        "prototype$__updateById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/adverts/:id/categories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Advert.categories.link() instead.
        "prototype$__link__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/adverts/:id/categories/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Advert.categories.unlink() instead.
        "prototype$__unlink__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/adverts/:id/categories/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Advert.categories.exists() instead.
        "prototype$__exists__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/adverts/:id/categories/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Advert.city() instead.
        "prototype$__get__city": {
          url: urlBase + "/adverts/:id/city",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#prototype$__findById__ranks
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Find a related item by id for ranks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ranks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        "prototype$__findById__ranks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/adverts/:id/ranks/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#prototype$__destroyById__ranks
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Delete a related item by id for ranks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ranks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__ranks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/adverts/:id/ranks/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#prototype$__updateById__ranks
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Update a related item by id for ranks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ranks
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        "prototype$__updateById__ranks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/adverts/:id/ranks/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#prototype$__findById__likes
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Find a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        "prototype$__findById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/adverts/:id/likes/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#prototype$__destroyById__likes
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Delete a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/adverts/:id/likes/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#prototype$__updateById__likes
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Update a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        "prototype$__updateById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/adverts/:id/likes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Advert.categories() instead.
        "prototype$__get__categories": {
          isArray: true,
          url: urlBase + "/adverts/:id/categories",
          method: "GET"
        },

        // INTERNAL. Use Advert.categories.create() instead.
        "prototype$__create__categories": {
          url: urlBase + "/adverts/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use Advert.categories.destroyAll() instead.
        "prototype$__delete__categories": {
          url: urlBase + "/adverts/:id/categories",
          method: "DELETE"
        },

        // INTERNAL. Use Advert.categories.count() instead.
        "prototype$__count__categories": {
          url: urlBase + "/adverts/:id/categories/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#prototype$__get__ranks
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Queries ranks of advert.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        "prototype$__get__ranks": {
          isArray: true,
          url: urlBase + "/adverts/:id/ranks",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#prototype$__create__ranks
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Creates a new instance in ranks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        "prototype$__create__ranks": {
          url: urlBase + "/adverts/:id/ranks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#prototype$__delete__ranks
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Deletes all ranks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__ranks": {
          url: urlBase + "/adverts/:id/ranks",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#prototype$__count__ranks
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Counts ranks of advert.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__ranks": {
          url: urlBase + "/adverts/:id/ranks/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#prototype$__get__likes
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Queries likes of advert.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        "prototype$__get__likes": {
          isArray: true,
          url: urlBase + "/adverts/:id/likes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#prototype$__create__likes
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        "prototype$__create__likes": {
          url: urlBase + "/adverts/:id/likes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#prototype$__delete__likes
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Deletes all likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__likes": {
          url: urlBase + "/adverts/:id/likes",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#prototype$__count__likes
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Counts likes of advert.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__likes": {
          url: urlBase + "/adverts/:id/likes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#create
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/adverts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#createMany
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/adverts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#upsert
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/adverts",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#exists
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/adverts/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#findById
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/adverts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#find
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/adverts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#findOne
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/adverts/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#updateAll
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/adverts/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#deleteById
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/adverts/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#count
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/adverts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#prototype$updateAttributes
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/adverts/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#createChangeStream
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/adverts/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#postToFacebook
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `id` – `{string=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` -
         */
        "postToFacebook": {
          url: urlBase + "/adverts/postfb",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Advert#search
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `like` – `{string=}` -
         *
         *  - `cityId` – `{string=}` -
         *
         *  - `usuarioId` – `{string=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `results` – `{*=}` -
         */
        "search": {
          url: urlBase + "/adverts/search",
          method: "GET"
        },

        // INTERNAL. Use Category.adverts.findById() instead.
        "::findById::category::adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/adverts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.adverts.destroyById() instead.
        "::destroyById::category::adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/adverts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.adverts.updateById() instead.
        "::updateById::category::adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/adverts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.adverts.link() instead.
        "::link::category::adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/adverts/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.adverts.unlink() instead.
        "::unlink::category::adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/adverts/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.adverts.exists() instead.
        "::exists::category::adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/adverts/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Category.adverts() instead.
        "::get::category::adverts": {
          isArray: true,
          url: urlBase + "/categories/:id/adverts",
          method: "GET"
        },

        // INTERNAL. Use Category.adverts.create() instead.
        "::create::category::adverts": {
          url: urlBase + "/categories/:id/adverts",
          method: "POST"
        },

        // INTERNAL. Use Category.adverts.createMany() instead.
        "::createMany::category::adverts": {
          isArray: true,
          url: urlBase + "/categories/:id/adverts",
          method: "POST"
        },

        // INTERNAL. Use Category.adverts.destroyAll() instead.
        "::delete::category::adverts": {
          url: urlBase + "/categories/:id/adverts",
          method: "DELETE"
        },

        // INTERNAL. Use Category.adverts.count() instead.
        "::count::category::adverts": {
          url: urlBase + "/categories/:id/adverts/count",
          method: "GET"
        },

        // INTERNAL. Use Entity.adverts.findById() instead.
        "::findById::entity::adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/adverts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Entity.adverts.destroyById() instead.
        "::destroyById::entity::adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/adverts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.adverts.updateById() instead.
        "::updateById::entity::adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/adverts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entity.adverts() instead.
        "::get::entity::adverts": {
          isArray: true,
          url: urlBase + "/entities/:id/adverts",
          method: "GET"
        },

        // INTERNAL. Use Entity.adverts.create() instead.
        "::create::entity::adverts": {
          url: urlBase + "/entities/:id/adverts",
          method: "POST"
        },

        // INTERNAL. Use Entity.adverts.createMany() instead.
        "::createMany::entity::adverts": {
          isArray: true,
          url: urlBase + "/entities/:id/adverts",
          method: "POST"
        },

        // INTERNAL. Use Entity.adverts.destroyAll() instead.
        "::delete::entity::adverts": {
          url: urlBase + "/entities/:id/adverts",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.adverts.count() instead.
        "::count::entity::adverts": {
          url: urlBase + "/entities/:id/adverts/count",
          method: "GET"
        },

        // INTERNAL. Use City.adverts.findById() instead.
        "::findById::city::adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/adverts/:fk",
          method: "GET"
        },

        // INTERNAL. Use City.adverts.destroyById() instead.
        "::destroyById::city::adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/adverts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use City.adverts.updateById() instead.
        "::updateById::city::adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/adverts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use City.adverts() instead.
        "::get::city::adverts": {
          isArray: true,
          url: urlBase + "/cities/:id/adverts",
          method: "GET"
        },

        // INTERNAL. Use City.adverts.create() instead.
        "::create::city::adverts": {
          url: urlBase + "/cities/:id/adverts",
          method: "POST"
        },

        // INTERNAL. Use City.adverts.createMany() instead.
        "::createMany::city::adverts": {
          isArray: true,
          url: urlBase + "/cities/:id/adverts",
          method: "POST"
        },

        // INTERNAL. Use City.adverts.destroyAll() instead.
        "::delete::city::adverts": {
          url: urlBase + "/cities/:id/adverts",
          method: "DELETE"
        },

        // INTERNAL. Use City.adverts.count() instead.
        "::count::city::adverts": {
          url: urlBase + "/cities/:id/adverts/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Advert#updateOrCreate
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Advert#update
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Advert#destroyById
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Advert#removeById
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Advert#modelName
    * @propertyOf lbServices.Advert
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Advert`.
    */
    R.modelName = "Advert";


        /**
         * @ngdoc method
         * @name lbServices.Advert#entity
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Fetches belongsTo relation entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entity = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::get::advert::entity"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Advert.categories
     * @header lbServices.Advert.categories
     * @object
     * @description
     *
     * The object `Advert.categories` groups methods
     * manipulating `Category` instances related to `Advert`.
     *
     * Call {@link lbServices.Advert#categories Advert.categories()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Advert#categories
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Queries categories of advert.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::advert::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Advert.categories#count
         * @methodOf lbServices.Advert.categories
         *
         * @description
         *
         * Counts categories of advert.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.categories.count = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::count::advert::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Advert.categories#create
         * @methodOf lbServices.Advert.categories
         *
         * @description
         *
         * Creates a new instance in categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.create = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::create::advert::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Advert.categories#createMany
         * @methodOf lbServices.Advert.categories
         *
         * @description
         *
         * Creates a new instance in categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.createMany = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::createMany::advert::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Advert.categories#destroyAll
         * @methodOf lbServices.Advert.categories
         *
         * @description
         *
         * Deletes all categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.destroyAll = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::delete::advert::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Advert.categories#destroyById
         * @methodOf lbServices.Advert.categories
         *
         * @description
         *
         * Delete a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.destroyById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::destroyById::advert::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Advert.categories#exists
         * @methodOf lbServices.Advert.categories
         *
         * @description
         *
         * Check the existence of categories relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.exists = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::exists::advert::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Advert.categories#findById
         * @methodOf lbServices.Advert.categories
         *
         * @description
         *
         * Find a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.findById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::findById::advert::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Advert.categories#link
         * @methodOf lbServices.Advert.categories
         *
         * @description
         *
         * Add a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.link = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::link::advert::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Advert.categories#unlink
         * @methodOf lbServices.Advert.categories
         *
         * @description
         *
         * Remove the categories relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.unlink = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::unlink::advert::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Advert.categories#updateById
         * @methodOf lbServices.Advert.categories
         *
         * @description
         *
         * Update a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.updateById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::updateById::advert::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Advert#city
         * @methodOf lbServices.Advert
         *
         * @description
         *
         * Fetches belongsTo relation city.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.city = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::get::advert::city"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Usuario
 * @header lbServices.Usuario
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Usuario` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Usuario",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/usuarios/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__findById__accessTokens
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__updateById__accessTokens
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Usuario.entity() instead.
        "prototype$__get__entity": {
          url: urlBase + "/usuarios/:id/entity",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__findById__ranks
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Find a related item by id for ranks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for ranks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$__findById__ranks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/ranks/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__destroyById__ranks
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Delete a related item by id for ranks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for ranks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__ranks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/ranks/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__updateById__ranks
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Update a related item by id for ranks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for ranks
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$__updateById__ranks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/ranks/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__findById__likes
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Find a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$__findById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/likes/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__destroyById__likes
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Delete a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/likes/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__updateById__likes
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Update a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$__updateById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/likes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Usuario.chatrooms.findById() instead.
        "prototype$__findById__chatrooms": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/chatrooms/:fk",
          method: "GET"
        },

        // INTERNAL. Use Usuario.chatrooms.destroyById() instead.
        "prototype$__destroyById__chatrooms": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/chatrooms/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Usuario.chatrooms.updateById() instead.
        "prototype$__updateById__chatrooms": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/chatrooms/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Usuario.chatrooms.link() instead.
        "prototype$__link__chatrooms": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/chatrooms/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Usuario.chatrooms.unlink() instead.
        "prototype$__unlink__chatrooms": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/chatrooms/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Usuario.chatrooms.exists() instead.
        "prototype$__exists__chatrooms": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/chatrooms/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Usuario.sellers.findById() instead.
        "prototype$__findById__sellers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/sellers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Usuario.sellers.destroyById() instead.
        "prototype$__destroyById__sellers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/sellers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Usuario.sellers.updateById() instead.
        "prototype$__updateById__sellers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/sellers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Usuario.sellers.link() instead.
        "prototype$__link__sellers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/sellers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Usuario.sellers.unlink() instead.
        "prototype$__unlink__sellers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/sellers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Usuario.sellers.exists() instead.
        "prototype$__exists__sellers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/sellers/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__get__accessTokens
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Queries accessTokens of usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/usuarios/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__create__accessTokens
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/usuarios/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__delete__accessTokens
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/usuarios/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__count__accessTokens
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Counts accessTokens of usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/usuarios/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#__get__owners
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Queries owners of usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "__get__owners": {
          isArray: true,
          url: urlBase + "/usuarios/owners",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#__create__owners
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Creates a new instance in owners of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "__create__owners": {
          url: urlBase + "/usuarios/owners",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#__delete__owners
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Deletes all owners of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "__delete__owners": {
          url: urlBase + "/usuarios/owners",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#__count__owners
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Counts owners of usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "__count__owners": {
          url: urlBase + "/usuarios/owners/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#__get__users
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Queries users of usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "__get__users": {
          isArray: true,
          url: urlBase + "/usuarios/users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#__create__users
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Creates a new instance in users of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "__create__users": {
          url: urlBase + "/usuarios/users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#__delete__users
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Deletes all users of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "__delete__users": {
          url: urlBase + "/usuarios/users",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#__count__users
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Counts users of usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "__count__users": {
          url: urlBase + "/usuarios/users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__get__ranks
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Queries ranks of usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$__get__ranks": {
          isArray: true,
          url: urlBase + "/usuarios/:id/ranks",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__create__ranks
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Creates a new instance in ranks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$__create__ranks": {
          url: urlBase + "/usuarios/:id/ranks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__delete__ranks
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Deletes all ranks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__ranks": {
          url: urlBase + "/usuarios/:id/ranks",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__count__ranks
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Counts ranks of usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__ranks": {
          url: urlBase + "/usuarios/:id/ranks/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__get__likes
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Queries likes of usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$__get__likes": {
          isArray: true,
          url: urlBase + "/usuarios/:id/likes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__create__likes
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$__create__likes": {
          url: urlBase + "/usuarios/:id/likes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__delete__likes
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Deletes all likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__likes": {
          url: urlBase + "/usuarios/:id/likes",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__count__likes
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Counts likes of usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__likes": {
          url: urlBase + "/usuarios/:id/likes/count",
          method: "GET"
        },

        // INTERNAL. Use Usuario.chatrooms() instead.
        "prototype$__get__chatrooms": {
          isArray: true,
          url: urlBase + "/usuarios/:id/chatrooms",
          method: "GET"
        },

        // INTERNAL. Use Usuario.chatrooms.create() instead.
        "prototype$__create__chatrooms": {
          url: urlBase + "/usuarios/:id/chatrooms",
          method: "POST"
        },

        // INTERNAL. Use Usuario.chatrooms.destroyAll() instead.
        "prototype$__delete__chatrooms": {
          url: urlBase + "/usuarios/:id/chatrooms",
          method: "DELETE"
        },

        // INTERNAL. Use Usuario.chatrooms.count() instead.
        "prototype$__count__chatrooms": {
          url: urlBase + "/usuarios/:id/chatrooms/count",
          method: "GET"
        },

        // INTERNAL. Use Usuario.sellers() instead.
        "prototype$__get__sellers": {
          isArray: true,
          url: urlBase + "/usuarios/:id/sellers",
          method: "GET"
        },

        // INTERNAL. Use Usuario.sellers.create() instead.
        "prototype$__create__sellers": {
          url: urlBase + "/usuarios/:id/sellers",
          method: "POST"
        },

        // INTERNAL. Use Usuario.sellers.destroyAll() instead.
        "prototype$__delete__sellers": {
          url: urlBase + "/usuarios/:id/sellers",
          method: "DELETE"
        },

        // INTERNAL. Use Usuario.sellers.count() instead.
        "prototype$__count__sellers": {
          url: urlBase + "/usuarios/:id/sellers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#create
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/usuarios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#createMany
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/usuarios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#upsert
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/usuarios",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#exists
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/usuarios/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#findById
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/usuarios/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#find
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/usuarios",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#findOne
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/usuarios/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#updateAll
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/usuarios/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#deleteById
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/usuarios/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#count
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/usuarios/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$updateAttributes
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/usuarios/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#createChangeStream
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/usuarios/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#login
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         *
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         *
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/usuarios/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#logout
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/usuarios/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#confirm
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` -
         *
         *  - `token` – `{string}` -
         *
         *  - `redirect` – `{string=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/usuarios/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#resetPassword
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/usuarios/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#roomwith
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `user_id` – `{string=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `room` – `{string=}` -
         */
        "roomwith": {
          url: urlBase + "/usuarios/roomwith",
          method: "GET"
        },

        // INTERNAL. Use Entity.owners.findById() instead.
        "::findById::entity::owners": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/owners/:fk",
          method: "GET"
        },

        // INTERNAL. Use Entity.owners.destroyById() instead.
        "::destroyById::entity::owners": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/owners/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.owners.updateById() instead.
        "::updateById::entity::owners": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/owners/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entity.clients.findById() instead.
        "::findById::entity::clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/clients/:fk",
          method: "GET"
        },

        // INTERNAL. Use Entity.clients.destroyById() instead.
        "::destroyById::entity::clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/clients/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.clients.updateById() instead.
        "::updateById::entity::clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/clients/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entity.clients.link() instead.
        "::link::entity::clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/clients/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entity.clients.unlink() instead.
        "::unlink::entity::clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/clients/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.clients.exists() instead.
        "::exists::entity::clients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/clients/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Entity.owners() instead.
        "::get::entity::owners": {
          isArray: true,
          url: urlBase + "/entities/:id/owners",
          method: "GET"
        },

        // INTERNAL. Use Entity.owners.create() instead.
        "::create::entity::owners": {
          url: urlBase + "/entities/:id/owners",
          method: "POST"
        },

        // INTERNAL. Use Entity.owners.createMany() instead.
        "::createMany::entity::owners": {
          isArray: true,
          url: urlBase + "/entities/:id/owners",
          method: "POST"
        },

        // INTERNAL. Use Entity.owners.destroyAll() instead.
        "::delete::entity::owners": {
          url: urlBase + "/entities/:id/owners",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.owners.count() instead.
        "::count::entity::owners": {
          url: urlBase + "/entities/:id/owners/count",
          method: "GET"
        },

        // INTERNAL. Use Entity.clients() instead.
        "::get::entity::clients": {
          isArray: true,
          url: urlBase + "/entities/:id/clients",
          method: "GET"
        },

        // INTERNAL. Use Entity.clients.create() instead.
        "::create::entity::clients": {
          url: urlBase + "/entities/:id/clients",
          method: "POST"
        },

        // INTERNAL. Use Entity.clients.createMany() instead.
        "::createMany::entity::clients": {
          isArray: true,
          url: urlBase + "/entities/:id/clients",
          method: "POST"
        },

        // INTERNAL. Use Entity.clients.destroyAll() instead.
        "::delete::entity::clients": {
          url: urlBase + "/entities/:id/clients",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.clients.count() instead.
        "::count::entity::clients": {
          url: urlBase + "/entities/:id/clients/count",
          method: "GET"
        },

        // INTERNAL. Use Tag.owner() instead.
        "::get::tag::owner": {
          url: urlBase + "/tags/:id/owner",
          method: "GET"
        },

        // INTERNAL. Use Chatroom.users.findById() instead.
        "::findById::chatroom::users": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/chatrooms/:id/users/:fk",
          method: "GET"
        },

        // INTERNAL. Use Chatroom.users.destroyById() instead.
        "::destroyById::chatroom::users": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/chatrooms/:id/users/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Chatroom.users.updateById() instead.
        "::updateById::chatroom::users": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/chatrooms/:id/users/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Chatroom.users.link() instead.
        "::link::chatroom::users": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/chatrooms/:id/users/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Chatroom.users.unlink() instead.
        "::unlink::chatroom::users": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/chatrooms/:id/users/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Chatroom.users.exists() instead.
        "::exists::chatroom::users": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/chatrooms/:id/users/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Chatroom.users() instead.
        "::get::chatroom::users": {
          isArray: true,
          url: urlBase + "/chatrooms/:id/users",
          method: "GET"
        },

        // INTERNAL. Use Chatroom.users.create() instead.
        "::create::chatroom::users": {
          url: urlBase + "/chatrooms/:id/users",
          method: "POST"
        },

        // INTERNAL. Use Chatroom.users.createMany() instead.
        "::createMany::chatroom::users": {
          isArray: true,
          url: urlBase + "/chatrooms/:id/users",
          method: "POST"
        },

        // INTERNAL. Use Chatroom.users.destroyAll() instead.
        "::delete::chatroom::users": {
          url: urlBase + "/chatrooms/:id/users",
          method: "DELETE"
        },

        // INTERNAL. Use Chatroom.users.count() instead.
        "::count::chatroom::users": {
          url: urlBase + "/chatrooms/:id/users/count",
          method: "GET"
        },

        // INTERNAL. Use Chatmessage.user() instead.
        "::get::chatmessage::user": {
          url: urlBase + "/chatmessages/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Client.usuario() instead.
        "::get::client::usuario": {
          url: urlBase + "/clients/:id/usuario",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#getCurrent
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/usuarios" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Usuario#updateOrCreate
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Usuario#update
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Usuario#destroyById
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Usuario#removeById
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Usuario#getCachedCurrent
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Usuario#login} or
         * {@link lbServices.Usuario#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Usuario instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario#isAuthenticated
         * @methodOf lbServices.Usuario
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario#getCurrentId
         * @methodOf lbServices.Usuario
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Usuario#modelName
    * @propertyOf lbServices.Usuario
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Usuario`.
    */
    R.modelName = "Usuario";


        /**
         * @ngdoc method
         * @name lbServices.Usuario#entity
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Fetches belongsTo relation entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entity = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::get::usuario::entity"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Usuario.chatrooms
     * @header lbServices.Usuario.chatrooms
     * @object
     * @description
     *
     * The object `Usuario.chatrooms` groups methods
     * manipulating `Chatroom` instances related to `Usuario`.
     *
     * Call {@link lbServices.Usuario#chatrooms Usuario.chatrooms()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Usuario#chatrooms
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Queries chatrooms of usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        R.chatrooms = function() {
          var TargetResource = $injector.get("Chatroom");
          var action = TargetResource["::get::usuario::chatrooms"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.chatrooms#count
         * @methodOf lbServices.Usuario.chatrooms
         *
         * @description
         *
         * Counts chatrooms of usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.chatrooms.count = function() {
          var TargetResource = $injector.get("Chatroom");
          var action = TargetResource["::count::usuario::chatrooms"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.chatrooms#create
         * @methodOf lbServices.Usuario.chatrooms
         *
         * @description
         *
         * Creates a new instance in chatrooms of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        R.chatrooms.create = function() {
          var TargetResource = $injector.get("Chatroom");
          var action = TargetResource["::create::usuario::chatrooms"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.chatrooms#createMany
         * @methodOf lbServices.Usuario.chatrooms
         *
         * @description
         *
         * Creates a new instance in chatrooms of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        R.chatrooms.createMany = function() {
          var TargetResource = $injector.get("Chatroom");
          var action = TargetResource["::createMany::usuario::chatrooms"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.chatrooms#destroyAll
         * @methodOf lbServices.Usuario.chatrooms
         *
         * @description
         *
         * Deletes all chatrooms of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.chatrooms.destroyAll = function() {
          var TargetResource = $injector.get("Chatroom");
          var action = TargetResource["::delete::usuario::chatrooms"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.chatrooms#destroyById
         * @methodOf lbServices.Usuario.chatrooms
         *
         * @description
         *
         * Delete a related item by id for chatrooms.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for chatrooms
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.chatrooms.destroyById = function() {
          var TargetResource = $injector.get("Chatroom");
          var action = TargetResource["::destroyById::usuario::chatrooms"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.chatrooms#exists
         * @methodOf lbServices.Usuario.chatrooms
         *
         * @description
         *
         * Check the existence of chatrooms relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for chatrooms
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        R.chatrooms.exists = function() {
          var TargetResource = $injector.get("Chatroom");
          var action = TargetResource["::exists::usuario::chatrooms"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.chatrooms#findById
         * @methodOf lbServices.Usuario.chatrooms
         *
         * @description
         *
         * Find a related item by id for chatrooms.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for chatrooms
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        R.chatrooms.findById = function() {
          var TargetResource = $injector.get("Chatroom");
          var action = TargetResource["::findById::usuario::chatrooms"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.chatrooms#link
         * @methodOf lbServices.Usuario.chatrooms
         *
         * @description
         *
         * Add a related item by id for chatrooms.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for chatrooms
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        R.chatrooms.link = function() {
          var TargetResource = $injector.get("Chatroom");
          var action = TargetResource["::link::usuario::chatrooms"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.chatrooms#unlink
         * @methodOf lbServices.Usuario.chatrooms
         *
         * @description
         *
         * Remove the chatrooms relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for chatrooms
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.chatrooms.unlink = function() {
          var TargetResource = $injector.get("Chatroom");
          var action = TargetResource["::unlink::usuario::chatrooms"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.chatrooms#updateById
         * @methodOf lbServices.Usuario.chatrooms
         *
         * @description
         *
         * Update a related item by id for chatrooms.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for chatrooms
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        R.chatrooms.updateById = function() {
          var TargetResource = $injector.get("Chatroom");
          var action = TargetResource["::updateById::usuario::chatrooms"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Usuario.sellers
     * @header lbServices.Usuario.sellers
     * @object
     * @description
     *
     * The object `Usuario.sellers` groups methods
     * manipulating `Entity` instances related to `Usuario`.
     *
     * Call {@link lbServices.Usuario#sellers Usuario.sellers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Usuario#sellers
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Queries sellers of usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.sellers = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::get::usuario::sellers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.sellers#count
         * @methodOf lbServices.Usuario.sellers
         *
         * @description
         *
         * Counts sellers of usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.sellers.count = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::count::usuario::sellers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.sellers#create
         * @methodOf lbServices.Usuario.sellers
         *
         * @description
         *
         * Creates a new instance in sellers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.sellers.create = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::create::usuario::sellers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.sellers#createMany
         * @methodOf lbServices.Usuario.sellers
         *
         * @description
         *
         * Creates a new instance in sellers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.sellers.createMany = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::createMany::usuario::sellers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.sellers#destroyAll
         * @methodOf lbServices.Usuario.sellers
         *
         * @description
         *
         * Deletes all sellers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.sellers.destroyAll = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::delete::usuario::sellers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.sellers#destroyById
         * @methodOf lbServices.Usuario.sellers
         *
         * @description
         *
         * Delete a related item by id for sellers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for sellers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.sellers.destroyById = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::destroyById::usuario::sellers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.sellers#exists
         * @methodOf lbServices.Usuario.sellers
         *
         * @description
         *
         * Check the existence of sellers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for sellers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.sellers.exists = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::exists::usuario::sellers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.sellers#findById
         * @methodOf lbServices.Usuario.sellers
         *
         * @description
         *
         * Find a related item by id for sellers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for sellers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.sellers.findById = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::findById::usuario::sellers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.sellers#link
         * @methodOf lbServices.Usuario.sellers
         *
         * @description
         *
         * Add a related item by id for sellers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for sellers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.sellers.link = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::link::usuario::sellers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.sellers#unlink
         * @methodOf lbServices.Usuario.sellers
         *
         * @description
         *
         * Remove the sellers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for sellers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.sellers.unlink = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::unlink::usuario::sellers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario.sellers#updateById
         * @methodOf lbServices.Usuario.sellers
         *
         * @description
         *
         * Update a related item by id for sellers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for sellers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.sellers.updateById = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::updateById::usuario::sellers"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Subdomain
 * @header lbServices.Subdomain
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Subdomain` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Subdomain",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/subdomains/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Subdomain#prototype$__get__linkedObject
         * @methodOf lbServices.Subdomain
         *
         * @description
         *
         * Fetches belongsTo relation linkedObject.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subdomain` object.)
         * </em>
         */
        "prototype$__get__linkedObject": {
          url: urlBase + "/subdomains/:id/linkedObject",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subdomain#create
         * @methodOf lbServices.Subdomain
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subdomain` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/subdomains",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subdomain#createMany
         * @methodOf lbServices.Subdomain
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subdomain` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/subdomains",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subdomain#upsert
         * @methodOf lbServices.Subdomain
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subdomain` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/subdomains",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subdomain#exists
         * @methodOf lbServices.Subdomain
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/subdomains/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subdomain#findById
         * @methodOf lbServices.Subdomain
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subdomain` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/subdomains/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subdomain#find
         * @methodOf lbServices.Subdomain
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subdomain` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/subdomains",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subdomain#findOne
         * @methodOf lbServices.Subdomain
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subdomain` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/subdomains/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subdomain#updateAll
         * @methodOf lbServices.Subdomain
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/subdomains/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subdomain#deleteById
         * @methodOf lbServices.Subdomain
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subdomain` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/subdomains/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subdomain#count
         * @methodOf lbServices.Subdomain
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/subdomains/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subdomain#prototype$updateAttributes
         * @methodOf lbServices.Subdomain
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subdomain` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/subdomains/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subdomain#createChangeStream
         * @methodOf lbServices.Subdomain
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/subdomains/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Category.subdomain() instead.
        "::get::category::subdomain": {
          url: urlBase + "/categories/:id/subdomain",
          method: "GET"
        },

        // INTERNAL. Use Category.subdomain.create() instead.
        "::create::category::subdomain": {
          url: urlBase + "/categories/:id/subdomain",
          method: "POST"
        },

        // INTERNAL. Use Category.subdomain.createMany() instead.
        "::createMany::category::subdomain": {
          isArray: true,
          url: urlBase + "/categories/:id/subdomain",
          method: "POST"
        },

        // INTERNAL. Use Category.subdomain.update() instead.
        "::update::category::subdomain": {
          url: urlBase + "/categories/:id/subdomain",
          method: "PUT"
        },

        // INTERNAL. Use Category.subdomain.destroy() instead.
        "::destroy::category::subdomain": {
          url: urlBase + "/categories/:id/subdomain",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.subdomain() instead.
        "::get::entity::subdomain": {
          url: urlBase + "/entities/:id/subdomain",
          method: "GET"
        },

        // INTERNAL. Use Entity.subdomain.create() instead.
        "::create::entity::subdomain": {
          url: urlBase + "/entities/:id/subdomain",
          method: "POST"
        },

        // INTERNAL. Use Entity.subdomain.createMany() instead.
        "::createMany::entity::subdomain": {
          isArray: true,
          url: urlBase + "/entities/:id/subdomain",
          method: "POST"
        },

        // INTERNAL. Use Entity.subdomain.update() instead.
        "::update::entity::subdomain": {
          url: urlBase + "/entities/:id/subdomain",
          method: "PUT"
        },

        // INTERNAL. Use Entity.subdomain.destroy() instead.
        "::destroy::entity::subdomain": {
          url: urlBase + "/entities/:id/subdomain",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Subdomain#updateOrCreate
         * @methodOf lbServices.Subdomain
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subdomain` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Subdomain#update
         * @methodOf lbServices.Subdomain
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Subdomain#destroyById
         * @methodOf lbServices.Subdomain
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subdomain` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Subdomain#removeById
         * @methodOf lbServices.Subdomain
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subdomain` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Subdomain#modelName
    * @propertyOf lbServices.Subdomain
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Subdomain`.
    */
    R.modelName = "Subdomain";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Country
 * @header lbServices.Country
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Country` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Country",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/countries/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Country.states.findById() instead.
        "prototype$__findById__states": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/countries/:id/states/:fk",
          method: "GET"
        },

        // INTERNAL. Use Country.states.destroyById() instead.
        "prototype$__destroyById__states": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/countries/:id/states/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Country.states.updateById() instead.
        "prototype$__updateById__states": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/countries/:id/states/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Country.cities.findById() instead.
        "prototype$__findById__cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/countries/:id/cities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Country.cities.destroyById() instead.
        "prototype$__destroyById__cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/countries/:id/cities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Country.cities.updateById() instead.
        "prototype$__updateById__cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/countries/:id/cities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Country.states() instead.
        "prototype$__get__states": {
          isArray: true,
          url: urlBase + "/countries/:id/states",
          method: "GET"
        },

        // INTERNAL. Use Country.states.create() instead.
        "prototype$__create__states": {
          url: urlBase + "/countries/:id/states",
          method: "POST"
        },

        // INTERNAL. Use Country.states.destroyAll() instead.
        "prototype$__delete__states": {
          url: urlBase + "/countries/:id/states",
          method: "DELETE"
        },

        // INTERNAL. Use Country.states.count() instead.
        "prototype$__count__states": {
          url: urlBase + "/countries/:id/states/count",
          method: "GET"
        },

        // INTERNAL. Use Country.cities() instead.
        "prototype$__get__cities": {
          isArray: true,
          url: urlBase + "/countries/:id/cities",
          method: "GET"
        },

        // INTERNAL. Use Country.cities.create() instead.
        "prototype$__create__cities": {
          url: urlBase + "/countries/:id/cities",
          method: "POST"
        },

        // INTERNAL. Use Country.cities.destroyAll() instead.
        "prototype$__delete__cities": {
          url: urlBase + "/countries/:id/cities",
          method: "DELETE"
        },

        // INTERNAL. Use Country.cities.count() instead.
        "prototype$__count__cities": {
          url: urlBase + "/countries/:id/cities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#create
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/countries",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#createMany
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/countries",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#upsert
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/countries",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#exists
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/countries/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#findById
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/countries/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#find
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/countries",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#findOne
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/countries/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#updateAll
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/countries/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#deleteById
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/countries/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#count
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/countries/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#prototype$updateAttributes
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/countries/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Country#createChangeStream
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/countries/change-stream",
          method: "POST"
        },

        // INTERNAL. Use State.country() instead.
        "::get::state::country": {
          url: urlBase + "/states/:id/country",
          method: "GET"
        },

        // INTERNAL. Use City.country() instead.
        "::get::city::country": {
          url: urlBase + "/cities/:id/country",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Country#updateOrCreate
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Country#update
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Country#destroyById
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Country#removeById
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Country#modelName
    * @propertyOf lbServices.Country
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Country`.
    */
    R.modelName = "Country";

    /**
     * @ngdoc object
     * @name lbServices.Country.states
     * @header lbServices.Country.states
     * @object
     * @description
     *
     * The object `Country.states` groups methods
     * manipulating `State` instances related to `Country`.
     *
     * Call {@link lbServices.Country#states Country.states()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Country#states
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Queries states of country.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `State` object.)
         * </em>
         */
        R.states = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::get::country::states"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.states#count
         * @methodOf lbServices.Country.states
         *
         * @description
         *
         * Counts states of country.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.states.count = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::count::country::states"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.states#create
         * @methodOf lbServices.Country.states
         *
         * @description
         *
         * Creates a new instance in states of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `State` object.)
         * </em>
         */
        R.states.create = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::create::country::states"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.states#createMany
         * @methodOf lbServices.Country.states
         *
         * @description
         *
         * Creates a new instance in states of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `State` object.)
         * </em>
         */
        R.states.createMany = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::createMany::country::states"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.states#destroyAll
         * @methodOf lbServices.Country.states
         *
         * @description
         *
         * Deletes all states of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.states.destroyAll = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::delete::country::states"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.states#destroyById
         * @methodOf lbServices.Country.states
         *
         * @description
         *
         * Delete a related item by id for states.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for states
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.states.destroyById = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::destroyById::country::states"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.states#findById
         * @methodOf lbServices.Country.states
         *
         * @description
         *
         * Find a related item by id for states.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for states
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `State` object.)
         * </em>
         */
        R.states.findById = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::findById::country::states"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.states#updateById
         * @methodOf lbServices.Country.states
         *
         * @description
         *
         * Update a related item by id for states.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for states
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `State` object.)
         * </em>
         */
        R.states.updateById = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::updateById::country::states"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Country.cities
     * @header lbServices.Country.cities
     * @object
     * @description
     *
     * The object `Country.cities` groups methods
     * manipulating `City` instances related to `Country`.
     *
     * Call {@link lbServices.Country#cities Country.cities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Country#cities
         * @methodOf lbServices.Country
         *
         * @description
         *
         * Queries cities of country.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::get::country::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.cities#count
         * @methodOf lbServices.Country.cities
         *
         * @description
         *
         * Counts cities of country.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.cities.count = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::count::country::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.cities#create
         * @methodOf lbServices.Country.cities
         *
         * @description
         *
         * Creates a new instance in cities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.create = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::create::country::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.cities#createMany
         * @methodOf lbServices.Country.cities
         *
         * @description
         *
         * Creates a new instance in cities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.createMany = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::createMany::country::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.cities#destroyAll
         * @methodOf lbServices.Country.cities
         *
         * @description
         *
         * Deletes all cities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cities.destroyAll = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::delete::country::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.cities#destroyById
         * @methodOf lbServices.Country.cities
         *
         * @description
         *
         * Delete a related item by id for cities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cities.destroyById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::destroyById::country::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.cities#findById
         * @methodOf lbServices.Country.cities
         *
         * @description
         *
         * Find a related item by id for cities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.findById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::findById::country::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Country.cities#updateById
         * @methodOf lbServices.Country.cities
         *
         * @description
         *
         * Update a related item by id for cities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.updateById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::updateById::country::cities"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.State
 * @header lbServices.State
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `State` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "State",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/states/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use State.country() instead.
        "prototype$__get__country": {
          url: urlBase + "/states/:id/country",
          method: "GET"
        },

        // INTERNAL. Use State.cities.findById() instead.
        "prototype$__findById__cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/states/:id/cities/:fk",
          method: "GET"
        },

        // INTERNAL. Use State.cities.destroyById() instead.
        "prototype$__destroyById__cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/states/:id/cities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use State.cities.updateById() instead.
        "prototype$__updateById__cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/states/:id/cities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use State.cities() instead.
        "prototype$__get__cities": {
          isArray: true,
          url: urlBase + "/states/:id/cities",
          method: "GET"
        },

        // INTERNAL. Use State.cities.create() instead.
        "prototype$__create__cities": {
          url: urlBase + "/states/:id/cities",
          method: "POST"
        },

        // INTERNAL. Use State.cities.destroyAll() instead.
        "prototype$__delete__cities": {
          url: urlBase + "/states/:id/cities",
          method: "DELETE"
        },

        // INTERNAL. Use State.cities.count() instead.
        "prototype$__count__cities": {
          url: urlBase + "/states/:id/cities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.State#create
         * @methodOf lbServices.State
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `State` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/states",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.State#createMany
         * @methodOf lbServices.State
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `State` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/states",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.State#upsert
         * @methodOf lbServices.State
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `State` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/states",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.State#exists
         * @methodOf lbServices.State
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/states/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.State#findById
         * @methodOf lbServices.State
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `State` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/states/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.State#find
         * @methodOf lbServices.State
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `State` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/states",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.State#findOne
         * @methodOf lbServices.State
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `State` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/states/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.State#updateAll
         * @methodOf lbServices.State
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/states/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.State#deleteById
         * @methodOf lbServices.State
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `State` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/states/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.State#count
         * @methodOf lbServices.State
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/states/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.State#prototype$updateAttributes
         * @methodOf lbServices.State
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `State` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/states/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.State#createChangeStream
         * @methodOf lbServices.State
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/states/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Country.states.findById() instead.
        "::findById::country::states": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/countries/:id/states/:fk",
          method: "GET"
        },

        // INTERNAL. Use Country.states.destroyById() instead.
        "::destroyById::country::states": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/countries/:id/states/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Country.states.updateById() instead.
        "::updateById::country::states": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/countries/:id/states/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Country.states() instead.
        "::get::country::states": {
          isArray: true,
          url: urlBase + "/countries/:id/states",
          method: "GET"
        },

        // INTERNAL. Use Country.states.create() instead.
        "::create::country::states": {
          url: urlBase + "/countries/:id/states",
          method: "POST"
        },

        // INTERNAL. Use Country.states.createMany() instead.
        "::createMany::country::states": {
          isArray: true,
          url: urlBase + "/countries/:id/states",
          method: "POST"
        },

        // INTERNAL. Use Country.states.destroyAll() instead.
        "::delete::country::states": {
          url: urlBase + "/countries/:id/states",
          method: "DELETE"
        },

        // INTERNAL. Use Country.states.count() instead.
        "::count::country::states": {
          url: urlBase + "/countries/:id/states/count",
          method: "GET"
        },

        // INTERNAL. Use City.state() instead.
        "::get::city::state": {
          url: urlBase + "/cities/:id/state",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.State#updateOrCreate
         * @methodOf lbServices.State
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `State` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.State#update
         * @methodOf lbServices.State
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.State#destroyById
         * @methodOf lbServices.State
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `State` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.State#removeById
         * @methodOf lbServices.State
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `State` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.State#modelName
    * @propertyOf lbServices.State
    * @description
    * The name of the model represented by this $resource,
    * i.e. `State`.
    */
    R.modelName = "State";


        /**
         * @ngdoc method
         * @name lbServices.State#country
         * @methodOf lbServices.State
         *
         * @description
         *
         * Fetches belongsTo relation country.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        R.country = function() {
          var TargetResource = $injector.get("Country");
          var action = TargetResource["::get::state::country"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.State.cities
     * @header lbServices.State.cities
     * @object
     * @description
     *
     * The object `State.cities` groups methods
     * manipulating `City` instances related to `State`.
     *
     * Call {@link lbServices.State#cities State.cities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.State#cities
         * @methodOf lbServices.State
         *
         * @description
         *
         * Queries cities of state.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::get::state::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.State.cities#count
         * @methodOf lbServices.State.cities
         *
         * @description
         *
         * Counts cities of state.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.cities.count = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::count::state::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.State.cities#create
         * @methodOf lbServices.State.cities
         *
         * @description
         *
         * Creates a new instance in cities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.create = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::create::state::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.State.cities#createMany
         * @methodOf lbServices.State.cities
         *
         * @description
         *
         * Creates a new instance in cities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.createMany = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::createMany::state::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.State.cities#destroyAll
         * @methodOf lbServices.State.cities
         *
         * @description
         *
         * Deletes all cities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cities.destroyAll = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::delete::state::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.State.cities#destroyById
         * @methodOf lbServices.State.cities
         *
         * @description
         *
         * Delete a related item by id for cities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cities.destroyById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::destroyById::state::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.State.cities#findById
         * @methodOf lbServices.State.cities
         *
         * @description
         *
         * Find a related item by id for cities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.findById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::findById::state::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.State.cities#updateById
         * @methodOf lbServices.State.cities
         *
         * @description
         *
         * Update a related item by id for cities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.cities.updateById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::updateById::state::cities"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.City
 * @header lbServices.City
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `City` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "City",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/cities/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use City.state() instead.
        "prototype$__get__state": {
          url: urlBase + "/cities/:id/state",
          method: "GET"
        },

        // INTERNAL. Use City.country() instead.
        "prototype$__get__country": {
          url: urlBase + "/cities/:id/country",
          method: "GET"
        },

        // INTERNAL. Use City.categories.findById() instead.
        "prototype$__findById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/categories/:fk",
          method: "GET"
        },

        // INTERNAL. Use City.categories.destroyById() instead.
        "prototype$__destroyById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/categories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use City.categories.updateById() instead.
        "prototype$__updateById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/categories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use City.categories.link() instead.
        "prototype$__link__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/categories/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use City.categories.unlink() instead.
        "prototype$__unlink__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/categories/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use City.categories.exists() instead.
        "prototype$__exists__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/categories/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use City.entities.findById() instead.
        "prototype$__findById__entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/entities/:fk",
          method: "GET"
        },

        // INTERNAL. Use City.entities.destroyById() instead.
        "prototype$__destroyById__entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/entities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use City.entities.updateById() instead.
        "prototype$__updateById__entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/entities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use City.adverts.findById() instead.
        "prototype$__findById__adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/adverts/:fk",
          method: "GET"
        },

        // INTERNAL. Use City.adverts.destroyById() instead.
        "prototype$__destroyById__adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/adverts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use City.adverts.updateById() instead.
        "prototype$__updateById__adverts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/cities/:id/adverts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use City.categories() instead.
        "prototype$__get__categories": {
          isArray: true,
          url: urlBase + "/cities/:id/categories",
          method: "GET"
        },

        // INTERNAL. Use City.categories.create() instead.
        "prototype$__create__categories": {
          url: urlBase + "/cities/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use City.categories.destroyAll() instead.
        "prototype$__delete__categories": {
          url: urlBase + "/cities/:id/categories",
          method: "DELETE"
        },

        // INTERNAL. Use City.categories.count() instead.
        "prototype$__count__categories": {
          url: urlBase + "/cities/:id/categories/count",
          method: "GET"
        },

        // INTERNAL. Use City.entities() instead.
        "prototype$__get__entities": {
          isArray: true,
          url: urlBase + "/cities/:id/entities",
          method: "GET"
        },

        // INTERNAL. Use City.entities.create() instead.
        "prototype$__create__entities": {
          url: urlBase + "/cities/:id/entities",
          method: "POST"
        },

        // INTERNAL. Use City.entities.destroyAll() instead.
        "prototype$__delete__entities": {
          url: urlBase + "/cities/:id/entities",
          method: "DELETE"
        },

        // INTERNAL. Use City.entities.count() instead.
        "prototype$__count__entities": {
          url: urlBase + "/cities/:id/entities/count",
          method: "GET"
        },

        // INTERNAL. Use City.adverts() instead.
        "prototype$__get__adverts": {
          isArray: true,
          url: urlBase + "/cities/:id/adverts",
          method: "GET"
        },

        // INTERNAL. Use City.adverts.create() instead.
        "prototype$__create__adverts": {
          url: urlBase + "/cities/:id/adverts",
          method: "POST"
        },

        // INTERNAL. Use City.adverts.destroyAll() instead.
        "prototype$__delete__adverts": {
          url: urlBase + "/cities/:id/adverts",
          method: "DELETE"
        },

        // INTERNAL. Use City.adverts.count() instead.
        "prototype$__count__adverts": {
          url: urlBase + "/cities/:id/adverts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#create
         * @methodOf lbServices.City
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/cities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#createMany
         * @methodOf lbServices.City
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/cities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#upsert
         * @methodOf lbServices.City
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/cities",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#exists
         * @methodOf lbServices.City
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/cities/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#findById
         * @methodOf lbServices.City
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/cities/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#find
         * @methodOf lbServices.City
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/cities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#findOne
         * @methodOf lbServices.City
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/cities/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#updateAll
         * @methodOf lbServices.City
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/cities/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#deleteById
         * @methodOf lbServices.City
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/cities/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#count
         * @methodOf lbServices.City
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/cities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#prototype$updateAttributes
         * @methodOf lbServices.City
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/cities/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.City#createChangeStream
         * @methodOf lbServices.City
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/cities/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Category.cities.findById() instead.
        "::findById::category::cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/cities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.cities.destroyById() instead.
        "::destroyById::category::cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/cities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.cities.updateById() instead.
        "::updateById::category::cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/cities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.cities.link() instead.
        "::link::category::cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/cities/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.cities.unlink() instead.
        "::unlink::category::cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/cities/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.cities.exists() instead.
        "::exists::category::cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/cities/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Category.cities() instead.
        "::get::category::cities": {
          isArray: true,
          url: urlBase + "/categories/:id/cities",
          method: "GET"
        },

        // INTERNAL. Use Category.cities.create() instead.
        "::create::category::cities": {
          url: urlBase + "/categories/:id/cities",
          method: "POST"
        },

        // INTERNAL. Use Category.cities.createMany() instead.
        "::createMany::category::cities": {
          isArray: true,
          url: urlBase + "/categories/:id/cities",
          method: "POST"
        },

        // INTERNAL. Use Category.cities.destroyAll() instead.
        "::delete::category::cities": {
          url: urlBase + "/categories/:id/cities",
          method: "DELETE"
        },

        // INTERNAL. Use Category.cities.count() instead.
        "::count::category::cities": {
          url: urlBase + "/categories/:id/cities/count",
          method: "GET"
        },

        // INTERNAL. Use Entity.city() instead.
        "::get::entity::city": {
          url: urlBase + "/entities/:id/city",
          method: "GET"
        },

        // INTERNAL. Use Advert.city() instead.
        "::get::advert::city": {
          url: urlBase + "/adverts/:id/city",
          method: "GET"
        },

        // INTERNAL. Use Country.cities.findById() instead.
        "::findById::country::cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/countries/:id/cities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Country.cities.destroyById() instead.
        "::destroyById::country::cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/countries/:id/cities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Country.cities.updateById() instead.
        "::updateById::country::cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/countries/:id/cities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Country.cities() instead.
        "::get::country::cities": {
          isArray: true,
          url: urlBase + "/countries/:id/cities",
          method: "GET"
        },

        // INTERNAL. Use Country.cities.create() instead.
        "::create::country::cities": {
          url: urlBase + "/countries/:id/cities",
          method: "POST"
        },

        // INTERNAL. Use Country.cities.createMany() instead.
        "::createMany::country::cities": {
          isArray: true,
          url: urlBase + "/countries/:id/cities",
          method: "POST"
        },

        // INTERNAL. Use Country.cities.destroyAll() instead.
        "::delete::country::cities": {
          url: urlBase + "/countries/:id/cities",
          method: "DELETE"
        },

        // INTERNAL. Use Country.cities.count() instead.
        "::count::country::cities": {
          url: urlBase + "/countries/:id/cities/count",
          method: "GET"
        },

        // INTERNAL. Use State.cities.findById() instead.
        "::findById::state::cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/states/:id/cities/:fk",
          method: "GET"
        },

        // INTERNAL. Use State.cities.destroyById() instead.
        "::destroyById::state::cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/states/:id/cities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use State.cities.updateById() instead.
        "::updateById::state::cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/states/:id/cities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use State.cities() instead.
        "::get::state::cities": {
          isArray: true,
          url: urlBase + "/states/:id/cities",
          method: "GET"
        },

        // INTERNAL. Use State.cities.create() instead.
        "::create::state::cities": {
          url: urlBase + "/states/:id/cities",
          method: "POST"
        },

        // INTERNAL. Use State.cities.createMany() instead.
        "::createMany::state::cities": {
          isArray: true,
          url: urlBase + "/states/:id/cities",
          method: "POST"
        },

        // INTERNAL. Use State.cities.destroyAll() instead.
        "::delete::state::cities": {
          url: urlBase + "/states/:id/cities",
          method: "DELETE"
        },

        // INTERNAL. Use State.cities.count() instead.
        "::count::state::cities": {
          url: urlBase + "/states/:id/cities/count",
          method: "GET"
        },

        // INTERNAL. Use Product.city() instead.
        "::get::product::city": {
          url: urlBase + "/products/:id/city",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.City#updateOrCreate
         * @methodOf lbServices.City
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.City#update
         * @methodOf lbServices.City
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.City#destroyById
         * @methodOf lbServices.City
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.City#removeById
         * @methodOf lbServices.City
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.City#modelName
    * @propertyOf lbServices.City
    * @description
    * The name of the model represented by this $resource,
    * i.e. `City`.
    */
    R.modelName = "City";


        /**
         * @ngdoc method
         * @name lbServices.City#state
         * @methodOf lbServices.City
         *
         * @description
         *
         * Fetches belongsTo relation state.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `State` object.)
         * </em>
         */
        R.state = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::get::city::state"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City#country
         * @methodOf lbServices.City
         *
         * @description
         *
         * Fetches belongsTo relation country.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Country` object.)
         * </em>
         */
        R.country = function() {
          var TargetResource = $injector.get("Country");
          var action = TargetResource["::get::city::country"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.City.categories
     * @header lbServices.City.categories
     * @object
     * @description
     *
     * The object `City.categories` groups methods
     * manipulating `Category` instances related to `City`.
     *
     * Call {@link lbServices.City#categories City.categories()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.City#categories
         * @methodOf lbServices.City
         *
         * @description
         *
         * Queries categories of city.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::city::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.categories#count
         * @methodOf lbServices.City.categories
         *
         * @description
         *
         * Counts categories of city.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.categories.count = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::count::city::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.categories#create
         * @methodOf lbServices.City.categories
         *
         * @description
         *
         * Creates a new instance in categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.create = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::create::city::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.categories#createMany
         * @methodOf lbServices.City.categories
         *
         * @description
         *
         * Creates a new instance in categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.createMany = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::createMany::city::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.categories#destroyAll
         * @methodOf lbServices.City.categories
         *
         * @description
         *
         * Deletes all categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.destroyAll = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::delete::city::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.categories#destroyById
         * @methodOf lbServices.City.categories
         *
         * @description
         *
         * Delete a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.destroyById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::destroyById::city::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.categories#exists
         * @methodOf lbServices.City.categories
         *
         * @description
         *
         * Check the existence of categories relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.exists = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::exists::city::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.categories#findById
         * @methodOf lbServices.City.categories
         *
         * @description
         *
         * Find a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.findById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::findById::city::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.categories#link
         * @methodOf lbServices.City.categories
         *
         * @description
         *
         * Add a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.link = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::link::city::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.categories#unlink
         * @methodOf lbServices.City.categories
         *
         * @description
         *
         * Remove the categories relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.unlink = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::unlink::city::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.categories#updateById
         * @methodOf lbServices.City.categories
         *
         * @description
         *
         * Update a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.updateById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::updateById::city::categories"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.City.entities
     * @header lbServices.City.entities
     * @object
     * @description
     *
     * The object `City.entities` groups methods
     * manipulating `Entity` instances related to `City`.
     *
     * Call {@link lbServices.City#entities City.entities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.City#entities
         * @methodOf lbServices.City
         *
         * @description
         *
         * Queries entities of city.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::get::city::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.entities#count
         * @methodOf lbServices.City.entities
         *
         * @description
         *
         * Counts entities of city.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.entities.count = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::count::city::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.entities#create
         * @methodOf lbServices.City.entities
         *
         * @description
         *
         * Creates a new instance in entities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities.create = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::create::city::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.entities#createMany
         * @methodOf lbServices.City.entities
         *
         * @description
         *
         * Creates a new instance in entities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities.createMany = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::createMany::city::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.entities#destroyAll
         * @methodOf lbServices.City.entities
         *
         * @description
         *
         * Deletes all entities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.entities.destroyAll = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::delete::city::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.entities#destroyById
         * @methodOf lbServices.City.entities
         *
         * @description
         *
         * Delete a related item by id for entities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.entities.destroyById = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::destroyById::city::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.entities#findById
         * @methodOf lbServices.City.entities
         *
         * @description
         *
         * Find a related item by id for entities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities.findById = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::findById::city::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.entities#updateById
         * @methodOf lbServices.City.entities
         *
         * @description
         *
         * Update a related item by id for entities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities.updateById = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::updateById::city::entities"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.City.adverts
     * @header lbServices.City.adverts
     * @object
     * @description
     *
     * The object `City.adverts` groups methods
     * manipulating `Advert` instances related to `City`.
     *
     * Call {@link lbServices.City#adverts City.adverts()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.City#adverts
         * @methodOf lbServices.City
         *
         * @description
         *
         * Queries adverts of city.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        R.adverts = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::get::city::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.adverts#count
         * @methodOf lbServices.City.adverts
         *
         * @description
         *
         * Counts adverts of city.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.adverts.count = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::count::city::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.adverts#create
         * @methodOf lbServices.City.adverts
         *
         * @description
         *
         * Creates a new instance in adverts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        R.adverts.create = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::create::city::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.adverts#createMany
         * @methodOf lbServices.City.adverts
         *
         * @description
         *
         * Creates a new instance in adverts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        R.adverts.createMany = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::createMany::city::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.adverts#destroyAll
         * @methodOf lbServices.City.adverts
         *
         * @description
         *
         * Deletes all adverts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.adverts.destroyAll = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::delete::city::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.adverts#destroyById
         * @methodOf lbServices.City.adverts
         *
         * @description
         *
         * Delete a related item by id for adverts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for adverts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.adverts.destroyById = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::destroyById::city::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.adverts#findById
         * @methodOf lbServices.City.adverts
         *
         * @description
         *
         * Find a related item by id for adverts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for adverts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        R.adverts.findById = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::findById::city::adverts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.City.adverts#updateById
         * @methodOf lbServices.City.adverts
         *
         * @description
         *
         * Update a related item by id for adverts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for adverts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Advert` object.)
         * </em>
         */
        R.adverts.updateById = function() {
          var TargetResource = $injector.get("Advert");
          var action = TargetResource["::updateById::city::adverts"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Chatroom
 * @header lbServices.Chatroom
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Chatroom` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Chatroom",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/chatrooms/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Chatroom.users.findById() instead.
        "prototype$__findById__users": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/chatrooms/:id/users/:fk",
          method: "GET"
        },

        // INTERNAL. Use Chatroom.users.destroyById() instead.
        "prototype$__destroyById__users": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/chatrooms/:id/users/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Chatroom.users.updateById() instead.
        "prototype$__updateById__users": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/chatrooms/:id/users/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Chatroom.users.link() instead.
        "prototype$__link__users": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/chatrooms/:id/users/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Chatroom.users.unlink() instead.
        "prototype$__unlink__users": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/chatrooms/:id/users/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Chatroom.users.exists() instead.
        "prototype$__exists__users": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/chatrooms/:id/users/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Chatroom.messages.findById() instead.
        "prototype$__findById__messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/chatrooms/:id/messages/:fk",
          method: "GET"
        },

        // INTERNAL. Use Chatroom.messages.destroyById() instead.
        "prototype$__destroyById__messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/chatrooms/:id/messages/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Chatroom.messages.updateById() instead.
        "prototype$__updateById__messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/chatrooms/:id/messages/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Chatroom.users() instead.
        "prototype$__get__users": {
          isArray: true,
          url: urlBase + "/chatrooms/:id/users",
          method: "GET"
        },

        // INTERNAL. Use Chatroom.users.create() instead.
        "prototype$__create__users": {
          url: urlBase + "/chatrooms/:id/users",
          method: "POST"
        },

        // INTERNAL. Use Chatroom.users.destroyAll() instead.
        "prototype$__delete__users": {
          url: urlBase + "/chatrooms/:id/users",
          method: "DELETE"
        },

        // INTERNAL. Use Chatroom.users.count() instead.
        "prototype$__count__users": {
          url: urlBase + "/chatrooms/:id/users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#__get__unread
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Queries unread of chatroom.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        "__get__unread": {
          isArray: true,
          url: urlBase + "/chatrooms/unread",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#__create__unread
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Creates a new instance in unread of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        "__create__unread": {
          url: urlBase + "/chatrooms/unread",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#__delete__unread
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Deletes all unread of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "__delete__unread": {
          url: urlBase + "/chatrooms/unread",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#__count__unread
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Counts unread of chatroom.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "__count__unread": {
          url: urlBase + "/chatrooms/unread/count",
          method: "GET"
        },

        // INTERNAL. Use Chatroom.messages() instead.
        "prototype$__get__messages": {
          isArray: true,
          url: urlBase + "/chatrooms/:id/messages",
          method: "GET"
        },

        // INTERNAL. Use Chatroom.messages.create() instead.
        "prototype$__create__messages": {
          url: urlBase + "/chatrooms/:id/messages",
          method: "POST"
        },

        // INTERNAL. Use Chatroom.messages.destroyAll() instead.
        "prototype$__delete__messages": {
          url: urlBase + "/chatrooms/:id/messages",
          method: "DELETE"
        },

        // INTERNAL. Use Chatroom.messages.count() instead.
        "prototype$__count__messages": {
          url: urlBase + "/chatrooms/:id/messages/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#create
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/chatrooms",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#createMany
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/chatrooms",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#upsert
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/chatrooms",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#exists
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/chatrooms/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#findById
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/chatrooms/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#find
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/chatrooms",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#findOne
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/chatrooms/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#updateAll
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/chatrooms/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#deleteById
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/chatrooms/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#count
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/chatrooms/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#prototype$updateAttributes
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/chatrooms/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#createChangeStream
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/chatrooms/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#createroom
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `type` – `{string=}` -
         *
         *  - `users` – `{*=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `room` – `{object=}` -
         */
        "createroom": {
          url: urlBase + "/chatrooms/createroom",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#hide
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `id` – `{string=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `success` – `{boolean=}` -
         */
        "hide": {
          url: urlBase + "/chatrooms/hide",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#notification
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `title` – `{string=}` -
         *
         *  - `text` – `{string=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `notification` – `{object=}` -
         */
        "notification": {
          url: urlBase + "/chatrooms/notification",
          method: "POST"
        },

        // INTERNAL. Use Usuario.chatrooms.findById() instead.
        "::findById::usuario::chatrooms": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/chatrooms/:fk",
          method: "GET"
        },

        // INTERNAL. Use Usuario.chatrooms.destroyById() instead.
        "::destroyById::usuario::chatrooms": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/chatrooms/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Usuario.chatrooms.updateById() instead.
        "::updateById::usuario::chatrooms": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/chatrooms/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Usuario.chatrooms.link() instead.
        "::link::usuario::chatrooms": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/chatrooms/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Usuario.chatrooms.unlink() instead.
        "::unlink::usuario::chatrooms": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/chatrooms/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Usuario.chatrooms.exists() instead.
        "::exists::usuario::chatrooms": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/usuarios/:id/chatrooms/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Usuario.chatrooms() instead.
        "::get::usuario::chatrooms": {
          isArray: true,
          url: urlBase + "/usuarios/:id/chatrooms",
          method: "GET"
        },

        // INTERNAL. Use Usuario.chatrooms.create() instead.
        "::create::usuario::chatrooms": {
          url: urlBase + "/usuarios/:id/chatrooms",
          method: "POST"
        },

        // INTERNAL. Use Usuario.chatrooms.createMany() instead.
        "::createMany::usuario::chatrooms": {
          isArray: true,
          url: urlBase + "/usuarios/:id/chatrooms",
          method: "POST"
        },

        // INTERNAL. Use Usuario.chatrooms.destroyAll() instead.
        "::delete::usuario::chatrooms": {
          url: urlBase + "/usuarios/:id/chatrooms",
          method: "DELETE"
        },

        // INTERNAL. Use Usuario.chatrooms.count() instead.
        "::count::usuario::chatrooms": {
          url: urlBase + "/usuarios/:id/chatrooms/count",
          method: "GET"
        },

        // INTERNAL. Use Chatmessage.chatroom() instead.
        "::get::chatmessage::chatroom": {
          url: urlBase + "/chatmessages/:id/chatroom",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Chatroom#updateOrCreate
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#update
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#destroyById
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Chatroom#removeById
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Chatroom#modelName
    * @propertyOf lbServices.Chatroom
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Chatroom`.
    */
    R.modelName = "Chatroom";

    /**
     * @ngdoc object
     * @name lbServices.Chatroom.users
     * @header lbServices.Chatroom.users
     * @object
     * @description
     *
     * The object `Chatroom.users` groups methods
     * manipulating `Usuario` instances related to `Chatroom`.
     *
     * Call {@link lbServices.Chatroom#users Chatroom.users()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Chatroom#users
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Queries users of chatroom.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.users = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::chatroom::users"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chatroom.users#count
         * @methodOf lbServices.Chatroom.users
         *
         * @description
         *
         * Counts users of chatroom.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.users.count = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::count::chatroom::users"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chatroom.users#create
         * @methodOf lbServices.Chatroom.users
         *
         * @description
         *
         * Creates a new instance in users of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.users.create = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::create::chatroom::users"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chatroom.users#createMany
         * @methodOf lbServices.Chatroom.users
         *
         * @description
         *
         * Creates a new instance in users of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.users.createMany = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::createMany::chatroom::users"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chatroom.users#destroyAll
         * @methodOf lbServices.Chatroom.users
         *
         * @description
         *
         * Deletes all users of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.users.destroyAll = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::delete::chatroom::users"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chatroom.users#destroyById
         * @methodOf lbServices.Chatroom.users
         *
         * @description
         *
         * Delete a related item by id for users.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for users
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.users.destroyById = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::destroyById::chatroom::users"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chatroom.users#exists
         * @methodOf lbServices.Chatroom.users
         *
         * @description
         *
         * Check the existence of users relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for users
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.users.exists = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::exists::chatroom::users"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chatroom.users#findById
         * @methodOf lbServices.Chatroom.users
         *
         * @description
         *
         * Find a related item by id for users.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for users
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.users.findById = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::findById::chatroom::users"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chatroom.users#link
         * @methodOf lbServices.Chatroom.users
         *
         * @description
         *
         * Add a related item by id for users.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for users
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.users.link = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::link::chatroom::users"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chatroom.users#unlink
         * @methodOf lbServices.Chatroom.users
         *
         * @description
         *
         * Remove the users relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for users
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.users.unlink = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::unlink::chatroom::users"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chatroom.users#updateById
         * @methodOf lbServices.Chatroom.users
         *
         * @description
         *
         * Update a related item by id for users.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for users
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.users.updateById = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::updateById::chatroom::users"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Chatroom.messages
     * @header lbServices.Chatroom.messages
     * @object
     * @description
     *
     * The object `Chatroom.messages` groups methods
     * manipulating `Chatmessage` instances related to `Chatroom`.
     *
     * Call {@link lbServices.Chatroom#messages Chatroom.messages()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Chatroom#messages
         * @methodOf lbServices.Chatroom
         *
         * @description
         *
         * Queries messages of chatroom.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatmessage` object.)
         * </em>
         */
        R.messages = function() {
          var TargetResource = $injector.get("Chatmessage");
          var action = TargetResource["::get::chatroom::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chatroom.messages#count
         * @methodOf lbServices.Chatroom.messages
         *
         * @description
         *
         * Counts messages of chatroom.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.messages.count = function() {
          var TargetResource = $injector.get("Chatmessage");
          var action = TargetResource["::count::chatroom::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chatroom.messages#create
         * @methodOf lbServices.Chatroom.messages
         *
         * @description
         *
         * Creates a new instance in messages of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatmessage` object.)
         * </em>
         */
        R.messages.create = function() {
          var TargetResource = $injector.get("Chatmessage");
          var action = TargetResource["::create::chatroom::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chatroom.messages#createMany
         * @methodOf lbServices.Chatroom.messages
         *
         * @description
         *
         * Creates a new instance in messages of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatmessage` object.)
         * </em>
         */
        R.messages.createMany = function() {
          var TargetResource = $injector.get("Chatmessage");
          var action = TargetResource["::createMany::chatroom::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chatroom.messages#destroyAll
         * @methodOf lbServices.Chatroom.messages
         *
         * @description
         *
         * Deletes all messages of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.messages.destroyAll = function() {
          var TargetResource = $injector.get("Chatmessage");
          var action = TargetResource["::delete::chatroom::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chatroom.messages#destroyById
         * @methodOf lbServices.Chatroom.messages
         *
         * @description
         *
         * Delete a related item by id for messages.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for messages
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.messages.destroyById = function() {
          var TargetResource = $injector.get("Chatmessage");
          var action = TargetResource["::destroyById::chatroom::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chatroom.messages#findById
         * @methodOf lbServices.Chatroom.messages
         *
         * @description
         *
         * Find a related item by id for messages.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for messages
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatmessage` object.)
         * </em>
         */
        R.messages.findById = function() {
          var TargetResource = $injector.get("Chatmessage");
          var action = TargetResource["::findById::chatroom::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chatroom.messages#updateById
         * @methodOf lbServices.Chatroom.messages
         *
         * @description
         *
         * Update a related item by id for messages.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for messages
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatmessage` object.)
         * </em>
         */
        R.messages.updateById = function() {
          var TargetResource = $injector.get("Chatmessage");
          var action = TargetResource["::updateById::chatroom::messages"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Chatmessage
 * @header lbServices.Chatmessage
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Chatmessage` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Chatmessage",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/chatmessages/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Chatmessage.chatroom() instead.
        "prototype$__get__chatroom": {
          url: urlBase + "/chatmessages/:id/chatroom",
          method: "GET"
        },

        // INTERNAL. Use Chatmessage.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/chatmessages/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#create
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatmessage` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/chatmessages",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#createMany
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatmessage` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/chatmessages",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#upsert
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatmessage` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/chatmessages",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#exists
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/chatmessages/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#findById
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatmessage` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/chatmessages/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#find
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatmessage` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/chatmessages",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#findOne
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatmessage` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/chatmessages/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#updateAll
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/chatmessages/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#deleteById
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatmessage` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/chatmessages/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#count
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/chatmessages/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#prototype$updateAttributes
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatmessage` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/chatmessages/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#createChangeStream
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/chatmessages/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#sendDirect
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `message` – `{object=}` -
         */
        "sendDirect": {
          url: urlBase + "/chatmessages/direct",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#message
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `data` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `message` – `{object=}` -
         */
        "message": {
          url: urlBase + "/chatmessages/message",
          method: "POST"
        },

        // INTERNAL. Use Chatroom.messages.findById() instead.
        "::findById::chatroom::messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/chatrooms/:id/messages/:fk",
          method: "GET"
        },

        // INTERNAL. Use Chatroom.messages.destroyById() instead.
        "::destroyById::chatroom::messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/chatrooms/:id/messages/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Chatroom.messages.updateById() instead.
        "::updateById::chatroom::messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/chatrooms/:id/messages/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Chatroom.messages() instead.
        "::get::chatroom::messages": {
          isArray: true,
          url: urlBase + "/chatrooms/:id/messages",
          method: "GET"
        },

        // INTERNAL. Use Chatroom.messages.create() instead.
        "::create::chatroom::messages": {
          url: urlBase + "/chatrooms/:id/messages",
          method: "POST"
        },

        // INTERNAL. Use Chatroom.messages.createMany() instead.
        "::createMany::chatroom::messages": {
          isArray: true,
          url: urlBase + "/chatrooms/:id/messages",
          method: "POST"
        },

        // INTERNAL. Use Chatroom.messages.destroyAll() instead.
        "::delete::chatroom::messages": {
          url: urlBase + "/chatrooms/:id/messages",
          method: "DELETE"
        },

        // INTERNAL. Use Chatroom.messages.count() instead.
        "::count::chatroom::messages": {
          url: urlBase + "/chatrooms/:id/messages/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#updateOrCreate
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatmessage` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#update
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#destroyById
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatmessage` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#removeById
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatmessage` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Chatmessage#modelName
    * @propertyOf lbServices.Chatmessage
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Chatmessage`.
    */
    R.modelName = "Chatmessage";


        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#chatroom
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Fetches belongsTo relation chatroom.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chatroom` object.)
         * </em>
         */
        R.chatroom = function() {
          var TargetResource = $injector.get("Chatroom");
          var action = TargetResource["::get::chatmessage::chatroom"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#user
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::chatmessage::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Client
 * @header lbServices.Client
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Client` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Client",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/clients/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Client.entity() instead.
        "prototype$__get__entity": {
          url: urlBase + "/clients/:id/entity",
          method: "GET"
        },

        // INTERNAL. Use Client.usuario() instead.
        "prototype$__get__usuario": {
          url: urlBase + "/clients/:id/usuario",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#create
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/clients",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#createMany
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/clients",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#upsert
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/clients",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#exists
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/clients/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#findById
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/clients/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#find
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/clients",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#findOne
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/clients/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#updateAll
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/clients/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#deleteById
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/clients/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#count
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/clients/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#prototype$updateAttributes
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/clients/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Client#createChangeStream
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/clients/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Client#updateOrCreate
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Client#update
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Client#destroyById
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Client#removeById
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Client` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Client#modelName
    * @propertyOf lbServices.Client
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Client`.
    */
    R.modelName = "Client";


        /**
         * @ngdoc method
         * @name lbServices.Client#entity
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Fetches belongsTo relation entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entity = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::get::client::entity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Client#usuario
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Fetches belongsTo relation usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.usuario = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::client::usuario"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Product
 * @header lbServices.Product
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Product` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Product",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/products/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Product.entity() instead.
        "prototype$__get__entity": {
          url: urlBase + "/products/:id/entity",
          method: "GET"
        },

        // INTERNAL. Use Product.city() instead.
        "prototype$__get__city": {
          url: urlBase + "/products/:id/city",
          method: "GET"
        },

        // INTERNAL. Use Product.categories.findById() instead.
        "prototype$__findById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/categories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Product.categories.destroyById() instead.
        "prototype$__destroyById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/categories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Product.categories.updateById() instead.
        "prototype$__updateById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/categories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.categories.link() instead.
        "prototype$__link__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/categories/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.categories.unlink() instead.
        "prototype$__unlink__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/categories/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Product.categories.exists() instead.
        "prototype$__exists__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/categories/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__findById__ranks
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Find a related item by id for ranks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ranks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "prototype$__findById__ranks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/ranks/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__destroyById__ranks
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Delete a related item by id for ranks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ranks
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__ranks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/ranks/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__updateById__ranks
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Update a related item by id for ranks.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ranks
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "prototype$__updateById__ranks": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/ranks/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__findById__likes
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Find a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "prototype$__findById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/likes/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__destroyById__likes
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Delete a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/likes/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__updateById__likes
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Update a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "prototype$__updateById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/likes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.categories() instead.
        "prototype$__get__categories": {
          isArray: true,
          url: urlBase + "/products/:id/categories",
          method: "GET"
        },

        // INTERNAL. Use Product.categories.create() instead.
        "prototype$__create__categories": {
          url: urlBase + "/products/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use Product.categories.destroyAll() instead.
        "prototype$__delete__categories": {
          url: urlBase + "/products/:id/categories",
          method: "DELETE"
        },

        // INTERNAL. Use Product.categories.count() instead.
        "prototype$__count__categories": {
          url: urlBase + "/products/:id/categories/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__get__ranks
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Queries ranks of product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "prototype$__get__ranks": {
          isArray: true,
          url: urlBase + "/products/:id/ranks",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__create__ranks
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Creates a new instance in ranks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "prototype$__create__ranks": {
          url: urlBase + "/products/:id/ranks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__delete__ranks
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Deletes all ranks of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__ranks": {
          url: urlBase + "/products/:id/ranks",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__count__ranks
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Counts ranks of product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__ranks": {
          url: urlBase + "/products/:id/ranks/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__get__likes
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Queries likes of product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "prototype$__get__likes": {
          isArray: true,
          url: urlBase + "/products/:id/likes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__create__likes
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "prototype$__create__likes": {
          url: urlBase + "/products/:id/likes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__delete__likes
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Deletes all likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__likes": {
          url: urlBase + "/products/:id/likes",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__count__likes
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Counts likes of product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__likes": {
          url: urlBase + "/products/:id/likes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#create
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/products",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#createMany
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/products",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#upsert
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/products",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#exists
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/products/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#findById
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/products/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#find
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/products",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#findOne
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/products/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#updateAll
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/products/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#deleteById
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/products/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#count
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/products/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$updateAttributes
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/products/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#createChangeStream
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/products/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#search
         * @methodOf lbServices.Product
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `like` – `{string=}` -
         *
         *  - `cityId` – `{string=}` -
         *
         *  - `usuarioId` – `{string=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `results` – `{*=}` -
         */
        "search": {
          url: urlBase + "/products/search",
          method: "GET"
        },

        // INTERNAL. Use Category.products.findById() instead.
        "::findById::category::products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/products/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.products.destroyById() instead.
        "::destroyById::category::products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/products/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.products.updateById() instead.
        "::updateById::category::products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/products/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.products.link() instead.
        "::link::category::products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/products/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.products.unlink() instead.
        "::unlink::category::products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/products/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.products.exists() instead.
        "::exists::category::products": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/categories/:id/products/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Category.products() instead.
        "::get::category::products": {
          isArray: true,
          url: urlBase + "/categories/:id/products",
          method: "GET"
        },

        // INTERNAL. Use Category.products.create() instead.
        "::create::category::products": {
          url: urlBase + "/categories/:id/products",
          method: "POST"
        },

        // INTERNAL. Use Category.products.createMany() instead.
        "::createMany::category::products": {
          isArray: true,
          url: urlBase + "/categories/:id/products",
          method: "POST"
        },

        // INTERNAL. Use Category.products.destroyAll() instead.
        "::delete::category::products": {
          url: urlBase + "/categories/:id/products",
          method: "DELETE"
        },

        // INTERNAL. Use Category.products.count() instead.
        "::count::category::products": {
          url: urlBase + "/categories/:id/products/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Product#updateOrCreate
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Product#update
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Product#destroyById
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Product#removeById
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Product#modelName
    * @propertyOf lbServices.Product
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Product`.
    */
    R.modelName = "Product";


        /**
         * @ngdoc method
         * @name lbServices.Product#entity
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Fetches belongsTo relation entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entity = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::get::product::entity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product#city
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Fetches belongsTo relation city.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `City` object.)
         * </em>
         */
        R.city = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::get::product::city"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Product.categories
     * @header lbServices.Product.categories
     * @object
     * @description
     *
     * The object `Product.categories` groups methods
     * manipulating `Category` instances related to `Product`.
     *
     * Call {@link lbServices.Product#categories Product.categories()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Product#categories
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Queries categories of product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::product::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.categories#count
         * @methodOf lbServices.Product.categories
         *
         * @description
         *
         * Counts categories of product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.categories.count = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::count::product::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.categories#create
         * @methodOf lbServices.Product.categories
         *
         * @description
         *
         * Creates a new instance in categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.create = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::create::product::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.categories#createMany
         * @methodOf lbServices.Product.categories
         *
         * @description
         *
         * Creates a new instance in categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.createMany = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::createMany::product::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.categories#destroyAll
         * @methodOf lbServices.Product.categories
         *
         * @description
         *
         * Deletes all categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.destroyAll = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::delete::product::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.categories#destroyById
         * @methodOf lbServices.Product.categories
         *
         * @description
         *
         * Delete a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.destroyById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::destroyById::product::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.categories#exists
         * @methodOf lbServices.Product.categories
         *
         * @description
         *
         * Check the existence of categories relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.exists = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::exists::product::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.categories#findById
         * @methodOf lbServices.Product.categories
         *
         * @description
         *
         * Find a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.findById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::findById::product::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.categories#link
         * @methodOf lbServices.Product.categories
         *
         * @description
         *
         * Add a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.link = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::link::product::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.categories#unlink
         * @methodOf lbServices.Product.categories
         *
         * @description
         *
         * Remove the categories relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.unlink = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::unlink::product::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.categories#updateById
         * @methodOf lbServices.Product.categories
         *
         * @description
         *
         * Update a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.updateById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::updateById::product::categories"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Horario
 * @header lbServices.Horario
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Horario` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Horario",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/horarios/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Horario.entity() instead.
        "prototype$__get__entity": {
          url: urlBase + "/horarios/:id/entity",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Horario#create
         * @methodOf lbServices.Horario
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Horario` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/horarios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Horario#createMany
         * @methodOf lbServices.Horario
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Horario` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/horarios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Horario#upsert
         * @methodOf lbServices.Horario
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Horario` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/horarios",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Horario#exists
         * @methodOf lbServices.Horario
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/horarios/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Horario#findById
         * @methodOf lbServices.Horario
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Horario` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/horarios/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Horario#find
         * @methodOf lbServices.Horario
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Horario` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/horarios",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Horario#findOne
         * @methodOf lbServices.Horario
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Horario` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/horarios/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Horario#updateAll
         * @methodOf lbServices.Horario
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/horarios/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Horario#deleteById
         * @methodOf lbServices.Horario
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Horario` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/horarios/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Horario#count
         * @methodOf lbServices.Horario
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/horarios/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Horario#prototype$updateAttributes
         * @methodOf lbServices.Horario
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Horario` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/horarios/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Horario#createChangeStream
         * @methodOf lbServices.Horario
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/horarios/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Entity.hours.findById() instead.
        "::findById::entity::hours": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/hours/:fk",
          method: "GET"
        },

        // INTERNAL. Use Entity.hours.destroyById() instead.
        "::destroyById::entity::hours": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/hours/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.hours.updateById() instead.
        "::updateById::entity::hours": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entities/:id/hours/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entity.hours() instead.
        "::get::entity::hours": {
          isArray: true,
          url: urlBase + "/entities/:id/hours",
          method: "GET"
        },

        // INTERNAL. Use Entity.hours.create() instead.
        "::create::entity::hours": {
          url: urlBase + "/entities/:id/hours",
          method: "POST"
        },

        // INTERNAL. Use Entity.hours.createMany() instead.
        "::createMany::entity::hours": {
          isArray: true,
          url: urlBase + "/entities/:id/hours",
          method: "POST"
        },

        // INTERNAL. Use Entity.hours.destroyAll() instead.
        "::delete::entity::hours": {
          url: urlBase + "/entities/:id/hours",
          method: "DELETE"
        },

        // INTERNAL. Use Entity.hours.count() instead.
        "::count::entity::hours": {
          url: urlBase + "/entities/:id/hours/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Horario#updateOrCreate
         * @methodOf lbServices.Horario
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Horario` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Horario#update
         * @methodOf lbServices.Horario
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Horario#destroyById
         * @methodOf lbServices.Horario
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Horario` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Horario#removeById
         * @methodOf lbServices.Horario
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Horario` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Horario#modelName
    * @propertyOf lbServices.Horario
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Horario`.
    */
    R.modelName = "Horario";


        /**
         * @ngdoc method
         * @name lbServices.Horario#entity
         * @methodOf lbServices.Horario
         *
         * @description
         *
         * Fetches belongsTo relation entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entity = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::get::horario::entity"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Subscription
 * @header lbServices.Subscription
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Subscription` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Subscription",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/subscriptions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Subscription.entities.findById() instead.
        "prototype$__findById__entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/subscriptions/:id/entities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Subscription.entities.destroyById() instead.
        "prototype$__destroyById__entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/subscriptions/:id/entities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Subscription.entities.updateById() instead.
        "prototype$__updateById__entities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/subscriptions/:id/entities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Subscription.entities() instead.
        "prototype$__get__entities": {
          isArray: true,
          url: urlBase + "/subscriptions/:id/entities",
          method: "GET"
        },

        // INTERNAL. Use Subscription.entities.create() instead.
        "prototype$__create__entities": {
          url: urlBase + "/subscriptions/:id/entities",
          method: "POST"
        },

        // INTERNAL. Use Subscription.entities.destroyAll() instead.
        "prototype$__delete__entities": {
          url: urlBase + "/subscriptions/:id/entities",
          method: "DELETE"
        },

        // INTERNAL. Use Subscription.entities.count() instead.
        "prototype$__count__entities": {
          url: urlBase + "/subscriptions/:id/entities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subscription#create
         * @methodOf lbServices.Subscription
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subscription` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/subscriptions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subscription#createMany
         * @methodOf lbServices.Subscription
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subscription` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/subscriptions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subscription#upsert
         * @methodOf lbServices.Subscription
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subscription` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/subscriptions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subscription#exists
         * @methodOf lbServices.Subscription
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/subscriptions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subscription#findById
         * @methodOf lbServices.Subscription
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subscription` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/subscriptions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subscription#find
         * @methodOf lbServices.Subscription
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subscription` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/subscriptions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subscription#findOne
         * @methodOf lbServices.Subscription
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subscription` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/subscriptions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subscription#updateAll
         * @methodOf lbServices.Subscription
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/subscriptions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subscription#deleteById
         * @methodOf lbServices.Subscription
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subscription` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/subscriptions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subscription#count
         * @methodOf lbServices.Subscription
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/subscriptions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subscription#prototype$updateAttributes
         * @methodOf lbServices.Subscription
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subscription` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/subscriptions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Subscription#createChangeStream
         * @methodOf lbServices.Subscription
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/subscriptions/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Entity.subscription() instead.
        "::get::entity::subscription": {
          url: urlBase + "/entities/:id/subscription",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Subscription#updateOrCreate
         * @methodOf lbServices.Subscription
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subscription` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Subscription#update
         * @methodOf lbServices.Subscription
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Subscription#destroyById
         * @methodOf lbServices.Subscription
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subscription` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Subscription#removeById
         * @methodOf lbServices.Subscription
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Subscription` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Subscription#modelName
    * @propertyOf lbServices.Subscription
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Subscription`.
    */
    R.modelName = "Subscription";

    /**
     * @ngdoc object
     * @name lbServices.Subscription.entities
     * @header lbServices.Subscription.entities
     * @object
     * @description
     *
     * The object `Subscription.entities` groups methods
     * manipulating `Entity` instances related to `Subscription`.
     *
     * Call {@link lbServices.Subscription#entities Subscription.entities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Subscription#entities
         * @methodOf lbServices.Subscription
         *
         * @description
         *
         * Queries entities of subscription.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::get::subscription::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subscription.entities#count
         * @methodOf lbServices.Subscription.entities
         *
         * @description
         *
         * Counts entities of subscription.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.entities.count = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::count::subscription::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subscription.entities#create
         * @methodOf lbServices.Subscription.entities
         *
         * @description
         *
         * Creates a new instance in entities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities.create = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::create::subscription::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subscription.entities#createMany
         * @methodOf lbServices.Subscription.entities
         *
         * @description
         *
         * Creates a new instance in entities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities.createMany = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::createMany::subscription::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subscription.entities#destroyAll
         * @methodOf lbServices.Subscription.entities
         *
         * @description
         *
         * Deletes all entities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.entities.destroyAll = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::delete::subscription::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subscription.entities#destroyById
         * @methodOf lbServices.Subscription.entities
         *
         * @description
         *
         * Delete a related item by id for entities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.entities.destroyById = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::destroyById::subscription::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subscription.entities#findById
         * @methodOf lbServices.Subscription.entities
         *
         * @description
         *
         * Find a related item by id for entities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities.findById = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::findById::subscription::entities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Subscription.entities#updateById
         * @methodOf lbServices.Subscription.entities
         *
         * @description
         *
         * Update a related item by id for entities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entity` object.)
         * </em>
         */
        R.entities.updateById = function() {
          var TargetResource = $injector.get("Entity");
          var action = TargetResource["::updateById::subscription::entities"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Container
 * @header lbServices.Container
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Container` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Container",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/containers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Container#getContainers
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getContainers": {
          isArray: true,
          url: urlBase + "/containers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#createContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "createContainer": {
          url: urlBase + "/containers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#destroyContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        "destroyContainer": {
          url: urlBase + "/containers/:container",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getContainer": {
          url: urlBase + "/containers/:container",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getFiles
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getFiles": {
          isArray: true,
          url: urlBase + "/containers/:container/files",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getFile
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` -
         *
         *  - `file` – `{string=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getFile": {
          url: urlBase + "/containers/:container/files/:file",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#removeFile
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` -
         *
         *  - `file` – `{string=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        "removeFile": {
          url: urlBase + "/containers/:container/files/:file",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#upload
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` -
         *
         *  - `res` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` -
         */
        "upload": {
          url: urlBase + "/containers/:container/upload",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#download
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` -
         *
         *  - `file` – `{string=}` -
         *
         *  - `req` – `{object=}` -
         *
         *  - `res` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "download": {
          url: urlBase + "/containers/:container/download/:file",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Container#modelName
    * @propertyOf lbServices.Container
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Container`.
    */
    R.modelName = "Container";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);

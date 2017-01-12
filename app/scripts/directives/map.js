var app = angular.module('azWebAppApp');

app.directive('mapa', function ($interpolate) {
    return {
        restrict: 'E',
        // template: '<div id="mapProtector"><div id="map" class="mapa" style="width: 100%; height: 450px; margin-top: 20px;"></div></div>',
        template: '<h1>YES!</h1>'
        // link    : function (scope, elem, attrs) {

        //     var geocoder;
        //     var map;

        //     console.log('DIRECTIVE', attrs);

        //     // if (attrs.full) {
        //     //   angular.element('#map').css('height', '87vh');
        //     // }

        //     // $("#map").on('hover', function(e) {
        //     //   //console.log(e);
        //     //   $("#mapProtector").css('display', 'block');
        //     // });

        //     attrs.$observe('dir', function (value) {

        //         var _dirs = JSON.parse(attrs.dir);

        //         // console.log(_dirs);

        //         var mapOptions = {
        //             zoom     : 19,
        //             mapTypeId: google.maps.MapTypeId.ROADMAP,
        //             scrollwheel: false
        //         };
        //         map            = new google.maps.Map(document.getElementById("map"), mapOptions);

        //         map.addListener('mouseover', function(e) {
        //           //console.log('over mouse');
        //         });

        //         map.setCenter(new google.maps.LatLng(-32.917961, -60.812714), 20);

        //         geocoder = new google.maps.Geocoder();

        //         angular.forEach(_dirs, function(entity, value) {
        //             //console.log(_dirs[i].address);
        //            //console.log(status);

        //           //console.log('MAPPING', entity, value);

        //                   //console.log(entity);

        //                     if (entity.active) {
        //                       var marker = new google.maps.Marker({
        //                           map      : map,
        //                           position : entity.direction,
        //                           icon     : {
        //                             url: 'images/marker.png',
        //                             size: new google.maps.Size(41, 41)
        //                           },
        //                           animation: google.maps.Animation.DROP
        //                       });

        //                       marker.addListener('click', function () {
        //                           contentString =
        //                               '<div class="mapContentWrapper" style="text-align: center; background: white; color: black;">' +
        //                               '<div class="entityHeader" style="margin-bottom:5px; font-size:18px;">' + entity.name + '</div>' +
        //                               '<img src="' + entity.imageUrl + '" width="65" style="border-radius: 30px;"></img>' +
        //                               '<div class="entityBody" style="color: black;">' +
        //                                '<div style="color: black; margin-top: 5px;">' + entity.address + '</div> ' +
        //                                  '<div style="color: black">' + entity.telephone + '</div> ' +
        //                                 '<a style="color: blue;" href="http://www.' + entity.subdomain.name + '.arg.az" target="_blank">www.' + entity.subdomain.name + '.arg.az</a>' +
        //                               '</div>' +
        //                               '</div>';
        //                           infowindow    = new google.maps.InfoWindow({
        //                               content: contentString
        //                           });

        //                           infowindow.open(map, marker);

        //                         });
        //                     } else {
        //                       //console.log('http://104.131.113.114:3004/api/containers/category_' + entity.categoryId + '/download/logo.image');
        //                       var marker = new google.maps.Marker({
        //                           map      : map,
        //                           position : entity.direction,
        //                           icon     : {
        //                             url: 'images/unmarker.png',
        //                             size: new google.maps.Size(41, 41)
        //                           },
        //                           animation: google.maps.Animation.DROP
        //                       });

        //                       marker.addListener('click', function () {
        //                           contentString =
        //                               '<div class="mapContentWrapper" style="text-align: center; background: white; color: black;">' +
        //                               '<div class="entityHeader" style="margin-bottom:5px; font-size:18px;">' + entity.name + '</div>' +
        //                               '<div style="background: black; border-radius:30px; width: 67px; position: relative; margin: 0 auto;"><img src="' + 'http://104.131.113.114:3004/api/containers/category_' + entity.categoryId + '/download/logo.image' + '" width="65" style="border-radius: 30px;"></img></div>' +
        //                               '<div class="entityBody" style="color: black;">' +
        //                                '<div style="color: black; margin-top: 5px;">' + entity.address + '</div> ' +
        //                                  '<div style="color: black">' + entity.telephone + '</div> ' +
        //                               '</div>' +
        //                               '</div>';
        //                           infowindow    = new google.maps.InfoWindow({
        //                               content: contentString
        //                           });

        //                           infowindow.open(map, marker);

        //                         });
        //                     }


        //         });
        //     });

        // }
    }
});
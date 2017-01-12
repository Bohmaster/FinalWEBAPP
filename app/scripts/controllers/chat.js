'use strict';

/**
 * @ngdoc function
 * @name azWebAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the azWebAppApp
 */
angular.module('azWebAppApp')
  .controller('ChatController', function ($scope, $state, Usuario, $stateParams) {
    $scope.chatrooms = [];

        if (!$stateParams.chatroomId) {
            loadChatRooms();
        };

        $scope.goToChat = function(chatroom, owner) {
            console.log(chatroom, owner, 'YES');
            $state.go('app.chat.result', {chatroomId: chatroom, owner: owner});
        }

        function loadChatRooms() {
            Usuario.chatrooms({
                id: localStorage.getItem('$LoopBack$currentUserId'),
                filter: {
                    include: 'users',
                    order: 'last_activity ASC'
                }
            }).$promise
                .then(function(chatrooms) {
                    $scope.chatrooms = chatrooms;
                    console.log(chatrooms[0].id, 'chat');

                    $state.go('app.chat.result', {chatroomId: chatrooms[0].id})
                });
        }
  });

  angular.module('azWebAppApp')
    .controller('ChatResultController', function ($rootScope, $scope, $stateParams, $timeout, Usuario, Chatroom, Chatmessage) {
        var roomId = $stateParams.chatroomId;
        $scope.me  = localStorage.getItem('$LoopBack$currentUserId');
        
        $stateParams.owner.id;
        console.log($stateParams);  
        
        Chatroom.prototype$updateAttributes({ id: roomId }, {
            unread: false
        }).$promise
            .then(function (chatroom) {
                console.log('CHATROOM', chatroom);
                $('.messages').removeClass('yellow');
                $rootScope.unreadRooms = [];
                localStorage.removeItem('unread_rooms');
            });       
        
        console.log('After class');

        $scope.messages = [];

        getMessages();

        $scope.sendMessage = function () {
            
            console.log('Sending message');
            
 
            Chatmessage.message({
                data: {
                    type: 'message',
                    text: $scope.data.text,
                    to: ownerId
                }
            }, function (success) {
                console.log(success.message);
                $scope.data.text = '';
            }, function (err) {
                console.log(err);
            }); 

        };

        function getMessages() {
            Chatroom.messages({
                id    : roomId,
                filter: {
                    include: 'user'
                }
            }).$promise
                .then(function (messages) {
                    $scope.messages = messages;
                    console.log(messages);

                    $timeout(function() {
                        var overflow = angular.element('#chat');
                        overflow[0].scrollTop = overflow[0].scrollHeight;
                    }, 0);
                });
        }

        $scope.$on('new-message-received', function(e, data) {
            console.log(e, data);
            if (data.content.chatroomId == roomId) {
                $scope.$apply(function() {
                    $scope.messages.push(data.content);
                    $timeout(function() {
                        var overflow = angular.element('#chat');
                        overflow[0].scrollTop = overflow[0].scrollHeight;
                    }, 0);
                })
            }
        })
    });
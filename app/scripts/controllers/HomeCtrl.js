(function() {
    function HomeCtrl(Room, Message, $scope) {
      var rooms = Room.all;
      this.rooms = rooms;

      rooms.$loaded().then(function(rooms) {
          var key1 = '-KkBGz1pHPH1R6etqkKK';
          room = rooms.$getRecord(key1);

          $scope.currentRoom = room;
          $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
      });

      this.changeRoom = function(room) {
          $scope.currentRoom = room;
          $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
      };

      this.send = Message.send;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$scope', HomeCtrl]);
})();

angular.module('starter.controllers', [])
//aQUI SE TIENE TODA LA FUNCIONALIDAD
.controller('DashCtrl', function($scope) {

  $scope.tareas = [
    { title: 'Comprar la leche', desc: 'Comprar 2 litros' },
    { title: 'Ir por las tortillas', desc: '5 kilos' },
    { title: 'Comprar pan', desc: 'Comprar 10 panes ricos' },
    { title: 'Hacer regalo de Mari', desc: 'Algo bonito con hojas de colores' },
    { title: 'Sacar a manchas', desc: 'Y cuidar que no se pelee con el gato' },
    { title: 'Jugar Xbox', desc: '5 horas de halo' }
  ]

})
//Scope es el alcance, es uan variable global que existe en controllers
//No tiene una propiedad de chats pero se la estamos agregando
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

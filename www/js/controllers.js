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
.controller('ChatsCtrl', function($scope, $http) {
  $http.get('http://api.citybik.es/v2/networks/ecobici')
      .success(function(response) {
        $scope.estaciones = response.network.stations
      })
      .error(function(error) {
        console.log("Error " + error)
      });
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

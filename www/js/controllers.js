angular.module('future_me.controllers', [])

  .run(function($state, $rootScope) {
    $rootScope.$on('$stateChangeSuccess', function (evt, toState) {
      console.log('stateChangeSuccess');
      if (toState.headerChangeColor) {
        $rootScope.headerChangeColor = true;
      } else {
        $rootScope.headerChangeColor = false;
      }
    });
  });

  .controller('cardsCtrl', function ($scope, TDCardDelegate) {

    $scope.cards = [
      {title: "bagare", image: "chef.jpg"},
      {title: "sjuksköterska", image: "nurse.png"}
    ];
  })

  .controller('DescriptionController', function() {
    console.log('description controller');
  });


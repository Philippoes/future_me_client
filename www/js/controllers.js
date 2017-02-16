angular.module('future_me', ['ionic'])

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



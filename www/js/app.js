// Ionic futureme App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('futureme', ['ionic', 'futureme.controllers', 'futureme.directives', 'futureme.services', 'ionic.contrib.ui.tinderCards2', 'ngStorage'])

  .directive('noScroll', function ($document) {

    return {
      restrict: 'A',
      link: function ($scope, $element, $attr) {

        $document.on('touchmove', function (e) {
          e.preventDefault();
        });
      }
    }
  })

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('suggestions', {
        url: '/suggestions',
        templateUrl: 'templates/suggestions.html',
        controller: 'cardsCtrl'
      })

      .state('description', {
        url: '/description',
        templateUrl: 'templates/description/description.html',
        controller: 'descriptionCtrl'
      })

      .state('library', {
        url: '/library',
        templateUrl: 'templates/library/library.html',
        controller: 'libraryController'
      })

      .state('path', {
        url: '/path',
        templateUrl: 'templates/path.html',
        controller: 'pathCtrl'
      });

    $urlRouterProvider.otherwise('/suggestions');
  });

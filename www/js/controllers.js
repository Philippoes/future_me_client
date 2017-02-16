angular.module('futureme.controllers', [])

  .controller('cardsCtrl', function ($scope, TDCardDelegate, $timeout) {

    var cardTypes = [{title: "bagare", image: "chef.png"},
      {title: "sjuksköterska", image: "nurse.png"},
      {title: "läkare", image: "nurse.png"}];

    $scope.cards = {
      master: Array.prototype.slice.call(cardTypes, 0),
      active: Array.prototype.slice.call(cardTypes, 0),
      discards: [],
      liked: [],
      disliked: []
    };

    $scope.addCard = function () {
      var newCard = cardTypes[0];
      $scope.cards.active.push(angular.extend({}, newCard));
    };

    $scope.refreshCards = function () {
      $scope.cards.active = null;
      $timeout(function () {
        $scope.cards.active = Array.prototype.slice.call($scope.cards.master, 0);
      });
    };

    $scope.$on('removeCard', function (event, element, card) {
      var discarded = $scope.cards.master.splice($scope.cards.master.indexOf(card), 1);
      $scope.cards.discards.push(discarded);
    });

    $scope.cardSwipedLeft = function (index) {
      console.log('LEFT SWIPE');
      var card = $scope.cards.active[index];
      $scope.cards.disliked.push(card);
      if (index === $scope.cards.active.length - 1)
        $scope.refreshCards();
    };

    $scope.cardSwipedRight = function (index) {
      console.log('RIGHT SWIPE');
      var card = $scope.cards.active[index];
      $scope.cards.liked.push(card);
      if (index === $scope.cards.active.length - 1)
        $scope.refreshCards();
    };
  })

  .controller('cardCtrl', function ($scope, TDCardDelegate) {
  });


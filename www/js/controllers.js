angular.module('futureme.controllers', [])

  .controller('cardsCtrl', function ($scope, TDCardDelegate, $timeout) {

    var cardTypes = [{title: "bagare", image: "chef.png"},
      {title: "sjuksköterska", image: "nurse.png"},
      {title: "läkare", image: "nurse.png"},
      {title: "Undersköterska", image: "nurse.png"},
      {title: "psykolog", image: "nurse.png"}];

    $scope.cards = {
      master: Array.prototype.slice.call(cardTypes, 0),
      active: Array.prototype.slice.call(cardTypes, 0)
    };

    $scope.cardDestroyed = function(index) {
      $scope.cards.active.splice(index, 1);
      if ($scope.cards.active.length === 0)
        $scope.refreshCards();
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

    $scope.cardSwipedLeft = function (index) {
    };

    $scope.cardSwipedRight = function (index) {
    };
  })

  .controller('cardCtrl', function ($scope, TDCardDelegate) {
  });


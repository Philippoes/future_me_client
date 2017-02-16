angular.module('futureme.controllers', [])

  .controller('cardsCtrl', function ($scope, TDCardDelegate) {

    var cardTypes = [
      {title: "bagare", image: "chef.png"},
      {title: "sjuksköterska", image: "nurse.png"}
    ];

    $scope.cardDestroyed = function () {
      // $scope.cards.splice(index, 1);
      var card = [];
      card.push($scope.cards[0]);
      $scope.cards.shift();
      $scope.cards.push(card[0]);
    };

    $scope.cards = [{title: "bagare", image: "chef.png"},  {title: "sjuksköterska", image: "nurse.png"}];
    $scope.addCard = function () {
      console.log('addcard: ' + $scope.$id);
      for (var i = 0; i < cardTypes.lenght; i++) {
        $scope.cards[i].push(cardTypes[i]);
      }
      // var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
      // newCard.id = Math.random();
      // $scope.cards.push(angular.extend({}, newCard));
    };
  });

  // .controller('cardCtrl', function ($scope, TDCardDelegate) {
  //   $scope.cardSwipedLeft = function (index) {
  //     console.log('LEFT SWIPE');
  //     $scope.addCard();
  //   };
  //   $scope.cardSwipedRight = function (index) {
  //     console.log('RIGHT SWIPE');
  //     $scope.addCard();
  //   };
  // });

angular.module("futureme.services", [])

.factory ('StorageService', function ($localStorage) {
  $localStorage = $localStorage.$default({
    things: [
      {
        id: 1,
        title: "bagare",
        image: "Bagare.png"
      },
      {
        id: 2,
        title: "sjuksköterska",
        image: "Sjuksköterska.png"
      },
      {
        id: 3,
        title: "möbeldesigner",
        image: "Mobeldes.png"
      },
      {
        id: 4,
        title: "läkare",
        image: "Sjuksköterska.png"
      }
    ]
  });

  var _getAll = function () {
    return $localStorage.things;
  };
  var _add = function (thing) {
    $localStorage.things.push(thing);
  };
  var _remove = function (thing) {
    $localStorage.things.splice($localStorage.things.indexOf(thing), 1);
  };
  return {
    getAll: _getAll,
    add: _add,
    remove: _remove
  };
});

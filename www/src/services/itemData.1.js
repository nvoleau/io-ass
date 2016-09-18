'use strict';

// var items = ["assurance":{ "id": "6", "name": "TEST", "contrat": "3255" }];
//var items = [];

var items = [{ "id": "1", "category": "assurance", "name": "MAIF", "contrat": "7854" }, { "id": "2", "category": "assurance", "name": "GMF", "contrat": "3255" }];

app.service('itemData', function ($q, $ionicPlatform, $cordovaFile) { //  

    this.getDataDev = function () {
        return items;
    }
    this.getData = function () {
        var deferred = $q.defer();
        $ionicPlatform.ready(function () {      // READ            
            $cordovaFile.readAsText(cordova.file.dataDirectory, dataFile)
              .then(function (success) {        // success 
                  items = JSON.parse(success);
                  deferred.resolve(items);
              }, function (error) {             // error                  
                  deferred.reject(error);
              });
        });
        //alert("SUCCESS B : " + deferred.promise);
        return deferred.promise;
    }
    this.create = function (item) {
        /*
        if ((typeof item.name != "undefined") && (typeof item.contrat != "undefined") && (item.name != "") && (item.contrat != "")) {
            var refTab = items;
            alert("ok : " + refTab);

            for (var i in items) { var refID = items[i].id; }
            var num = parseInt(refID) + 1;
            item.id = num.toString();

            alert("id : " + item.id);

            $ionicPlatform.ready(function () {
               
                $cordovaFile.checkFile(cordova.file.dataDirectory, dataFile)
                  .then(function (success) {
                      // success
                      alert("SUCCESS 1: Le fichier des assurances existe bien >> " + success);
                      items.push(item);
                      alert("SUCCESS 12: puch  >> " + success);

                      $cordovaFile.writeFile(cordova.file.dataDirectory, dataFile, items, true)
                          .then(function (success) {
                              // success
                              alert("SUCCESS 2: l'écriture dans le fichier c'est bien déroulé >> " + success);
                          }, function (error) {
                              // error
                              alert("ERROR 1: l'écriture dans le fichier a échoué >> " + error);
                          });
                  }, function (error) {
                      // error
                      alert("ERROR 2: Le fichier des assurances n'existe pas ! >> " + error);

                      $cordovaFile.createFile(cordova.file.dataDirectory, dataFile, true)
                        .then(function (success) {
                            // success
                            alert("SUCCESS 3: Le fichier des assurances a bien été créé ! >> " + success);
                            items.push(item);
                            $cordovaFile.writeFile(cordova.file.dataDirectory, dataFile, items, true)
                                .then(function (success) {
                                    // success
                                    alert("SUCCESS 4: l'écriture dans le fichier c'est bien déroulé >> " + success);
                                }, function (error) {
                                    // error
                                    alert("ERROR 4: l'écriture dans le fichier a échoué >> " + error);
                                });
                        }, function (error) {
                            // error
                            alert("ERROR 3: Le fichier des assurances n'a pas pu être créé ! >> " + error);
                        });
                  });
            });
        }
        else {
            alert("Vous devez saisir le nom et le N° de contrat de l'assurance au minimum");
        }
        */
        return items;
    }
    /*
    this.modify = function (item) {
            return item;
        };
    */
});



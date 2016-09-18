'use strict';
/*
var items = [
    {"id":"2","name":"MAIF","contrat":"3.255.395.06B","green":"1245","DtDu":"11/11/1977","DtAu":"01/12/2999","AgName":"Dupont-Lajoie","AgAdrr":"rue de indépendance 11000 Trifouillis les Oies"},
    {"id":"3","name":"AGF","contrat":"78945-458","green":"878","DtDu":"15/12/1982","DtAu":"01/01/2099","AgName":"Bernard étoile","AgAdrr":"rue de la lune 11000 Terrevives"}
];
*/
var items = [{ "id": "1", "name": "MAIF", "contrat": "7854" }, { "id": "2", "name": "GMF", "contrat": "3255" }];
//var items = [{ "assurance" : [{ "id": "1", "name": "MAIF", "contrat": "7854" }, { "id": "2", "name": "GMF", "contrat": "3255" }] }];
// var items = ["assurance":{ "id": "6", "name": "TEST", "contrat": "3255" }];

app.service('itemProvider', function ($q, $ionicPlatform, $cordovaFile) { //  

    this.getItems = function () {
        var deferred = $q.defer();
        $ionicPlatform.ready(function () {
            // READ 
            $cordovaFile.readAsText(cordova.file.dataDirectory, "assuranceB.json")
              .then(function (success) {
                  // success 
                  items = JSON.parse(success);
                  alert("SUCCESS AA : " + items);
                  deferred.resolve(items);
                  alert("SUCCESS A : " + deferred.resolve(items));
              }, function (error) {
                  // error 
                  deferred.reject(error);
              });
        });
        alert("SUCCESS B : " + deferred.promise);
        // console.log("SUCCESS B : " + deferred.promise);
        return deferred.promise;
    }



       
    this.create = function (item) {
        
        if ((typeof item.name != "undefined") && (typeof item.contrat != "undefined") && (item.name != "") && (item.contrat != "")) {

            var refTab = items.assurance;
            alert("ok : " + refTab);

            for (var i in items.assurance) { var refID = items.assurance[i].id; }
            var num = parseInt(refID) + 1;
            item.id = num.toString();

            $ionicPlatform.ready(function () {
               
                $cordovaFile.checkFile(cordova.file.dataDirectory, dataFile)
                  .then(function (success) {
                      // success
                      //alert("SUCCESS 1: Le fichier des assurances existe bien >> " + success);
                      items.assurance.push(item);

                      $cordovaFile.writeFile(cordova.file.dataDirectory, dataFile, items, true)
                          .then(function (success) {
                              // success
                              //alert("SUCCESS 2: l'écriture dans le fichier c'est bien déroulé >> " + success);
                          }, function (error) {
                              // error
                              alert("ERROR 1: l'écriture dans le fichier a échoué >> " + error);
                          });
                  }, function (error) {
                      // error
                      // alert("ERROR 2: Le fichier des assurances n'existe pas ! >> " + error);

                      $cordovaFile.createFile(cordova.file.dataDirectory, dataFile, true)
                        .then(function (success) {
                            // success
                            //alert("Le fichier des assurances a bien été créé");
                            //alert("SUCCESS 3: Le fichier des assurances a bien été créé ! >> " + success);
                            items.push(item);
                            $cordovaFile.writeFile(cordova.file.dataDirectory, dataFile, items, true)
                                .then(function (success) {
                                    // success
                                    // alert("SUCCESS 4: l'écriture dans le fichier c'est bien déroulé >> " + success);
                                }, function (error) {
                                    // error
                                    alert("ERROR 4: l'écriture dans le fichier a échoué >> " + error);
                                });
                        }, function (error) {
                            // error
                            //alert("Le fichier des assurances n'a pas pu être créé !");
                            alert("ERROR 3: Le fichier des assurances n'a pas pu être créé ! >> " + error);
                        });
                  });
                  
            });

        }
        else {
            alert("Vous devez saisir le nom et le N° de contrat de l'assurance au minimum");
        }
        return items;
    };



});



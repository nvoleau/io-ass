'use strict';



app
  .controller('constatCompletForm', function ($scope, $state, $rootScope, $stateParams, $ionicHistory, $ionicSideMenuDelegate, constatData) {

    $scope.enregistrer = 1;

    $scope.toggleLeft = function () {
      $ionicSideMenuDelegate.toggleLeft();
    };





    if ($stateParams.id) { //on vient de la vue initiale
      constatData.getByIdConstat($stateParams.id).then(function (res) {
        $rootScope.constat = res;
        $scope.enregistrer = 2;

        $scope.date_constat = $rootScope.constat.date_constat;
        //a refaire
        //init vue fiche


        if ($rootScope.constat.ficheAccident != "") {
          //console.log('-circonstance-' + $rootScope.constat.ficheAccident);
          //console.log($rootScope.constat.conducteur)

          for (var i = 0; i < $rootScope.ficheAccident.length; i++) {

            if ($rootScope.constat.ficheAccident == $rootScope.ficheAccident[i].id) {
              $scope.fiche = $rootScope.ficheAccident[i];
            }
          }

          //recuperation du conducteur
          // recuperation de l'image $scope.image.image
          $scope.conducteur = $rootScope.conducteurs.filter(function (el) {
            return el.id == $rootScope.constat.conducteur;
          });

          $scope.assurance = $rootScope.assurances.filter(function (el) {

            return el.id == $rootScope.constat.assurance;
          });

          $scope.vehicule = $rootScope.vehicules.filter(function (el) {

            return el.id == $rootScope.constat.vehicule;
          });

          // recuperation de l'image $scope.image.image
          $scope.image = $rootScope.circonstance.filter(function (el) {
            return el.ficheAccident == $rootScope.constat.ficheAccident;
          });

          //recupération cirrconstantes 12
          $scope.vecA = $rootScope.circonstanceCase.filter(function (el) {
            return el.id == $scope.fiche.vecA;
          })

          console.log('-------');
          console.log($scope.fiche.vecA);


          $scope.vecB = $rootScope.circonstanceCase.filter(function (el) {
            return el.id == $scope.fiche.vecB;
          })



          $scope.circonstances = [];
          for (var i = 0; i < $rootScope.circonstanceCase.length; i++) {
            $scope.circ = {};
            $scope.circ.libelle = $rootScope.circonstanceCase[i].libelle;
            $scope.circ.id = $rootScope.circonstanceCase[i].id;

            $scope.circ.vecA = false;
            if ($scope.fiche.vecA.indexOf($rootScope.circonstanceCase[i].id) >= 0) {
              $scope.circ.vecA = true;
            }

            $scope.circ.vecB = false;
            if ($scope.fiche.vecB.indexOf($rootScope.circonstanceCase[i].id) >= 0) {
              $scope.circ.vecB = true;
            }
            //console.log($scope.circonstances);
            $scope.circonstances.push($scope.circ);
          }

        }


        $scope.vecA = $rootScope.constat.vehiculeA;
        $scope.vecB = $rootScope.constat.vehiculeB;
        $scope.chocA = $rootScope.constat.choc_vehiculeA;
        $scope.chocB = $rootScope.constat.choc_vehiculeB;



        if (typeof ($rootScope.constat.date_constat) == 'undefined') {
          var da = new Date();

          $scope.date_constat = da.toLocaleDateString('fr-FR');;
          $rootScope.constat.date_constat = $scope.date_constat;
        }
        //fin a refaire



      });
    } else {

      //console.log( $rootScope.constat);

      //init vue fiche
      if ($rootScope.constat.ficheAccident != "") {
        console.log('circonstance');
        // console.log($rootScope.ficheAccident);
        for (var i = 0; i < $rootScope.ficheAccident.length; i++) {

          if ($rootScope.constat.ficheAccident == $rootScope.ficheAccident[i].id) {
            $scope.fiche = $rootScope.ficheAccident[i];
          }
        }


        // recuperation de l'image $scope.image.image
        $scope.image = $rootScope.circonstance.filter(function (el) {
          return el.ficheAccident == $rootScope.constat.ficheAccident;
        });

        //recupération cirrconstantes 12
        console.log('$scope.fiche.vecA');
        console.log($scope.fiche.vecA);
        $scope.vecA = $rootScope.circonstanceCase.filter(function (el) {

          return el.id == $scope.fiche.vecA;
        })
        console.log($scope.vecA);

        $scope.vecB = $rootScope.circonstanceCase.filter(function (el) {
          return el.id == $scope.fiche.vecB;
        })


        $scope.conducteur = $rootScope.conducteurs.filter(function (el) {
          return el.id == $rootScope.constat.conducteur;
        });

        $scope.assurance = $rootScope.assurances.filter(function (el) {

          return el.id == $rootScope.constat.assurance;
        });

        $scope.vehicule = $rootScope.vehicules.filter(function (el) {

          return el.id == $rootScope.constat.vehicule;
        });

        $scope.circonstances = [];
        for (var i = 0; i < $rootScope.circonstanceCase.length; i++) {
          $scope.circ = {};
          $scope.circ.libelle = $rootScope.circonstanceCase[i].libelle;
          $scope.circ.id = $rootScope.circonstanceCase[i].id;


          $scope.circ.vecA = false;
          if ($scope.fiche.vecA.indexOf($rootScope.circonstanceCase[i].id) >= 0) {
            $scope.circ.vecA = true;
          }

          $scope.circ.vecB = false;
          if ($scope.fiche.vecB.indexOf($rootScope.circonstanceCase[i].id) >= 0) {
            $scope.circ.vecB = true;
          }
          //console.log($scope.circonstances);
          $scope.circonstances.push($scope.circ);
        }

      }

      $scope.vecA = $rootScope.constat.vehiculeA;
      $scope.vecB = $rootScope.constat.vehiculeB;
      $scope.chocA = $rootScope.constat.choc_vehiculeA;
      $scope.chocB = $rootScope.constat.choc_vehiculeB;



      // if (typeof($rootScope.constat.date_constat) == 'undefined'){
      var da = new Date();

      $scope.date_constat = da.toLocaleDateString('fr-FR');;
      $rootScope.constat.date_constat = $scope.date_constat;
      //}

      // console.log($rootScope.constat);




      //   $scope.fiche = 
      //         {id : "171A", numero :"171A" ,commentaire : "S'il est en double file ou au milieu de la chaussée, un véhicule en stationnement prend une une part passive dans un accident, la position de l'autre véhicule importe peu puisqu'il est nécessairement en mouvement"};


    }


    $scope.saveConstat = function () {
      var obj = {};
      constatData.saveConstat($rootScope.constat).then(function (res) {
        $rootScope.constats.push(res);
        $ionicHistory.nextViewOptions({
          disableBack: true
        });
        $state.go('home');
      })
    };

  });

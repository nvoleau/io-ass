'use strict';



app
    .controller('constatForm', function ($scope, conducteurData, itemData, vehiculeData, $state, $rootScope, $stateParams) {


       

        //****************************** INIT *******************************
        //assurances
        if ($rootScope.assurances.length == 0) {
            //initialisation de la donnée
            itemData.getAllAssurance().then(
                function (data) {
                    $rootScope.assurances = data;
                }, function (error) {
                    alert(error);
                });
        }
        //conducteurs
        if ($rootScope.conducteurs.length == 0) {
            conducteurData.getAllConducteur().then(
                function (data) {
                    $rootScope.conducteurs = data;
                }, function (error) {
                    alert(error);
                });
        }
        //vehicules
        if ($rootScope.vehicules.length == 0) {
            vehiculeData.getAllVehicule().then(
                function (data) {
                    $rootScope.vehicules = data;
                }, function (error) {
                    alert(error);
                });
        }

        //****************************** FIN INIT *******************************
        $scope.goToVehicule = function (assurance) {
            $rootScope.constat.assurance = assurance.id;
            $state.go('const_vehicules')
        }

        $scope.goToConducteur = function (vehicule) {
            $rootScope.constat.vehicule=vehicule.id;
            $state.go('const_conducteurs')
        }

        $scope.goToCirconstance = function (conducteur) {
            $rootScope.constat.conducteur = conducteur.id;
            console.log($rootScope.constat);
            $state.go('const_circonstances')
        }

    })
    ;


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
        
        $scope.famille=$rootScope.famille;

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
        
        $scope.gotoSousFamille = function (idFamille){
             $rootScope.constat.famille = idFamille;
              console.log($rootScope.constat);
              console.log(idFamille+"_circonst");
              $state.go("1_circonst");
        }
        
        //Affichage des sous famille en fonction du niveau
        //on regarde si la famille est vide dans le rootscope et 
        //si c'est pas le cas alors on initialise la sous famille
        if($rootScope.constat.famille !=""){
            $scope.sousFamille = $rootScope.sousFamille.filter(function (el) {
                return el.idFamille == $rootScope.constat.famille;
                });
                
                console.log( $scope.sousFamille);
             
        }

    })
    ;


﻿'use strict';



app
    .controller('constatCompletForm', function ($scope, $state, $rootScope, $stateParams, constatData) {



 if ($stateParams.id) {
       console.log('okookokoko');
            constatData.getByIdConstat($stateParams.id).then(function (res) {
                  console.log('resultat');
                console.log(res);
                $rootScope.constat = res;

$scope.date_constat = $rootScope.constat.date_constat;
//a refaire
 //init vue fiche
        if($rootScope.constat.ficheAccident != ""){
            for(var i= 0; i <  $rootScope.ficheAccident.length; i++)
                    {
                       
                        if ($rootScope.constat.ficheAccident == $rootScope.ficheAccident[i].id){
                              $scope.fiche = $rootScope.ficheAccident[i];
                               console.log('******');
                               console.log($scope.fiche);
                        }
                }
                
                // recuperation de l'image $scope.image.image
                 $scope.image = $rootScope.circonstance.filter(function (el) {
                    return el.ficheAccident == $rootScope.constat.ficheAccident;
                });
                
                //recupération cirrconstantes 12
                $scope.vecA = $rootScope.circonstanceCase.filter(function(el){
                    return el.id==$scope.fiche.vecA;
                })

                $scope.vecB = $rootScope.circonstanceCase.filter(function(el){
                    return el.id==$scope.fiche.vecB;
                })
                
                 

                 $scope.circonstances = [] ;
                for(var i= 0; i <  $rootScope.circonstanceCase.length; i++)
                    {
                      $scope.circ = {};
                        $scope.circ.libelle = $rootScope.circonstanceCase[i].libelle;
                        $scope.circ.id = $rootScope.circonstanceCase[i].id;

                        $scope.circ.vecA = false;
                        if ($rootScope.circonstanceCase[i].id == $scope.fiche.vecA){
                             $scope.circ.vecA = true;
                        }

                         $scope.circ.vecB = false;
                        if ($rootScope.circonstanceCase[i].id == $scope.fiche.vecB){
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
       


       if (typeof($rootScope.constat.date_constat) == 'undefined'){
           var da = new Date();
          
           $scope.date_constat =da.toLocaleDateString('fr-FR');;
           $rootScope.constat.date_constat = $scope.date_constat;
       }
//fin a refaire



            });
 }else{
        
console.log( $rootScope.constat);

        //init vue fiche
        if($rootScope.constat.ficheAccident != ""){
            for(var i= 0; i <  $rootScope.ficheAccident.length; i++)
                    {
                       
                        if ($rootScope.constat.ficheAccident == $rootScope.ficheAccident[i].id){
                              $scope.fiche = $rootScope.ficheAccident[i];
                               console.log('******');
                               console.log($scope.fiche);
                        }
                }
                
                // recuperation de l'image $scope.image.image
                 $scope.image = $rootScope.circonstance.filter(function (el) {
                    return el.ficheAccident == $rootScope.constat.ficheAccident;
                });
                
                //recupération cirrconstantes 12
                $scope.vecA = $rootScope.circonstanceCase.filter(function(el){
                    return el.id==$scope.fiche.vecA;
                })

                $scope.vecB = $rootScope.circonstanceCase.filter(function(el){
                    return el.id==$scope.fiche.vecB;
                })
                
                 

                 $scope.circonstances = [] ;
                for(var i= 0; i <  $rootScope.circonstanceCase.length; i++)
                    {
                      $scope.circ = {};
                        $scope.circ.libelle = $rootScope.circonstanceCase[i].libelle;
                        $scope.circ.id = $rootScope.circonstanceCase[i].id;

                        $scope.circ.vecA = false;
                        if ($rootScope.circonstanceCase[i].id == $scope.fiche.vecA){
                             $scope.circ.vecA = true;
                        }

                         $scope.circ.vecB = false;
                        if ($rootScope.circonstanceCase[i].id == $scope.fiche.vecB){
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
          
           $scope.date_constat =da.toLocaleDateString('fr-FR');;
           $rootScope.constat.date_constat = $scope.date_constat;
       //}
        
      console.log($rootScope.constat);


if (!$stateParams.id){//enregistrement
                var obj = {};
                constatData.saveConstat($rootScope.constat).then(function (res) {
                    console.log(res);
                    $rootScope.constats.push(res);
                }
                );
            } 

     //   $scope.fiche = 
       //         {id : "171A", numero :"171A" ,commentaire : "S'il est en double file ou au milieu de la chaussée, un véhicule en stationnement prend une une part passive dans un accident, la position de l'autre véhicule importe peu puisqu'il est nécessairement en mouvement"};
        

    }})
    ;


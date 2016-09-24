'use strict';



app
    .controller('constatCompletForm', function ($scope, $state, $rootScope, $stateParams) {



        
        //init vue fiche
        if($rootScope.constat.ficheAccident != ""){
            for(var i= 0; i <  $rootScope.ficheAccident.length; i++)
                    {
                       
                        if ($rootScope.constat.ficheAccident == $rootScope.ficheAccident[i].id){
                              $scope.fiche = $rootScope.ficheAccident[i];
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
                
                
 
        }
        
        
      
     //   $scope.fiche = 
       //         {id : "171A", numero :"171A" ,commentaire : "S'il est en double file ou au milieu de la chaussée, un véhicule en stationnement prend une une part passive dans un accident, la position de l'autre véhicule importe peu puisqu'il est nécessairement en mouvement"};
        

    })
    ;


'use strict';



app
    .controller('vehiculeAccident', function ($q, $scope, $rootScope, vehiculeData, $state) {

 $scope.gotoChocVecA = function(vehicule){
      $rootScope.constat.vehiculeA = vehicule;
        $state.go("chocA"); 
 }

 $scope.setChocVecA = function(choc){
      $rootScope.constat.choc_vehiculeA = choc;
        $state.go("vehiculeB"); 
 }

  $scope.gotoChocVecB = function(vehicule){
      $rootScope.constat.vehiculeB = vehicule;
      
        $state.go("chocB"); 
 }

 $scope.vecA = $rootScope.constat.vehiculeA;
 $scope.vecB = $rootScope.constat.vehiculeB;

$scope.setChocVecB = function(choc){
      $rootScope.constat.choc_vehiculeB = choc;
      console.log( $rootScope.constat);
        $state.go("constat"); 
 }

    })
   


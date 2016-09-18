'use strict';


var items = [
    { 'name': 'MAIF', 'category-id': 1 },
    { 'name': 'MAAF', 'category-id': 1 },
    { 'immat': '47XX154', 'category-id': 2 },
    { 'immat': '12XX254', 'category-id': 2 },
    { 'name': 'Alain', 'category-id': 3 },
    { 'name': 'Marie', 'category-id': 3 }
];

app
    .controller('assIndex', function ($scope) {

    })
    .controller('assList', function ($scope) {
        $scope.items = items;
    })
    .controller('assCreate', function ($scope) {

    })
    .controller('assRemove', function ($scope) {


    })
;

/*
app.controller('allAssCtrl', function ($scope, $rootScope, $cordovaFile) {

    if (!$rootScope.AssTab) {

        $cordovaFile.readFile('assurance.json').then(
            function (result) {

                if (typeof result == 'string') {
                    $rootScope.AssTab = JSON.parse(result);
                }
                else {
                    $rootScope.AssTab = result;
                }

            }, function (err) { });

    }
});



app.controller('allAssCtrl',function($scope, $cordovaFile, $location, $ionicPlatform) {

    $scope.text = 'Hello Word';

    $ionicPlatform.ready(function() {
 
            $cordovaFile.readFile('assurance.json').then(
              function (result) {


                alert('ok1');



              }, function (error) {
                alert('ok2');
              });


    });


});

*/


/*

    $scope.AjtVeh = {
      marque :'',
      immat :'',
      pays : ''
    };
    $scope.TabVeh =[];
    $scope.addVeh= function(){
      $scope.TabVeh.push($scope.AjtVeh);
      $location.path('/vehicules');
      


alert($scope.TabVeh);
$scope.save();

    $scope.save = function(){
      requestFileSystem(window.PERSISTENT, 0, fsReceived, errorHandler);
      $location.path('/vehicules');
    };
    var fsReceived = function(fileSystem){
        fileSystem.root.getFile('vehicules.json', {creat:true, excluive:false}, fsReceived, errorHandler);
    };
    var feReceived = function(fileEntry){
        fileEntry.creatWriter(fwReceived, errorHandler);
    };
    var fwReceived = function(fileWriter){
        var vehiculesText = angular.toJson($scope.TabVeh);
        fileWriter.write(vehiculesText);
        
    };
    var errorHandler = function(error) {
      
    };

    $scope.TabVeh =[];

    $scope.AjtVeh= function(marque,immat,pays){
      alert(marque+' - '+immat+' - '+pays);
    }
      $scope.TabVeh.push($scope.AjtVeh);
      $scope.save();


    log envoyé sur un serveur...) 

    $scope.AjtAss= function(nom,ctvertnum,datedu,dateau,agence,agnom,addr,pays,mailtel,assdeg){
      alert(nom+' - '+ctvertnum+' - ');
    };
    $scope.AjtCon= function(nom,prenom,naissance,addr,pays,mailtel,permnum,categ,validite){
      alert(nom+' - '+prenom+' - '+naissance);
    };



})
    */
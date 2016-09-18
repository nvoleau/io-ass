'use strict';

app.controller('AddCtrl', function ($scope, $rootScope, $location) {

    $scope.addAss = function () { 

        $scope.text = "C'est moi :" ;
        $location.path('/assurances')
    };

});

/*
app.controller('AddCtrl', function($scope, $cordovaFile, $location, $ionicPlatform) {

      $ionicPlatform.ready(function() {

          $scope.addAss = function () { 

                  $scope.dataAss = {
                    nom:    ''
                  };

                  $scope.AssTab = [];
                  $scope.AssTab.push($scope.dataAss);
                  
                  var AssText = angular.toJson($scope.AssTab);
                  var blob = new Blob([$scope.dataAss], {type: "text/plain"});

                  $cordovaFile.writeFile(cordova.file.dataDirectory, "assurance.json", "text",  true)
                    .then(function (success) {
                      alert('enregistré');
                    }, function (error) {
                      alert('pas enregistré');
                  });
          };
      });
}); 

*/

/*
app.controller('AddCtrl',function($scope, $rootScope, $location, $cordovaFile) {
    



    $scope.dataAss = {
        nom:    ''
    };

    $scope.AssTab = [];

    $scope.addAss = function(){
        if ($rootScope.AssTab) {
            $rootScope.AssTab.push($scope.dataAss);
        }
        else {
            $rootScope.AssTab = [$scope.dataAss];
        }
        $scope.save();
    };

    $scope.save = function(){
        if   (window.webkitRequestFileSystem) { window.webkitRequestFileSystem(window.PERSISTENT, 0,fsReceived,errorHandler);} 
        else {window.requestFileSystem(window.PERSISTENT, 0, fsReceived, errorHandler);}
        //requestFileSystem(window.PERSISTENT, 0, fsReceived, errorHandler);
        $location.path('/assurances')
    };

    var fsReceived = function(fileSystem){
        fileSystem.root.getFile('assurance.json',{create : true, exclusive : false }, feReceived, errorHandler)
    };

    var feReceived = function(fileEntry){
        fileEntry.createWriter(fwReceived,errorHandler);
    };

    var fwReceived =function(fileWriter){
        var AssText = angular.toJson($scope.AssTab);
        var blob = new Blob([$scope.dataAss], {type: "text/plain"});
        console.log('blob: ' + blob);
        fileWriter.write(blob);
        alert('OK write ');
    };

    var errorHandler = function(error){
          var msg = '';        
          switch (error.code) {
            case FileError.QUOTA_EXCEEDED_ERR:
              msg = 'QUOTA_EXCEEDED_ERR';
              break;
            case FileError.NOT_FOUND_ERR:
              msg = 'NOT_FOUND_ERR';
              break;
            case FileError.SECURITY_ERR:
              msg = 'SECURITY_ERR';
              break;
            case FileError.INVALID_MODIFICATION_ERR:
              msg = 'INVALID_MODIFICATION_ERR';
              break;
            case FileError.INVALID_STATE_ERR:
              msg = 'INVALID_STATE_ERR';
              break;
            default:
              msg = 'Unknown Error';
              break;
          };         
          console.log('Error: ' + msg);
          //alert('Error: ' +msg);
    };

    

});
*/


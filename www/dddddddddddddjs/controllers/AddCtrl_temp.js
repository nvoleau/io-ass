
/*
app.controller('AddCtrl', function ($scope, $location, $ionicPlatform) {
  $ionicPlatform.ready(function() {

      $scope.addAss = function () {          
        $scope.save();
      };
      $scope.save = function () {
        alert ('etape 1');
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fsReceived, errorHandler);
        $location.path('/');
    };

    var fsReceived = function (fileSystem) { 
        alert ('etape 2');    
    };

    var errorHandler = function (error) {
    };

  });
}); 
*/


  $ionicPlatform.ready(function() {

  });




/*
app.controller('AddCtrl', function ($scope, $location) {
     }); 

    $ionicPlatform.ready(function() {
        //  console.log('platform Ready!');
          //$scope.callSomeFunction();
    });
*/
/*
  $ionicPlatform.ready(function() {
    $cordovaPlugin.someFunction().then(success, error);



    $scope.addAss = function () {

        alert('toto');

    };


    });
  */




/*
app.controller('AddCtrl', function ($scope, $location) {

    $scope.moment = {
        image: 'images/place.PNG',
        nom: ''
    };

    $scope.moments = [];

    $scope.addAss = function () {

        $scope.moments.push($scope.moment);
        $scope.save();

    };

    $scope.save = function () {
        alert ('etape 1');
        requestFileSystem(window.PERSISTENT, 0, fsReceived, errorHandler);
        $location.path('/');

    };

    var fsReceived = function (fileSystem) { 
        alert ('etape 2');
        fileSystem.root.getFile('moments.json', { create: true, exclusive: false }, feReceived, errorHandler);
    };

    var feReceived = function (fileEntry) {
        fileEntry.createWriter(fwReceived, errorHandler);
    };

    var fwReceived = function (fileWriter) {
        var momentsText = angular.toJson($scope.moments);
        fileWriter.write(momentsText);
    };

    var errorHandler = function (error) {

    };

})



app.controller('AddCtrl',function($scope,$location) {
  
        $scope.dataAss = {
              nom:    ''
        }
          
        $scope.AssTab = [];

        $scope.addAss = function(){

        $scope.AssTab.push($scope.dataAss);

        /* On crée un fichier disponible de manière permanente d'une taille estimée de 5Mo 
        window.requestFileSystem(window.PERSISTENT, 5*1024*1024, fileSystemReceived, errorHandler);
         
        var fileSystemReceived = function(fileSystem){
            alert('QUIQUI');            
        }      
        /* Gestionnaire d'erreur d'accès au système de fichier virtuel 
        function errorHandler(e) {
          var msg = '';
         
          switch (e.code) {
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
        }


  }


});




        if(window.webkitRequestFileSystem)
        { 

          alert('tutu1');
          window.webkitRequestFileSystem(window.TEMPORARY, 0, fileSystemReceived, errorHandler);
        }
        else if(window.moz_requestFileSystem)
        {
            alert('tutu2');
            //firefox
            window.moz_requestFileSystem(window.TEMPORARY, 0, fileSystemReceived, errorHandler);
        }
        else
        {   
            alert('tutu3');
            requestFileSystem(TEMPORARY, 0, fileSystemReceived, errorHandler);
        }

        var fileSystemReceived = function(fileSystem){
            alert('QUIQUI');
            
        }

        var errorHandler = function(error){

          alert(error);
        }
*/

/*




       alert('toto');

        function onInitFs(fs) {
          console.log('Opened file system: ' + fs.name);
        }




        window.webkitStorageInfo.requestQuota(PERSISTENT, 1024*1024, function(grantedBytes) {
          window.requestFileSystem(PERSISTENT, grantedBytes, onInitFs, errorHandler);
        }, function(e) {
          console.log('Error', e);
        });

        window.requestFileSystem(window.TEMPORARY, 5*1024*1024 , onInitFs, errorHandler);

        function errorHandler(e) {
          var msg = '';

          switch (e.code) {
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
        }


















    $scope.addAss = function(){
        $scope.AssTab.push($scope.dataAss);
        alert('toto');
        $cordovaFile.writeExistingFile(cordova.file.dataDirectory, "file.txt", "text")
        .then(function (success) {alert('titi1');
        // success
        }, function (error) { alert('titi2');
        // error
        });
    }

*/






/*
app.controller('AddCtrl',function($scope,$location) {

    $scope.dataAss = {
        nom:    ''
    }
    
    $scope.AssTab = [];
    
    $scope.addAss = function(){
        $scope.AssTab.push($scope.dataAss);
        $scope.save();
    }
    
    $scope.save = function(){

        ///requestFileSystem  = requestFileSystem || webkitRequestFileSystem;
        
        if (window.webkitRequestFileSystem) {alert('titi1');
                     window.webkitRequestFileSystem(window.PERSISTENT, 10*1024*1024,fileSystemReceived,errorHandler);
        } 
        else {alert('titi2');
                    window.requestFileSystem(window.PERSISTENT, 10*1024*1024, fileSystemReceived, errorHandler);
        }



        //window.requestFileSystem(LocalFileSystem.TEMPORARY, 10*1024*1024, fileSystemReceived, errorHandler);
        $location.path('templates/assurances.html')
    }

    //      requestFileSystem(window.PERSISTENT, 0, fileSystemReceived, errorHandler);   
    //$scope.text2 = $scope.AssTab;
    // window.requestFileSystem(PERSISTENT, 1024*1024*10, $scope.fileSystemReceived, $scope.errorHandler);   


    var fileSystemReceived = function(fileSystem){
        alert('tot');
        fileSystem.root.getFile('assurance.json',{create: true, exclusive: false }, fileEntryReceived, errorHandler);
    }
    var fileEntryReceived = function(fileEntry){
        alert(fileEntry.name);
        fileEntry.createWriter(fileWriterReceived, errorHandler);
    }

    var fileWriterReceived =function(fileWriter){
        var AssText = angular.toJson($scope.AssTab);
        fileWriter.write(AssText);
    }

    var errorHandler = function(error){
        console.log(error);
        alert(error);
    }


});
*/


/*
app.controller('AddCtrl',function($scope,$location) {
    
    $scope.dataAss = {
      nom:    '',
      nCtra:  '',
      nCtVt:  '',
      DtDu:   '',
      DtAu:   '',
      agence: '',
      agNom:  '',
      addr:   '',
      pays:   '',
      MailTel:'',
      Degat:  ''
    };

    $scope.AssTab = [];

    $scope.addAss = function(){
      $scope.AssTab.push($scope.dataAss);
      $scope.save();
    };

    $scope.save = function(){
      requestFileSystem(window.PERSISTENT, 0, fsReceived, errorHandler);
      $location.path('templates/assurances.html')
    };

    var fsReceived = function(fileSystem){
      fileSystem.root.getFile('assurance.json',{create : true, exclusive : false }, feReceived, errorHandler)
    };

    var feReceived = function(fileEntry){
      fileEntry.creatWriter(fwReceived,errorHandler);
    };

    var fwReceived =function(fileWriter){
      var AssText = angular.toJson($scope.AssTab);
      fileWriter.write(AssText);
    };

    var errorHandler = function(error){
      alert(error);
    };

});
*/

/*



    $scope.AddCon= function(nom,prenom,naissance,addr,pays,mailtel,permnum,categ,validite){
      alert(nom+' - '+prenom+' - '+naissance);
    };
    $scope.AddVeh= function(marque,immat,pays){
      alert(marque+' - '+immat+' - '+pays);
    };


     alert(nom+' - '+ctvertnum+' - ');
function(nom,nCtra,nCtVt,DtDu,DtAu,agence,agNom,addr,pays,MailTel,Degat)

app.controller('AjtCtrl',function($scope, $location) {

    $scope.AjtVeh = {
      marque :'',
      immat :'',
      pays : ''
    };
    $scope.TabVeh =[];
    $scope.addVeh= function(){
      $scope.TabVeh.push($scope.AjtVeh);
      
      
    };

    $scope.AjtAss= function(nom,ctvertnum,datedu,dateau,agence,agnom,addr,pays,mailtel,assdeg){
      alert(nom+' - '+ctvertnum+' - ');
    };
    $scope.AjtCon= function(nom,prenom,naissance,addr,pays,mailtel,permnum,categ,validite){
      alert(nom+' - '+prenom+' - '+naissance);
    };


});
*/

/*

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

    */
    /* log envoyé sur un serveur...) */








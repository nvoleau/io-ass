'use strict';


app.service('vehiculeData', function ($q, $ionicPlatform, $cordovaSQLite,$rootScope) { //  

    var vehicules = []; 

     var db, dbName = "constaMagic.db"
 
    function useWebSql(){
      db = window.openDatabase(dbName, "1.0", "ConstaMagic database", 200000)
      console.info('Using webSql')
    }
 
   function useSqlLite() {
      db = $cordovaSQLite.openDB({name: dbName})
      console.info('Using SQLITE')
    }
 
    function initDatabase(){
      $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS T_VEHICULE (id integer primary key, genre, marque, modele,immat, pays)')
        .then(function(res){
 
        }, onErrorQuery)
    }


    function onErrorQuery(err){
      console.error(err)
    }

//recuperatoin de l'ensemble des vehicule
this.getAllVehicule = function () {
        var deferred = $q.defer();
        $ionicPlatform.ready(function () {      // READ            
             $cordovaSQLite.execute(db, 'SELECT * FROM T_VEHICULE')
              .then(function (res) {        // success 
                   if(res.rows.length > 0) {
                    for(var i = 0; i < res.rows.length; i++) {
                        vehicules.push(res.rows.item(i));
                    }
                }
                  deferred.resolve(vehicules);

              }, function (error) {             // error                  
                  deferred.reject(error);
              });
        });
         return deferred.promise;
}

//enregistrement d'un vehicule
this.saveVehicule =  function (vehicule) {
     var deferred = $q.defer();
        $cordovaSQLite.execute(db, 'INSERT INTO T_VEHICULE (genre, marque, modele,immat, pays) VALUES(?, ?, ?, ?, ?)',
         [vehicule.genre,vehicule.marque, vehicule.modele, vehicule.immat,vehicule.pays]).then (function(res){
              console.log(res.insertId)
              vehicule.id=res.insertId
              deferred.resolve( vehicule);
         }); 
        
           return deferred.promise;   
      }

      //modification d'une vehicule
this.updateVehicule =  function (vehicule) {
     var deferred = $q.defer();
        $cordovaSQLite.execute(db, 'UPDATE T_VEHICULE set genre=?, marque=?, modele=?,immat=?, pays=? where id = ?', 
        [vehicule.genre,vehicule.marque, vehicule.modele, vehicule.immat,vehicule.pays,vehicule.id]).then (function(res){
              console.log(res)    
              deferred.resolve( res);
         }); 
           return deferred.promise;   
      }
 

//suppression
      this.deleteVehicule = function(id){
          console.log(id);
        return $cordovaSQLite.execute(db, 'DELETE FROM T_VEHICULE where id = ?', [id])
      }

    this.getByIdVehicule = function(id){
        var deferred = $q.defer();
        $ionicPlatform.ready(function () {
          $cordovaSQLite.execute(db, 'SELECT * FROM T_VEHICULE where id = ?', [id]).then(function (results) {
            deferred.resolve(results.rows.item(0));
          })
        })
        return deferred.promise;   
      }


//initialisation
$ionicPlatform.ready(function () {
      if(window.cordova){
        useSqlLite()
      } else {
        useWebSql()
      }
       
      initDatabase()
    })


    /*
    this.modify = function (item) {
            return item;
        };
    */
});



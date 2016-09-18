'use strict';

// var items = ["assurance":{ "id": "6", "name": "TEST", "contrat": "3255" }];
//var items = [];

var items = [{ "id": "1", "category": "assurance", "name": "MAIF", "contrat": "7854" }, { "id": "2", "category": "assurance", "name": "GMF", "contrat": "3255" }];

app.service('itemData', function ($q, $ionicPlatform, $cordovaSQLite,$rootScope) { //  

    var assurances = []; 

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
      $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS T_ASSURANCE (id integer primary key, name, contrat, green,date_deb, date_fin,ag_name,ag_addr )')
        .then(function(res){
 
        }, onErrorQuery)
    }


    function onErrorQuery(err){
      console.error(err)
    }

//recuperatoin de l'ensemble des assurances
this.getAllAssurance = function () {
        var deferred = $q.defer();
        $ionicPlatform.ready(function () {      // READ            
             $cordovaSQLite.execute(db, 'SELECT * FROM T_ASSURANCE')
              .then(function (res) {        // success 
                   if(res.rows.length > 0) {
                    for(var i = 0; i < res.rows.length; i++) {
                        assurances.push(res.rows.item(i));
                    }
                }
                  deferred.resolve(assurances);

              }, function (error) {             // error                  
                  deferred.reject(error);
              });
        });
         return deferred.promise;
}

//enregistrement d'un assurance
this.saveAssurance =  function (assurance) {
     var deferred = $q.defer();
        $cordovaSQLite.execute(db, 'INSERT INTO T_ASSURANCE (name, contrat, green,date_deb, date_fin,ag_name,ag_addr) VALUES(?, ?, ?, ?, ?, ?, ?)',
         [assurance.name, assurance.contrat, assurance.green,assurance.date_deb, assurance.date_fin,assurance.ag_name,assurance.ag_addr]).then (function(res){
              console.log(res.insertId)
              assurance.id=res.insertId
              deferred.resolve( assurance);
         }); 
        
           return deferred.promise;   
      }

      //modification d'une assurance
this.updateAssurance =  function (assurance) {
     var deferred = $q.defer();
        $cordovaSQLite.execute(db, 'UPDATE T_ASSURANCE set name=?, contrat=?, green=?,date_deb=?, date_fin=?,ag_name=?,ag_addr=? where id = ?', 
        [assurance.name, assurance.contrat, assurance.green,assurance.date_deb, assurance.date_fin,assurance.ag_name,assurance.ag_addr, assurance.id]).then (function(res){
              console.log(res)    
              deferred.resolve( res);
         }); 
           return deferred.promise;   
      }
 

//suppression
      this.deleteAssurance = function(id){
          console.log(id);
        return $cordovaSQLite.execute(db, 'DELETE FROM T_ASSURANCE where id = ?', [id])
      }

    this.getByIdAssurance = function(id){
        var deferred = $q.defer();
        $ionicPlatform.ready(function () {
          $cordovaSQLite.execute(db, 'SELECT * FROM T_ASSURANCE where id = ?', [id]).then(function (results) {
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



'use strict';


app.service('constatData', function ($q, $ionicPlatform, $cordovaSQLite,$rootScope) { //  

    var constats = []; 

     var db, dbName = "constaMagic.db"
 
    function useWebSql(){
      db = window.openDatabase(dbName, "1.0", "ConstaMagic database", 200000)
      console.info('Using webSql')
    }
 
   function useSqlLite() {
      db = $cordovaSQLite.openDB({name: dbName, location:'default'})
      console.info('Using SQLITE')
    }
 
    function initDatabase(){
      $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS T_CONSTAT (id integer primary key, assurance, conducteur, vehicule,ficheAccident, vehiculeA, vehiculeB,choc_vehiculeA,choc_vehiculeB,date_constat)')
        .then(function(res){
 
        }, onErrorQuery)
    }


    function onErrorQuery(err){
      console.error(err)
    }

//recuperatoin de l'ensemble des conducteur
this.getAllConstat = function () {
        var deferred = $q.defer();
        $ionicPlatform.ready(function () {      // READ            
             $cordovaSQLite.execute(db, 'SELECT * FROM T_CONSTAT')
              .then(function (res) {        // success 
                   if(res.rows.length > 0) {
                    for(var i = 0; i < res.rows.length; i++) {
                        constats.push(res.rows.item(i));
                    }
                }
                  deferred.resolve(constats);

              }, function (error) {             // error                  
                  deferred.reject(error);
              });
        });
         return deferred.promise;
}

//enregistrement d'un conducteur
this.saveConstat =  function (c) {
     var deferred = $q.defer();
     console.log('-------constat')
        $cordovaSQLite.execute(db, 'INSERT INTO T_CONSTAT (assurance, conducteur, vehicule,ficheAccident, vehiculeA, vehiculeB,choc_vehiculeA,choc_vehiculeB,date_constat) VALUES(?, ?, ?, ?, ?, ?, ?,?,?)',
         [c.assurance, c.conducteur, c.vehicule,c.ficheAccident, c.vehiculeA, c.vehiculeB,c.choc_vehiculeA,c.choc_vehiculeB,c.date_constat]).then (function(res){
              //console.log(res.insertId)
              c.id=res.insertId
              deferred.resolve(c);
         }); 
        
           return deferred.promise;   
      }

      //modification d'une conducteur
this.updateConstat =  function (c) {
     var deferred = $q.defer();
        $cordovaSQLite.execute(db, 'UPDATE T_CONSTAT set assurance=?, conducteur=?, vehicule=?,ficheAccident=?, vehiculeA=?, vehiculeB=?,choc_vehiculeA=?, choc_vehiculeB=?, date_constat=? where id = ?', 
        [c.assurance, c.conducteur, c.vehicule,c.ficheAccident, c.vehiculeA, c.vehiculeB,c.choc_vehiculeA,c.choc_vehiculeB,c.date_constat, c.id]).then (function(res){
              console.log(res)    
              deferred.resolve( res);
         }); 
           return deferred.promise;   
      }
 

//suppression
      this.deleteConstat = function(id){
          console.log(id);
        return $cordovaSQLite.execute(db, 'DELETE FROM T_CONSTAT where id = ?', [id])
      }

    this.getByIdConstat = function(id){
        var deferred = $q.defer();
        $ionicPlatform.ready(function () {
          $cordovaSQLite.execute(db, 'SELECT * FROM T_CONSTAT where id = ?', [id]).then(function (results) {
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



'use strict';


app.service('conducteurData', function ($q, $ionicPlatform, $cordovaSQLite,$rootScope) { //  

    var conducteurs = []; 

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
      $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS T_CONDUCTEUR (id integer primary key, nom, prenom, addr,pays, permnum,categ,validite)')
        .then(function(res){
 
        }, onErrorQuery)
    }


    function onErrorQuery(err){
      console.error(err)
    }

//recuperatoin de l'ensemble des conducteur
this.getAllConducteur = function () {
        var deferred = $q.defer();
        $ionicPlatform.ready(function () {      // READ            
             $cordovaSQLite.execute(db, 'SELECT * FROM T_CONDUCTEUR')
              .then(function (res) {        // success 
                   if(res.rows.length > 0) {
                    for(var i = 0; i < res.rows.length; i++) {
                        conducteurs.push(res.rows.item(i));
                    }
                }
                  deferred.resolve(conducteurs);

              }, function (error) {             // error                  
                  deferred.reject(error);
              });
        });
         return deferred.promise;
}

//enregistrement d'un conducteur
this.saveConducteur =  function (conducteur) {
     var deferred = $q.defer();
     console.log('-------conducteur')
        $cordovaSQLite.execute(db, 'INSERT INTO T_CONDUCTEUR (nom, prenom, addr,pays, permnum,categ,validite) VALUES(?, ?, ?, ?, ?, ?, ?)',
         [conducteur.nom,conducteur.prenom, conducteur.addr, conducteur.pays,conducteur.permnum,conducteur.categ,conducteur.validite]).then (function(res){
              console.log(res.insertId)
              conducteur.id=res.insertId
              deferred.resolve( conducteur);
         }); 
        
           return deferred.promise;   
      }

      //modification d'une conducteur
this.updateConducteur =  function (conducteur) {
     var deferred = $q.defer();
        $cordovaSQLite.execute(db, 'UPDATE T_CONDUCTEUR set nom=?, prenom=?, addr=?,pays=?, permnum=?, categ=?,validite=? where id = ?', 
        [conducteur.nom,conducteur.prenom, conducteur.addr, conducteur.pays,conducteur.permnum,conducteur.categ,conducteur.validite]).then (function(res){
              console.log(res)    
              deferred.resolve( res);
         }); 
           return deferred.promise;   
      }
 

//suppression
      this.deleteConducteur = function(id){
          console.log(id);
        return $cordovaSQLite.execute(db, 'DELETE FROM T_CONDUCTEUR where id = ?', [id])
      }

    this.getByIdConducteur = function(id){
        var deferred = $q.defer();
        $ionicPlatform.ready(function () {
          $cordovaSQLite.execute(db, 'SELECT * FROM T_CONDUCTEUR where id = ?', [id]).then(function (results) {
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



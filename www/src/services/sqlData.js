angular.module('starter.services', ['ngCordova'])
  .factory('NotesDataService', function ($cordovaSQLite, $ionicPlatform) {
    var db, dbName = "constaMagic.db"
 
    function useWebSql() {
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
 
    $ionicPlatform.ready(function () {
      if(window.cordova){
        useSqlLite()
      } else {
        useWebSql()
      }
       
      initDatabase()
    })
 
    function onErrorQuery(err){
      console.error(err)
    }
 
    return {
      createAssurance: function (assurance) {
        return $cordovaSQLite.execute(db, 'INSERT INTO T_ASSURANCE (name, contrat, green,date_deb, date_fin,ag_name,ag_addr) VALUES(?, ?, ?, ?, ?, ?, ?)',
         [assurance.name, assurance.contrat, assurance.green,assurance.date_deb, assurance.date_fin,assurance.ag_name,assurance.ag_addr])
      },
      updateNote: function(assurance){
        return $cordovaSQLite.execute(db, 'UPDATE T_ASSURANCE set name=?, contrat=?, green=?,date_deb=?, date_fin=?,ag_name=?,ag_addr=? where id = ?', 
        [assurance.name, assurance.contrat, assurance.green,assurance.date_deb, assurance.date_fin,assurance.ag_name,assurance.ag_addr, assurance.id])
      },
      getAllAssurance: function(callback){
        $ionicPlatform.ready(function () {
          $cordovaSQLite.execute(db, 'SELECT * FROM T_ASSURANCE').then(function (results) {
            var data = []
 
            for (i = 0, max = results.rows.length; i < max; i++) {
              data.push(results.rows.item(i))
            }
 
            callback(data)
          }, onErrorQuery)
        })
      },
 
      deleteAssurance: function(id){
        return $cordovaSQLite.execute(db, 'DELETE FROM T_ASSURANCE where id = ?', [id])
      },
 
      getByIdAssurance: function(id, callback){
        $ionicPlatform.ready(function () {
          $cordovaSQLite.execute(db, 'SELECT * FROM T_ASSURANCE where id = ?', [id]).then(function (results) {
            callback(results.rows.item(0))
          })
        })
      }
    }
  })
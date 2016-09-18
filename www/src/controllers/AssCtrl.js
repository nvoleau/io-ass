'use strict';



app
    .controller('assList', function ($q,$scope,$rootScope, itemData,$state) {
     
     if ($rootScope.assurances.length == 0) {
            //initialisation de la donnée
            itemData.getAllAssurance().then(
                function (data) {
                    $rootScope.assurances = data;
                }, function (error) {
                    alert(error);
                });
        }
        

            //suppression depuis la vue
        $scope.assRemove = function(obj){
             itemData.deleteAssurance(obj.id);
            $rootScope.assurances.splice($rootScope.assurances.indexOf(obj), 1);
           
        }

         $scope.gotoEdit = function(id){
            $state.go('assurances_form', {id: id})
        }


    })
    .controller('assForm', function ($scope, itemData, $state,$rootScope,$stateParams) {
            
             if($stateParams.id){
                itemData.getByIdAssurance($stateParams.id).then(function(res){
                $scope.item=res;
                $scope.titre='Modification';
            })
            } else {
                $scope.item = {}
                $scope.titre='Ajout';
            }
            
            $scope.saveAssurance = function(item){
                if(!item.id){//enregistrement
                    var obj = {};
                    itemData.saveAssurance(item).then(function(res){
                    console.log(res);
                    $rootScope.assurances.push(res);
                    }
                    );
                    
                }else{ //modification
                       itemData.updateAssurance(item);
                }
                $state.go('assurances');
            }

    })
    .controller('assRemove', function ($scope, itemData) {
        console.log('remove')
    })
;


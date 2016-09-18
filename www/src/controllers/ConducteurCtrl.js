'use strict';



app
    .controller('conducteurList', function ($q, $scope, $rootScope, conducteurData, $state) {

        if ($rootScope.conducteurs.length == 0) {
            conducteurData.getAllConducteur().then(
                function (data) {
                    $rootScope.conducteurs = data;
                }, function (error) {
                    alert(error);
                });
        }


        //suppression depuis la vue
        $scope.conducteurRemove = function (obj) {
            conducteurData.deleteConducteur(obj.id);
            $rootScope.conducteurs.splice($rootScope.conducteurs.indexOf(obj), 1);

        }

        $scope.gotoEdit = function (id) {
            $state.go('conducteurs_form', { id: id })
        }


    })
    .controller('conducteurForm', function ($scope, conducteurData, $state, $rootScope, $stateParams) {

        if ($stateParams.id) {
            conducteurData.getByIdConducteur($stateParams.id).then(function (res) {
                $scope.item = res;
                $scope.titre = 'Modification';
            })
        } else {
            $scope.item = {}
            $scope.titre = 'Ajout';
        }

        $scope.saveConducteur = function (item) {
            console.log(item);
            if (!item.id) {//enregistrement
                var obj = {};
                conducteurData.saveConducteur(item).then(function (res) {
                    $rootScope.conducteurs.push(res);
                }
                );
            } else { //modification
                conducteurData.updateConducteur(item);
            }
            $state.go('conducteurs');
        }

    })
    .controller('conducteurRemove', function ($scope, conducteurData) {
        console.log('remove')
    })
    ;


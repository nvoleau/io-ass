'use strict';



app
    .controller('vehiculeList', function ($q, $scope, $rootScope, vehiculeData, $state) {

        if ($rootScope.vehicules.length == 0) {
            vehiculeData.getAllVehicule().then(
                function (data) {
                    $rootScope.vehicules = data;
                }, function (error) {
                    alert(error);
                });
        }


        //suppression depuis la vue
        $scope.vehiculeRemove = function (obj) {
            vehiculeData.deleteVehicule(obj.id);
            $rootScope.vehicules.splice($rootScope.vehicules.indexOf(obj), 1);

        }

        $scope.gotoEdit = function (id) {
            $state.go('vehicules_form', { id: id })
        }


    })
    .controller('vehiculeForm', function ($scope, vehiculeData, $state, $rootScope, $stateParams) {

        if ($stateParams.id) {
            vehiculeData.getByIdVehicule($stateParams.id).then(function (res) {
                $scope.item = res;
                $scope.titre = 'Modification';
            })
        } else {
            $scope.item = {}
            $scope.titre = 'Ajout';
        }

        $scope.saveVehicule = function (item) {
            console.log(item);
            if (!item.id) {//enregistrement
                var obj = {};
                vehiculeData.saveVehicule(item).then(function (res) {
                    console.log(res);
                    $rootScope.vehicules.push(res);
                }
                );
            } else { //modification
                vehiculeData.updateVehicule(item);
            }
            $state.go('vehicules');
        }

    })
    .controller('vehiculeRemove', function ($scope, vehiculeData) {
        console.log('remove')
    })
    ;


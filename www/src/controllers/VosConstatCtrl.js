'use strict';



app
    .controller('constatList', function ($q, $scope, $rootScope, constatData, $state) {

        if ($rootScope.constats.length == 0) {
            constatData.getAllConstat().then(
                function (data) {
                    $rootScope.constats = data;
                }, function (error) {
                    alert(error);
                });
        }


        //suppression depuis la vue
        $scope.constatRemove = function (obj) {
            constatData.deleteConstat(obj.id);
            $rootScope.constats.splice($rootScope.constats.indexOf(obj), 1);

        }

        $scope.gotoEdit = function (id) {
            $state.go('constat', { id: id })
        }


    });
    


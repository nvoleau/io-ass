'use strict';

var items = [
    { 'name': 'MAIF', 'category-id': 1     },
    { 'name': 'MAAF', 'category-id': 1     },
    { 'immat': '47XX154', 'category-id': 2 },
    { 'immat': '12XX254', 'category-id': 2 },
    { 'name': 'Alain', 'category-id': 3    },
    { 'name': 'Marie', 'category-id': 3    }
];

app
    .controller('itemIndex', function ($scope) {


    })
    .controller('itemList', function ($scope) {
        $scope.items = items;

    })
    .controller('itemCreate', function ($scope) {

    })
    .controller('itemRemove', function ($scope) {


    })
;
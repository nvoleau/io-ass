'use strict';

//var app=angular.module('myConstat', ['ionic', 'ngCordova', 'ngCordovaMocks']   )
var app = angular.module('myConstat', ['ionic', 'ngCordova'])

var dataFile = "assuranceC.json";

app.run(function ($ionicPlatform, $rootScope) {


    $ionicPlatform.ready(function () {
        //variable globale
        $rootScope.assurances = [];
        $rootScope.conducteurs = [];
        $rootScope.vehicules = [];
        $rootScope.constat ={}
        
        $rootScope.famille = [
                {id : 1, libelle : "En stationnnement ou à l'arrêt"},
                {id : 2, libelle : "Accidents sur ou aux abords des parkings"},
                {id : 3, libelle : "Véhicules circulent dans le même sens"},
                {id : 4, libelle : "Circulation en sens inverse "},
            ];
            
              $rootScope.sousFamille = [
                {idFamille : 1, id : "1_1", libelle : "En agglomération"},
                {idFamille:1, id : "1_2", libelle : "Hors agglomération"},
                {idFamille:1, id : "1_3", libelle : "Véhicule quitte un stationnnement ouverture portière"},
                {idFamille:1, id : "1_4", libelle : "Véhicule prend un stationnnement"},
                
                {idFamille:3, id : "3_1", libelle : "Sur la même file"},
                {idFamille:3, id : "3_2", libelle : "Sur des files différentes"},
                {idFamille:3, id : "3_3", libelle : "Doublements"},
                {idFamille:3, id : "3_4", libelle : "Changement de direction à droite"},
                {idFamille:3, id : "3_5", libelle : "Changement de direction à gauche"},
                
                {idFamille:5, id : "5_1", libelle : "Priorité à droite"},
                {idFamille:5, id : "5_2", libelle : "Non respect d'une signalisation"},
                {idFamille:5, id : "5_3", libelle : "Accidents aux feux tricolores"},
                
                {idFamille:6, id : "6_1", libelle : "Véhicule s'engage sur un rond-point"},
                {idFamille:6, id : "6_2", libelle : "Véhicules circulent sur un rond-point"},
                 
            ];
       

        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})


app.config(function ($stateProvider, $urlRouterProvider) {

    ///////////////////////////////////////////// pages
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
        //controller:'HomeCtrl'
    })

    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
    })

    $stateProvider.state('conseils', {
        url: '/conseils',
        templateUrl: 'views/conseils.html'
    })

    ///////////////////////////////////////////// ASSURANCE
    $stateProvider.state('assurances', {
        url: '/assurances',
        templateUrl: 'views/assurances.html',
        controller: 'assList'
    })
    $stateProvider.state('assurances_form', {
        url: '/assurances_form/{id}',
        templateUrl: 'views/assurances_form.html',
        controller: 'assForm',
        params: {
            id: { value: null },
        },
    })


    ///////////////////////////////////////////// VEHICULE
    $stateProvider.state('vehicules', {
        url: '/vehicules',
        templateUrl: 'views/vehicules.html',
        controller: 'vehiculeList'

    })
    $stateProvider.state('vehicules_form', {
        url: '/vehicules_form/{id}',
        templateUrl: 'views/vehicules_form.html',
        controller: 'vehiculeForm',
        params: {
            id: { value: null },
        },
    })

    ///////////////////////////////////////////// CONDUCTEUR
    $stateProvider.state('conducteurs', {
        url: '/conducteurs',
        templateUrl: 'views/conducteurs.html',
        controller: 'conducteurList'
    })
    $stateProvider.state('conducteurs_form', {
        url: '/conducteurs_form/{id}',
        templateUrl: 'views/conducteurs_form.html',
        controller: 'conducteurForm',
        params: {
            id: { value: null },
        },
    })

    ///////////////////////////////////////////// CONSTAT
    $stateProvider.state('const_assurances', {
        url: '/const_assurances',
        templateUrl: 'views/const_assurances.html',
        controller: 'constatForm',
    })

    $stateProvider.state('const_vehicules', {
        url: '/const_vehicules',
        templateUrl: 'views/const_vehicules.html',
        controller: 'constatForm',
    })

    $stateProvider.state('const_conducteurs', {
        url: '/const_conducteurs',
        templateUrl: 'views/const_conducteurs.html',
        controller: 'constatForm',
    })

    $stateProvider.state('const_circonstances', {
        url: '/const_circonstances',
        templateUrl: 'views/const_circonstances.html',
         controller: 'constatForm',
    })
    ///////////////////////////////////////////// CIRCONSTANCE N1
    $stateProvider.state('1_circonst', {
        url: '/1_circonst',
        templateUrl: 'views/circonstances/1_circonst.html',
        controller: 'constatForm',
    })
    ///////////////////////////////////////////// CIRCONSTANCE N1
    $stateProvider.state('1-1-1_accident', {
        url: '/1-1-1_accident',
        templateUrl: 'templates/circonstances/1-1/1-1-1_accident.html',
        controller: 'constatForm',
    })
    $urlRouterProvider.otherwise('/home')

});
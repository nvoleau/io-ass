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
        templateUrl: 'views/const_circonstances.html'
    })
    ///////////////////////////////////////////// CIRCONSTANCE N1
    $stateProvider.state('1-1_circonst', {
        url: '/1-1_circonst',
        templateUrl: 'views/circonstances/1-1_circonst.html'
    })
    ///////////////////////////////////////////// CIRCONSTANCE N1
    $stateProvider.state('1-1-1_accident', {
        url: '/1-1-1_accident',
        templateUrl: 'templates/circonstances/1-1/1-1-1_accident.html'
    })
    $urlRouterProvider.otherwise('/home')

});
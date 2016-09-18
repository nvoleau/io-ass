'use strict';

//var app=angular.module('myConstat', ['ionic', 'ngCordova', 'ngCordovaMocks']   )
var app = angular.module('myConstat', ['ionic', 'ngCordova'])

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
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
        //controller:'AboutCtrl'
    })

    $stateProvider.state('conseils', {
        url: '/conseils',
        templateUrl: 'views/conseils.html'
        //controller:'AboutCtrl'
    })
    ///////////////////////////////////////////// LISTES DES INFOS
    $stateProvider.state('assurances', {
        url: '/assurances',
        templateUrl: 'views/assurances.html'
        /////////// controller: 'allAssCtrl'
    })

    $stateProvider.state('vehicules', {
        url: '/vehicules',
        templateUrl: 'views/vehicules.html'

    })

    $stateProvider.state('conducteurs', {
        url: '/conducteurs',
        templateUrl: 'views/conducteurs.html'
    })

    ///////////////////////////////////////////// AJOUTER DANS LA LISTE
    $stateProvider.state('add_assurances', {
        url: '/add_assurances',
        templateUrl: 'views/add_assurances.html',
        controller: 'AddCtrl'
    })

    $stateProvider.state('add_vehicules', {
        url: '/add_vehicules',
        templateUrl: 'views/add_vehicules.html'
        /////////// controller: 'AddCtrl'
    })

    $stateProvider.state('add_conducteurs', {
        url: '/add_conducteurs',
        templateUrl: 'views/add_conducteurs.html'
        /////////// controller: 'AddCtrl'
    })

    ///////////////////////////////////////////// CONSTAT
    $stateProvider.state('const_assurances', {
        url: '/const_assurances',
        templateUrl: 'views/const_assurances.html'
    })

    $stateProvider.state('const_vehicules', {
        url: '/const_vehicules',
        templateUrl: 'views/const_vehicules.html'
    })

    $stateProvider.state('const_conducteurs', {
        url: '/const_conducteurs',
        templateUrl: 'views/const_conducteurs.html'
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
        templateUrl: 'views/circonstances/1-1/1-1-1_accident.html'
    })
    $urlRouterProvider.otherwise('/home')

});
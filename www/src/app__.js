//var app=angular.module('myConstat', ['ionic', 'ngCordova', 'ngCordovaMocks']   )
var app=angular.module('myConstat', ['ionic', 'ngCordovaMocks'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


app.config(function($stateProvider, $urlRouterProvider) {
 
  ///////////////////////////////////////////// pages
  $stateProvider.state('home', {
    url:'/home',
    templateUrl:'templates/home.html'
    //controller:'HomeCtrl'
  })

  $stateProvider.state('about', {
    url:'/about',
    templateUrl:'templates/about.html'
    //controller:'AboutCtrl'
  }) 
  
  ///////////////////////////////////////////// LISTES DES INFOS
  $stateProvider.state('assurances', {
    url:'/assurances',
    templateUrl:'templates/assurances.html',
    controller:'allAssCtrl'
  }) 
  
  $stateProvider.state('vehicules', {
    url:'/vehicules',
    templateUrl:'templates/vehicules.html'

  }) 
  
  $stateProvider.state('conducteurs', {
    url:'/conducteurs',
    templateUrl:'templates/conducteurs.html'
  }) 

  ///////////////////////////////////////////// AJOUTER DANS LA LISTE
  $stateProvider.state('add_assurances', {
    url:'/add_assurances',
    templateUrl:'templates/add_assurances.html',
    controller:'AddCtrl'    
  })

  $stateProvider.state('add_vehicules', {
    url:'/add_vehicules',
    templateUrl:'templates/add_vehicules.html',
    controller:'AddCtrl'
  })

  $stateProvider.state('add_conducteurs', {
    url:'/add_conducteurs',
    templateUrl:'templates/add_conducteurs.html',
    controller:'AddCtrl'
  }) 

  $urlRouterProvider.otherwise('/home')

});



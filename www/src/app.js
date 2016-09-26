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
        $rootScope.constats = [];
        
        $rootScope.famille = [
                {id : 1, libelle : "En stationnnement ou à l'arrêt"},
                {id : 2, libelle : "Accidents sur ou aux abords des parkings"},
                {id : 3, libelle : "Véhicules circulent dans le même sens"},
                {id : 4, libelle : "Circulation en sens inverse"},
                {id : 5, libelle : "Accidents dans un carrefour"},
                {id : 6, libelle : "Accidents sur rond-point"},
                {id : 7, libelle : "Cas Particulier"},
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
            
            $rootScope.circonstance = [
                 {idFamille : 1, idSousFamille : "1_1", id:"1_1_1", libelle : "En stationnement / à l'arrêt régulier", ficheAccident:"17.1A", url:"img/icon/circons/17.1A.png"},
                 {idFamille : 1, idSousFamille : "1_1", id:"1_1_2", libelle : "En stationnement / à l'arrêt irrégulier", ficheAccident:"17.1.1A",url:"img/icon/circons/17.1.1A.png"},
                 {idFamille : 1, idSousFamille : "1_1", id:"1_1_3", libelle : "Véhicule en panne en agglomération", ficheAccident:"17.1.1B",url:"img/icon/circons/17.1.1B.png"},
                 {idFamille : 1, idSousFamille : "1_1", id:"1_1_4", libelle : "Arrêt régulier en agglomération", ficheAccident:"17.1B",url:"img/icon/circons/17.1B.png"},
                 {idFamille : 1, idSousFamille : "1_1", id:"1_1_5", libelle : "Stationnnement en épi sur parking", ficheAccident:"17.1C",url:"img/icon/circons/17.1C.png"},
                 {idFamille : 1, idSousFamille : "1_1", id:"1_1_6", libelle : "En stationnement gênant (devant porte cochère etc...)", ficheAccident:"17.1D",url:"img/icon/circons/17.1D.png"},
                 
                 {idFamille : 1, idSousFamille : "1_2", id:"1_2_1", libelle : "En stationnement / à l'arrêt irrégulier hors agglomération", ficheAccident:"17.1.2A",url:"img/icon/circons/17.1.2A.png"},
                 {idFamille : 1, idSousFamille : "1_2", id:"1_2_2", libelle : "En stationnement / à l'arrêt hors agglomération mais signalé", ficheAccident:"17.1.2B",url:"img/icon/circons/17.1.2B.png"},
                 {idFamille : 1, idSousFamille : "1_2", id:"1_2_3", libelle : "En stationnement / à l'arrêt à cheval sur accotement hors agglomération ", ficheAccident:"17.1.2C",url:"img/icon/circons/17.1.2C.png"},
                 
                 {idFamille : 1, idSousFamille : "1_3", id:"1_3_1", libelle : "Véhicule quitte un stationnement", ficheAccident:"17.2A",url:"img/icon/circons/17.2A.png"},
                 {idFamille : 1, idSousFamille : "1_3", id:"1_3_2", libelle : "Ouverture d'une portière", ficheAccident:"17.2B",url:"img/icon/circons/17.2B.png"},
                  
                 {idFamille : 1, idSousFamille : "1_4", id:"1_4_1", libelle : "Prend un stationnement en marche avant", ficheAccident:"17.3A",url:"img/icon/circons/17.3A.png"},
                 {idFamille : 1, idSousFamille : "1_4", id:"1_4_1", libelle : "Prend un stationnement en marche arrière", ficheAccident:"17.3B",url:"img/icon/circons/17.3B.png"},
                 
                 {idFamille : 2, idSousFamille : "2", id:"2_1", libelle : "Sortie d'un parking, d'un lieu privé, d'un chemin de terre, d'un lieu non ouvert au public", ficheAccident:"17.4A",url:"img/icon/circons/17.4A.png"},
                 {idFamille : 2, idSousFamille : "2", id:"2_2", libelle : "Véhicule s'engage dans un parking, un lieu privé ...", ficheAccident:"17.5A",url:"img/icon/circons/17.5A.png"},
                
                
                ];
                
            $rootScope.ficheAccident = [
                {id : "17.1A", vecA : 1, vecB : 0, commentaire : "Sauf s'il est en double file ou au milieu de la chaussée, un véhicule en stationnement n'a pas une part active dans un accident, la position de l'autre véhicule importe peu puisqu'il est nécessairement en mouvement", obs_a : "Rien", obs_b:"Rien"},
                {id : "17.1.1A", vecA : 1, vecB : 0, commentaire : "S'il est en double file ou au milieu de la chaussée, un véhicule en stationnement prend une une part passive dans un accident, la position de l'autre véhicule importe peu puisqu'il est nécessairement en mouvement", obs_a : "J'étais arrêté en double file", obs_b:"Le véhicule A était en double file",  obs_nota:""},
                {id : "17.1B", vecA : 1, vecB : 0, commentaire : "Un véhicule est à l'arrêt régulier lorsque son conducteur est au volant et que le véhicule ne bouge pas, par exemple, à l'arrêt à un feu rouge Le conducteur A peut entourer la mention \"à l'arrêt\" dans la zone 12 ou indiquer \"à l'arrêt\" en observations Par contre, si le véhicule est à l'arrêt irégulier, il faut utiliser le cas N° 17.1.1.A", obs_a : "Rien", obs_b:"Rien",  obs_nota:""},
                {id : "17.1C", vecA : 1, vecB : 0, commentaire : "Aucun commentaire", obs_a : "", obs_b:"",  obs_nota:""},
                {id : "17.1D", vecA : 1, vecB : 0, commentaire : "Sauf s'il est en double file ou au milieu de la chaussée, un véhicule en stationnement le long d'un trottoir en agglomération n'a pas une part active dans un accident, même s'il est en stationnement interdit, devant une porte cochère, dans un angle, même devant un commissariat. Cela vous étonne, certains vont en faire une crise cardiaque, mais c'est ainsi !", obs_a : "Rien", obs_b:"Rien", obs_nota:"Si le conducteur du véhicule tamponneur veut mettre en observations que le véhicule A était en stationnement gênant ou interdit, inutile de discuter, laissez le faire, cela ne changera absolument rien du moment que les croix sont placées dans les cases comme sur l'exemple "},
                 {id : "17.1C", vecA : 1, vecB : 0, commentaire : "S'il est en panne ou accidenté sur la chaussée et qu'il est dûment signalé, un véhicule n'a qu'un rôle passif dans l'accident, la position de l'autre véhicule importe peu puisqu'il est nécessairement en mouvement", obs_a : "j'étais en panne avec un triangle de signalisation ", obs_b:"",  obs_nota:""}
                ];
                
                
                $rootScope.circonstanceCase = [
                    {id : 1, libelle:"En stationnement / à l'arrêt"},
                    {id : 2, libelle:"Quittait un stationnement / ouvrait une portière"},
                    {id : 3, libelle:"Prenait un stationnement"},
                    {id : 4, libelle:"sortait d'un parking, d'un lieu privé, d'un chemin de terre"},
                    {id : 5, libelle:"s'engageait dans un parking, un lieu privé, un chemin de terre"},
                    {id : 6, libelle:"s'engageait sur une place giratoire"},
                    {id : 7, libelle:"roulait sur une place à sens giratoire"},
                    {id : 8, libelle:"heurtait à l'arrière,en roulant dans le même sens et sur une même file"},
                    {id : 9, libelle:"roulait dans le même sens et sur une file différente"},
                    {id : 10, libelle:"changeait de file"},
                    {id : 11, libelle:"doublait"},
                    {id : 12, libelle:"virait à droite"},
                    {id : 13, libelle:"virait à gauche"},
                    {id : 14, libelle:"reculait"},
                    {id : 15, libelle:"empiétait sur une voie réservée à la circulation"},
                    {id : 16, libelle:"venait de droite (dans un carefour)"},
                    {id : 17, libelle:"n'avait pas observé un signal de priorité ou un feu rouge"}
                    
                ]
       

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
     $stateProvider.state('constats', {
        url: '/constats',
        templateUrl: 'views/constats.html',
        controller: 'constatList'
    })

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
    ///////////////////////////////////////////// CIRCONSTANCE N2
    $stateProvider.state('2_circonst', {
        url: '/2_circonst',
        templateUrl: 'views/circonstances/2_circonst.html',
        controller: 'constatForm',
    })
    
    $stateProvider.state('vehiculeA', {
        url: '/vehiculeA',
        templateUrl: 'views/circonstances/choixVecA.html',
        controller: 'vehiculeAccident',
    })
     $stateProvider.state('vehiculeB', {
        url: '/vehiculeB',
        templateUrl: 'views/circonstances/choixVecB.html',
        controller: 'vehiculeAccident',
    })

     $stateProvider.state('chocA', {
        url: '/ChocA',
        templateUrl: 'views/circonstances/chocA.html',
        controller: 'vehiculeAccident',
    })
     $stateProvider.state('chocB', {
        url: '/ChocB',
        templateUrl: 'views/circonstances/chocB.html',
        controller: 'vehiculeAccident',
    })

     $stateProvider.state('constat', {
        url: '/constat',
        templateUrl: 'views/circonstances/constat.html',
        controller: 'constatCompletForm',
         params: {
            id: { value: null },
        },
    })
    
    $urlRouterProvider.otherwise('/home')

});
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
    $rootScope.constat = {}
    $rootScope.constats = [];

    $rootScope.famille = [{
        id: 1,
        libelle: "En stationnnement ou à l'arrêt"
      },
      {
        id: 2,
        libelle: "Accidents sur ou aux abords des parkings"
      },
      {
        id: 3,
        libelle: "Véhicules circulent dans le même sens"
      },
      {
        id: 4,
        libelle: "Circulation en sens inverse"
      },
      {
        id: 5,
        libelle: "Accidents dans un carrefour"
      },
      {
        id: 6,
        libelle: "Accidents sur rond-point"
      },
      {
        id: 7,
        libelle: "Cas Particulier"
      },
    ];

    $rootScope.sousFamille = [{
        idFamille: 1,
        id: "1_1",
        libelle: "En agglomération"
      },
      {
        idFamille: 1,
        id: "1_2",
        libelle: "Hors agglomération"
      },
      {
        idFamille: 1,
        id: "1_3",
        libelle: "Véhicule quitte un stationnnement ouverture portière"
      },
      {
        idFamille: 1,
        id: "1_4",
        libelle: "Véhicule prend un stationnnement"
      },

      {
        idFamille: 3,
        id: "3_1",
        libelle: "Sur la même file"
      },
      {
        idFamille: 3,
        id: "3_2",
        libelle: "Sur des files différentes"
      },
      {
        idFamille: 3,
        id: "3_3",
        libelle: "Doublements"
      },
      {
        idFamille: 3,
        id: "3_4",
        libelle: "Changement de direction à droite"
      },
      {
        idFamille: 3,
        id: "3_5",
        libelle: "Changement de direction à gauche"
      },

      {
        idFamille: 5,
        id: "5_1",
        libelle: "Priorité à droite"
      },
      {
        idFamille: 5,
        id: "5_2",
        libelle: "Non respect d'une signalisation"
      },
      {
        idFamille: 5,
        id: "5_3",
        libelle: "Accidents aux feux tricolores"
      },

      {
        idFamille: 6,
        id: "6_1",
        libelle: "Véhicule s'engage sur un rond-point"
      },
      {
        idFamille: 6,
        id: "6_2",
        libelle: "Véhicules circulent sur un rond-point"
      },

    ];

    $rootScope.circonstance = [{
        idFamille: 1,
        idSousFamille: "1_1",
        id: "1_1_1",
        libelle: "En stationnement / à l'arrêt régulier",
        ficheAccident: "17.1A",
        url: "img/icon/circons/17.1A.png"
      },
      {
        idFamille: 1,
        idSousFamille: "1_1",
        id: "1_1_2",
        libelle: "En stationnement / à l'arrêt irrégulier",
        ficheAccident: "17.1.1A",
        url: "img/icon/circons/17.1.1A.png"
      },
      {
        idFamille: 1,
        idSousFamille: "1_1",
        id: "1_1_3",
        libelle: "Véhicule en panne en agglomération",
        ficheAccident: "17.1.1B",
        url: "img/icon/circons/17.1.1B.png"
      },
      {
        idFamille: 1,
        idSousFamille: "1_1",
        id: "1_1_4",
        libelle: "Arrêt régulier en agglomération",
        ficheAccident: "17.1B",
        url: "img/icon/circons/17.1B.png"
      },
      {
        idFamille: 1,
        idSousFamille: "1_1",
        id: "1_1_5",
        libelle: "Stationnnement en épi sur parking",
        ficheAccident: "17.1C",
        url: "img/icon/circons/17.1C.png"
      },
      {
        idFamille: 1,
        idSousFamille: "1_1",
        id: "1_1_6",
        libelle: "En stationnement gênant (devant porte cochère etc...)",
        ficheAccident: "17.1D",
        url: "img/icon/circons/17.1D.png"
      },

      {
        idFamille: 1,
        idSousFamille: "1_2",
        id: "1_2_1",
        libelle: "En stationnement / à l'arrêt irrégulier hors agglomération",
        ficheAccident: "17.1.2A",
        url: "img/icon/circons/17.1.2A.png"
      },
      {
        idFamille: 1,
        idSousFamille: "1_2",
        id: "1_2_2",
        libelle: "En stationnement / à l'arrêt hors agglomération mais signalé",
        ficheAccident: "17.1.2B",
        url: "img/icon/circons/17.1.2B.png"
      },
      {
        idFamille: 1,
        idSousFamille: "1_2",
        id: "1_2_3",
        libelle: "En stationnement / à l'arrêt à cheval sur accotement hors agglomération ",
        ficheAccident: "17.1.2C",
        url: "img/icon/circons/17.1.2C.png"
      },

      {
        idFamille: 1,
        idSousFamille: "1_3",
        id: "1_3_1",
        libelle: "Véhicule quitte un stationnement",
        ficheAccident: "17.2A",
        url: "img/icon/circons/17.2A.png"
      },
      {
        idFamille: 1,
        idSousFamille: "1_3",
        id: "1_3_2",
        libelle: "Ouverture d'une portière",
        ficheAccident: "17.2B",
        url: "img/icon/circons/17.2B.png"
      },

      {
        idFamille: 1,
        idSousFamille: "1_4",
        id: "1_4_1",
        libelle: "Prend un stationnement en marche avant",
        ficheAccident: "17.3A",
        url: "img/icon/circons/17.3A.png"
      },
      {
        idFamille: 1,
        idSousFamille: "1_4",
        id: "1_4_2",
        libelle: "Prend un stationnement en marche arrière",
        ficheAccident: "17.3B",
        url: "img/icon/circons/17.3B.png"
      },

      {
        idFamille: 2,
        idSousFamille: "2",
        id: "2_1",
        libelle: "Sortie d'un parking, d'un lieu privé, d'un chemin de terre, d'un lieu non ouvert au public",
        ficheAccident: "17.4A",
        url: "img/icon/circons/17.4.png"
      },
      {
        idFamille: 2,
        idSousFamille: "2",
        id: "2_2",
        libelle: "Véhicule s'engage dans un parking, un lieu privé ...",
        ficheAccident: "17.5A",
        url: "img/icon/circons/17.5A.png"
      },
      {
        idFamille: 2,
        idSousFamille: "2",
        id: "2_3",
        libelle: "Véhicule s'engage dans un parking un lieu privé etc, un autre en sort",
        ficheAccident: "17.5B",
        url: "img/icon/circons/17.5B.png"
      },
      {
        idFamille: 2,
        idSousFamille: "2",
        id: "2_4",
        libelle: "Les deux véhicules circulent sur un parking",
        ficheAccident: "18.3",
        url: "img/icon/circons/18.3.png"
      },
      {
        idFamille: 3,
        idSousFamille: "3_1",
        id: "3_1_1",
        libelle: "Collision entre deux véhicules",
        ficheAccident: "17.8A",
        url: "img/icon/circons/17.8A.png"
      }, {
        idFamille: 3,
        idSousFamille: "3_1",
        id: "3_1_2",
        libelle: "Collision entre trois véhicules ou plus",
        ficheAccident: "17.8B",
        url: "img/icon/circons/17.8B.png"
      }, {
        idFamille: 3,
        idSousFamille: "3_2",
        id: "3_2_1",
        libelle: "Changement de file sans changement de direction",
        ficheAccident: "17.9A",
        url: "img/icon/circons/17.9A.png"
      }, {
        idFamille: 3,
        idSousFamille: "3_2",
        id: "3_2_2",
        libelle: "Véhicule tourne à droite en changeant de file",
        ficheAccident: "17.10A",
        url: "img/icon/circons/17.10A.png"
      },
      {
        idFamille: 3,
        idSousFamille: "3_2",
        id: "3_2_3",
        libelle: "Véhicule tourne à droite en changeant de file l'autre véhicule circule en partie à gauche",
        ficheAccident: "17.10B",
        url: "img/icon/circons/17.10B.png"
      },
      {
        idFamille: 3,
        idSousFamille: "3_3",
        id: "3_3_1",
        libelle: "Véhicule double et se rabat (queue de poisson)",
        ficheAccident: "17.11A",
        url: "img/icon/circons/17.11A.png"
      },

      {
        idFamille: 3,
        idSousFamille: "3_3",
        id: "3_3_2",
        libelle: "Véhicule double malgré interdiction de doubler",
        ficheAccident: "17.11B",
        url: "img/icon/circons/17.11B.png"
      },
      {
        idFamille: 3,
        idSousFamille: "3_4",
        id: "3_4_2",
        libelle: "Véhicule tourne à droite sans changement de file",
        ficheAccident: "17.12A",
        url: "img/icon/circons/17.12A.png"
      },
      {
        idFamille: 3,
        idSousFamille: "3_4",
        id: "3_4_1",
        libelle: "Véhicule tourne à droite en changeant de file",
        ficheAccident: "17.12C",
        url: "img/icon/circons/17.12C.png"
      },
      {
        idFamille: 3,
        idSousFamille: "3_4",
        id: "3_4_3",
        libelle: "Véhicule tourne à droite malgré interdiction",
        ficheAccident: "17.12B",
        url: "img/icon/circons/17.12B.png"
      },
      {
        idFamille: 3,
        idSousFamille: "3_5",id:"3_5_1",libelle:"Véhicule tourne à gauche sans changer de file",ficheAccident:"17.13A",url:"img/icon/circons/17.13A.png"},
{
        idFamille: 3,
        idSousFamille: "3_5",id:"3_5_2",libelle:"Véhicule tourne à gauche en changeant de file alors qu'un autre le double ",ficheAccident:"17.13B",url:"img/icon/circons/17.13B.png"},
{
        idFamille: 3,
        idSousFamille: "3_5",id:"3_5_3",libelle:"Véhicule tourne à gauche malgré interdiction de tourner ",ficheAccident:"17.13C",url:"img/icon/circons/17.13C.png"},
{
        idFamille: 3,
        idSousFamille: "3_5",id:"3_5_4",libelle:"Véhicule tourne à gauche, l'autre le double malgré interdiction de doubler",ficheAccident:"17.13D",url:"img/icon/circons/17.13D.png"},
{
        idFamille: 3,
        idSousFamille: "3_5",id:"3_5_5",libelle:"Véhicule tourne à gauche, l'autre empîète sur l'axe médian",ficheAccident:"17.13E",url:"img/icon/circons/17.13E.png"},
{
        idFamille: 3,
        idSousFamille: "3_5",id:"3_5_6",libelle:"Véhicule tourne à gauche en changeant de file dans une voie à sens unique ou protégée",ficheAccident:"17.13F",url:"img/icon/circons/17.13F.png"},
{
        idFamille: 3,
        idSousFamille: "3_5",id:"3_5_7",libelle:"Véhicule tourne à gauche vers un parking, un lieu privé, un chemin de terre",ficheAccident:"17.13G",url:"img/icon/circons/17.13G.png"},

{idFamille: 4,idSousFamille: "4",id:"4_1",libelle:"Un véhicule empiète sur l'axe médian",ficheAccident:"17.15A",url:"img/icon/circons/17.15A.png"},
{idFamille: 4,idSousFamille: "4",id:"4_2",libelle:"Les deux véhicules empiètent sur l'axe médian",ficheAccident:"17.15B",url:"img/icon/circons/17.15B.png"},
{idFamille: 4,idSousFamille: "4",id:"4_3",libelle:"Axe médian déporté pour travaux, file de véhicules",ficheAccident:"17.15C",url:"img/icon/circons/17.15C.png"},
{idFamille: 4,idSousFamille: "4",id:"4_4",libelle:"Accident sur chaussée à trois voies ",ficheAccident:"17.15D",url:"img/icon/circons/17.15D.png"},
{idFamille: 4,idSousFamille: "4",id:"4_5",libelle:"Un véhicule fait un demi-tour",ficheAccident:"17.15E",url:"img/icon/circons/17.15E.png"},

{idFamille: 5,idSousFamille: "5_1",id:"5_1_1",libelle:"Véhicule venant de droite dans son couloir",ficheAccident:"17.16A",url:"img/icon/circons/17.16A.png"},
{idFamille: 5,idSousFamille: "5_1",id:"5_1_2",libelle:"Véhicule venant de droite franchit l'axe médian ",ficheAccident:"17.16B",url:"img/icon/circons/17.16B.png"},
{idFamille: 5,idSousFamille: "5_1",id:"5_1_3",libelle:"Véhicule prioritaire tourne à gauche et franchit l'axe médian ",ficheAccident:"17.16C",url:"img/icon/circons/17.16C.png"},
{idFamille: 5,idSousFamille: "5_1",id:"5_1_4",libelle:"Les deux véhicules franchissent l'axe médian ",ficheAccident:"17.16D",url:"img/icon/circons/17.16D.png"},
{idFamille: 5,idSousFamille: "5_1",id:"5_1_5",libelle:"Les deux véhicules tournent dans la même direction ",ficheAccident:"17.16E",url:"img/icon/circons/17.16E.png"},

{idFamille: 5,idSousFamille: "5_2",id:"5_2_1",libelle:"Non respect d'une balise ou d'un stop",ficheAccident:"17.17A",url:"img/icon/circons/17.17A.png"},
{idFamille: 5,idSousFamille: "5_2",id:"5_2_2",libelle:"Les deux véhicules franchissent une balise ou un stop ou un feu rouge",ficheAccident:"17.17B",url:"img/icon/circons/17.17B.png"},
{idFamille: 5,idSousFamille: "5_2",id:"5_2_3",libelle:"Non respect des flèches au sol",ficheAccident:"17.17C",url:"img/icon/circons/17.17C.png"},
{idFamille: 5,idSousFamille: "5_2",id:"5_2_4",libelle:"Véhicule arrêté à un stop, une balise, un feu rouge",ficheAccident:"17.17D",url:"img/icon/circons/17.17D.png"},
{idFamille: 5,idSousFamille: "5_2",id:"5_2_5",libelle:"Véhicule circule en sens interdit ",ficheAccident:"17.17E",url:"img/icon/circons/17.17E.png"},

{idFamille: 5,idSousFamille: "5_3",id:"5_3_1",libelle:"Un véhicule ne respecte pas un feu rouge",ficheAccident:"17.18A",url:"img/icon/circons/17.18A.png"},
{idFamille: 5,idSousFamille: "5_3",id:"5_3_2",libelle:"Deux véhicules passent au feu orange clignotant",ficheAccident:"17.18B",url:"img/icon/circons/17.18B.png"},
{idFamille: 5,idSousFamille: "5_3",id:"5_3_3",libelle:"Les deux véhicules passent au feu vert en sens inverse l'un d'eux franchit l'axe médian  en tournant à gauche",ficheAccident:"17.18C",url:"img/icon/circons/17.18C.png"},
{idFamille: 5,idSousFamille: "5_3",id:"5_3_4",libelle:"Véhicule passe à une flèche orange clignotante",ficheAccident:"17.18D",url:"img/icon/circons/17.18D.png"},
{idFamille: 5,idSousFamille: "5_3",id:"5_3_5",libelle:"Couleur des feux indéterminée ou en panne ou les deux conducteurs disent être passés au feu vert",ficheAccident:"17.18E",url:"img/icon/circons/17.18E.png"},

{idFamille: 6,idSousFamille: "6_1",id:"6_1_1",libelle:"Rond-point non protégé par des balises",ficheAccident:"17.6A",url:"img/icon/circons/17.6A.png"},
{idFamille: 6,idSousFamille: "6_1",id:"6_1_2",libelle:"Rond-point avec balises",ficheAccident:"17.6B",url:"img/icon/circons/17.6B.png"},
{idFamille: 6,idSousFamille: "6_2",id:"6_2",libelle:"Les deux véhicules circulent sur un ",ficheAccident:"17.7A",url:"img/icon/circons/17.7A.png"},

{idFamille: 7,idSousFamille: "7",id:"7_1",libelle:"Objet tombant d'un véhicule",ficheAccident:"18.1",url:"img/icon/circons/18.1.png"},
{idFamille: 7,idSousFamille: "7",id:"7_2",libelle:"Objet présent sur la chaussée",ficheAccident:"18.2",url:"img/icon/circons/18.2.png"},
{idFamille: 7,idSousFamille: "7",id:"7_3",libelle:"Circulation sur un parking",ficheAccident:"18.3",url:"img/icon/circons/18.3.png"},
{idFamille: 7,idSousFamille: "7",id:"7_4",libelle:"Manœuvre de sauvetage ",ficheAccident:"18.4",url:"img/icon/circons/18.4.png"},
{idFamille: 7,idSousFamille: "7",id:"7_5",libelle:"Bandes blanches ou jaunes matérialisant une limite",ficheAccident:"18.5",url:"img/icon/circons/18.5.png"},
{idFamille: 7,idSousFamille: "7",id:"7_6",libelle:"Bus quittant un arrêt régulier ",ficheAccident:"18.6",url:"img/icon/circons/18.6.png"},
{idFamille: 7,idSousFamille: "7",id:"7_7",libelle:"Collision avec un animal sur la chaussée",ficheAccident:"18.7",url:"img/icon/circons/18.7.png"},
{idFamille: 7,idSousFamille: "7",id:"7_8",libelle:"Collision avec un piéton sur la chaussée",ficheAccident:"18.8",url:"img/icon/circons/18.8.png"},
{idFamille: 7,idSousFamille: "7",id:"7_9",libelle:"Un véhicule recule",ficheAccident:"18.9",url:"img/icon/circons/18.9.png"},
{idFamille: 7,idSousFamille: "7",id:"7_10",libelle:"Accident en France avec un véhicule étranger ",ficheAccident:"18.10",url:"img/icon/circons/18.10.png"},
{idFamille: 7,idSousFamille: "7",id:".7_11",libelle:"Adversaire non assuré",ficheAccident:".18-11",url:"img/icon/circons/.18.11.png"},


    ];

    $rootScope.ficheAccident = [{
        id: "17.1A",
        vecA: [1],
        vecB: [0],
        total_A: 1,
        total_B: 0,
        commentaire: "Sauf s'il est en double file ou au milieu de la chaussée, un véhicule en stationnement n'a pas une part active dans un accident, la position de l'autre véhicule importe peu puisqu'il est nécessairement en mouvement",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.1.1A",
        vecA: [1],
        vecB: [0],
        total_A: 1,
        total_B: 0,
        commentaire: "S'il est en double file ou au milieu de la chaussée, un véhicule en stationnement prend une une part passive dans un accident, la position de l'autre véhicule importe peu puisqu'il est nécessairement en mouvement",
        obs_a: "J'étais arrêté en double file",
        obs_b: "Le véhicule A était en double file",
        obs_nota: ""
      },
      {
        id: "17.1B",
        vecA: [1],
        vecB: [0],
        total_A: 1,
        total_B: 0,
        commentaire: "Un véhicule est à l'arrêt régulier lorsque son conducteur est au volant et que le véhicule ne bouge pas, par exemple, à l'arrêt à un feu rouge Le conducteur A peut entourer la mention \"à l'arrêt\" dans la zone 12 ou indiquer \"à l'arrêt\" en observations Par contre, si le véhicule est à l'arrêt irégulier, il faut utiliser le cas N° 17.1.1.A",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.1C",
        vecA: [1],
        vecB: [0],
        total_A: 1,
        total_B: 0,
        commentaire: "Aucun commentaire",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.1D",
        vecA: [1],
        vecB: [0],
        total_A: 1,
        total_B: 0,
        commentaire: "Sauf s'il est en double file ou au milieu de la chaussée, un véhicule en stationnement le long d'un trottoir en agglomération n'a pas une part active dans un accident, même s'il est en stationnement interdit, devant une porte cochère, dans un angle, même devant un commissariat. Cela vous étonne, certains vont en faire une crise cardiaque, mais c'est ainsi !",
        obs_a: "",
        obs_b: "",
        obs_nota: "Si le conducteur du véhicule tamponneur veut mettre en observations que le véhicule A était en stationnement gênant ou interdit, inutile de discuter, laissez le faire, cela ne changera absolument rien du moment que les croix sont placées dans les cases comme sur l'exemple "
      },
      {
        id: "17.1C",
        vecA: [1],
        vecB: [0],
        total_A: 1,
        total_B: 0,
        commentaire: "S'il est en panne ou accidenté sur la chaussée et qu'il est dûment signalé, un véhicule n'a qu'un rôle passif dans l'accident, la position de l'autre véhicule importe peu puisqu'il est nécessairement en mouvement",
        obs_a: "j'étais en panne avec un triangle de signalisation ",
        obs_b: "",
        obs_nota: ""
      },

      {
        id: "17.1.2A",
        vecA: [1],
        vecB: [0],
        total_A: 1,
        total_B: 0,
        commentaire: "S'il est en panne ou accidenté sur la chaussée un véhicule doit placer un triangle de signalisation. La position de l'autre véhicule importe peu puisqu'il est nécessairement en mouvement",
        obs_a: "j'étais en panne sur la chaussée ",
        obs_b: "véhicule A en panne et non signalé ",
        obs_nota: ""
      },
      {
        id: "17.1.2B",
        vecA: [1],
        vecB: [0],
        total_A: 1,
        total_B: 0,
        commentaire: "S'il est en panne ou accidenté sur la chaussée et qu'il est dûment signalé, un véhicule n'a qu'un rôle passif dans l'accident, la position de l'autre véhicule importe peu puisqu'il est nécessairement en mouvement",
        obs_a: "j'étais en panne avec un triangle de signalisation",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.1.2C",
        vecA: [1],
        vecB: [0],
        total_A: 1,
        total_B: 0,
        commentaire: "S'il est en panne ou accidenté sur la chaussée un véhicule doit placer un triangle de signalisation La position de l'autre véhicule importe peu puisqu'il est nécessairement en mouvement",
        obs_a: "j'étais arrêté à cheval sur l'accotement",
        obs_b: "véhicule A arrêté à cheval sur accotement de la route et non signalé",
        obs_nota: ""
      },
      {
        id: "17.2A",
        vecA: [2],
        vecB: [0],
        total_A: 1,
        total_B: 0,
        commentaire: "Un véhicule qui quitte un stationnement doit vérifier qu'il peut le faire sans danger. Si le véhicule a déjà repris sa place dans la circulation et qu'il est touché par l'arrière, c'est un choc arrière et le véhicule B doit cocher la case 8",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.2B",
        vecA: [2],
        vecB: [0],
        total_A: 1,
        total_B: 0,
        commentaire: "La position normale d'une portière, c'est d'être fermée. Que la portière soit ouverte pendant le passage de l'autre véhicule ou que la portière soit déjà ouverte avant l'arrivée de l'autre véhicule importe peu",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.3A",
        vecA: [2],
        vecB: [0],
        total_A: 1,
        total_B: 0,
        commentaire: "On ne parle jamais de clignotants mis ou non par le véhicule qui est devant. Le véhicule qui est derrière doit garder la maîtrise de son véhicule",
        obs_a: "",
        obs_b: "",
        obs_nota: "Si vous attendez qu'une place se libère pour vous garer et que vous êtes à l'arrêt, ne cochez pas la case N° 3 'prenait un stationnement' mais la case N° 1 'à l'arrêt'"
      },
      {
        id: "17.3B",
        vecA: [3, 14],
        vecB: [0],
        total_A: 2,
        total_B: 0,
        commentaire: "La direction normale d'un véhicule est nécessairement vers l'avant. Un véhicule qui circule en marche arrière perturbe la circulation",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.4A",
        vecA: [4],
        vecB: [0],
        total_A: 1,
        total_B: 0,
        commentaire: "Attention ! Si le véhicule qui sort du parking, d'un lieu privé etc. ne s'est pas encore engagé sur la chaussée principale,  et que l'autre véhicule s'engage lui-même dans cette voie, ce cas n'est pas applicable car il s'agit d'un accident de sens inverse et c'est la position des deux véhicules par rapport à l'axe médian qui est à considérer",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.5A",
        vecA: [5],
        vecB: [8],
        total_A: 1,
        total_B: 1,
        commentaire: "Le fait de s'engager dans un parking ou une autre voie en tourant à droite ne constitue pas une manœuvre perturbatrice de la circulation. Il s'agit en fait d'un banal choc arrière. A noter que l'on ne s'occupe jamais des clignotants..!",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.5B",
        vecA: [5, 15],
        vecB: [0],
        total_A: 2,
        total_B: 0,
        commentaire: "Attention ! Si le véhicule qui sort du parking, d'un lieu privé etc. ne s'est pas encore engagé sur la chaussée principale,  et que l'autre véhicule s'engage lui-même dans cette voie, il s'agit d'un accident de sens inverse et c'est la position des deux véhicules par rapport à l'axe médian qui est à considérer",
        obs_a: "",
        obs_b: "Je n'étais pas encore sorti du parking et j'étais sur ma droite",
        obs_nota: ""
      },
      {
        id: "17.6A",
        vecA: [6, 16],
        vecB: [7],
        total_A: 2,
        total_B: 1,
        commentaire: "Attention : Si la majorité des ronds-points est pourvue de balises de non priorité pour les véhicules qui s'y engagent, il subsiste encore des anciens ronds-points sans balises et sur lesquels il y a priorité au véhicule qui s'y engage. C'est donc  la priorité à droite qui s'applique. ",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.6B",
        vecA: [6, 17],
        vecB: [7],
        total_A: 2,
        total_B: 1,
        commentaire: "Dès l'instant où un rond-point est pourvu de balises de non priorité pour les véhicules qui s'y engagent, le véhicule qui y circule déjà a la priorité.",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.7A",
        vecA: [17],
        vecB: [7, 10],
        total_A: 1,
        total_B: 2,
        commentaire: "Si les deux véhicules circulent chacun sur leur voie, ils ne peuvent pas se toucher…! S'ils se touchent, c'est que l'un deux a changé de file ou même les deux véhicules ont changé de file en même temps.",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.8A",
        vecA: [0],
        vecB: [8],
        total_A: 0,
        total_B: 1,
        commentaire: "On doit rester maître de son véhicule, quelles que soient les circonstances….! En cas de choc arrière sur le premier véhicule, le conducteur  du véhicule tamponneur doit cocher la case N° 8 et c'est tout, pas utile d'en mettre plus….!",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.8B",
        vecA: [0],
        vecB: [8],
        total_A: 0,
        total_B: 1,
        commentaire: " 1 - S'il y a collision entre trois véhicules ou plus  2 - Si le véhicule du milieu est poussé sur le premier par le troisième qui se trouve derrière lui, Il faut faire deux constat amiables : le premier constat entre le premier et le deuxième véhicule, le second entre le deuxième et le troisième véhicule et sur les deux, il faudra impérativement mentionner que le troisième véhicule a projeté le second sur le premier ",
        obs_a: "Le véhicule immatriculé XXXXX a projeté le véhicule B sur le mien",
        obs_b: "J'ai été projeté contre le véhicule A par le véhicule immatriculé XXXXX",
        obs_nota: "Attention :  Si la projection n'est pas établie, les dommages avant du véhicule B seront à sa charge ainsi que les dommages arrière du véhicule A  "
      },
      {
        id: "17.9A",
        vecA: [9],
        vecB: [9, 10],
        total_A: 1,
        total_B: 2,
        commentaire: "Si chacun des véhicules circule sur sa file, il ne peut pas y avoir de choc entre eux. A partir du moment où ils se touchent, c'est parce que l'un des deux véhicules a changé de file, même en faisant un simple écart. Dans l'exemple, c'est le véhicule B qui change de file. Si les deux véhicules changent de file, il faudra mettre une croix dans chacune des cases N° 10",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.10A",
        vecA: [9],
        vecB: [9, 10, 12],
        total_A: 1,
        total_B: 3,
        commentaire: "Si un véhicule vire à droite alors qu'il ne circule pas sur la voie la plus à droite, il perturbe la circulation.",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.10B",
        vecA: [9, 15],
        vecB: [9, 10, 12],
        total_A: 2,
        total_B: 3,
        commentaire: "Si un véhicule vire à droite alors qu'il ne circule pas sur la voie la plus à droite, il perturbe la circulation. Mais le véhicule A n'est pas dans sa file non plus…!",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.11A",
        vecA: [0],
        vecB: [10, 11],
        total_A: 0,
        total_B: 2,
        commentaire: "C'est le coup classique de la queue de poisson. Le véhicule qui double se rabat trop vite parce qu'il a pris des risques en doublant. La case 11 appelle obligatoirement une croix dans la case 10",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.11B",
        vecA: [13],
        vecB: [11, 17],
        total_A: 1,
        total_B: 2,
        commentaire: "Il est interdit de doubler et le véhicule A pouvait tourner à gauche sans perturber la circulation. Même configuration si le véhicule a change de file pour s'engager dans un parking, un lieu privé, un chemin de terre, prendre un stationnement.",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.12A",
        vecA: [12],
        vecB: [8],
        total_A: 1,
        total_B: 1,
        commentaire: "Sauf s'il existe une interdiction de tourner à droite, un véhicule peut le faire sans perturber la circulation. Le conducteur qui le suit doit garder la maîtrise de son véhicule",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.12B",
        vecA: [12, 17],
        vecB: [0],
        total_A: 2,
        total_B: 0,
        commentaire: "Si un véhicule tourne à droite alors qu'il existe une interdiction de tourner, il perturbe la circulation",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.12C",
        vecA: [10, 12],
        vecB: [0],
        total_A: 2,
        total_B: 0,
        commentaire: "Un changement de file pour tourner à droite perturbe la circulation",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.13A",
        vecA: [13],
        vecB: [8],
        total_A: 1,
        total_B: 1,
        commentaire: "Sauf s'il existe une interdiction de tourner à gauche, un véhicule peut le faire sans perturber la circulation et le conducteur qui le suit doit rester maître de son véhicule",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.13B",
        vecA: [10, 13],
        vecB: [11],
        total_A: 2,
        total_B: 1,
        commentaire: "Avant de tourner à gauche, le conducteur du véhicule A doit s'assurer qu'il peut le faire sans couper la route à un autre véhicule. Ce cas ne s'applique pas s'il existe une interdiction de doubler ni une interdiction de tourner à gauche",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.13C",
        vecA: [13, 17],
        vecB: [0],
        total_A: 2,
        total_B: 0,
        commentaire: "Lorsqu'il existe une interdiction absolue, le véhicule 'A' ne peut pas tourner à gauche sans perturber la circulation ",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.13D",
        vecA: [13],
        vecB: [11, 17],
        total_A: 1,
        total_B: 2,
        commentaire: "Il est interdit de doubler et le véhicule A pouvait tourner à gauche sans perturber la circulation",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.13E",
        vecA: [13],
        vecB: [11, 15],
        total_A: 1,
        total_B: 2,
        commentaire: "Il est interdit de doubler et le véhicule A pouvait tourner à gauche sans perturber la circulation",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.13F",
        vecA: [10, 13],
        vecB: [0],
        total_A: 2,
        total_B: 0,
        commentaire: "Lorsque les deux véhicules circulent sur une voie prioritaire, c'est celui qui change de file qui perturbe la circulation",
        obs_a: "",
        obs_b: "Je circulais sur une voie prioritaire (sens unique, feu vert etc..) ",
        obs_nota: ""
      },
      {
        id: "17.13G",
        vecA: [5, 10, 13],
        vecB: [0],
        total_A: 3,
        total_B: 0,
        commentaire: "Un véhicule qui tourne à gauche vers un parking, une voie privée, un chemin de terre perturbe la circulation",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.15A",
        vecA: [0],
        vecB: [15],
        total_A: 0,
        total_B: 1,
        commentaire: "Petite définition : l'axe médian est la ligne matérialisée (ligne continue ou discontinue) ou imaginaire (en l'absence de marquage) qui sépare en deux parties égales la portion de chaussée sur laquelle les automobilistes peuvent circuler. Chacun des automobilistes ayant le droit (et le devoir) de circuler sur la moitié de route dans son sens de circulation, tout dépassement de l'axe médian est constitutif d'une faute.  En l'absence de marquage au sol, il est prudent d'avoir toujours un mètre ruban et une boîte de craies dans son véhicule",
        obs_a: "",
        obs_b: "",
        obs_nota: "Astuce : si le conducteur B qui empîète sur l'axe médian refuse de cocher la case 15, le conducteur du véhicule A devra mettre en observations 'je roulais à ma droite' "
      },
      {
        id: "17.15B",
        vecA: [15],
        vecB: [15],
        total_A: 1,
        total_B: 1,
        commentaire: "Petite définition : l'axe médian est la ligne matérialisée (ligne continue ou discontinue) ou imaginaire (en l'absence de marquage) qui sépare en deux parties égales la portion de chaussée sur laquelle les automobilistes peuvent circuler. Chacun des automobilistes ayant le droit (et le devoir) de circuler sur la moitié de route dans son sens de circulation, tout dépassement de l'axe médian est constitutif d'une faute. Si les deux véhicules empîètent l'axe médian la responsabilité sera partagée à 50/50. Conseil   En l'absence de marquage au sol, il est prudent d'avoir toujours un mètre ruban et une boîte de craies dans son véhicule",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.15C",
        vecA: [15],
        vecB: [0],
        total_A: 1,
        total_B: 0,
        commentaire: "Petite définition : l'axe médian est la ligne matérialisée (ligne continue ou discontinue) ou imaginaire (en l'absence de marquage) qui sépare en deux parties égales la portion de chaussée sur laquelle les automobilistes peuvent circuler. Chacun des automobilistes ayant le droit (et le devoir) de circuler sur la moitié de route dans son sens de circulation, tout dépassement de l'axe médian est constitutif d'une faute. Si les deux véhicules empîètent l'axe médian la responsabilité sera partagée à 50/50. Conseil   En l'absence de marquage au sol, il est prudent d'avoir toujours un mètre ruban et une boîte de craies dans son véhicule",
        obs_a: "",
        obs_b: "",
        obs_nota: "Astuce : si le conducteur A qui empîète sur l'axe médian refuse de cocher la case 15, le conducteur du véhicule B devra mettre en observations 'je roulais à ma droite' et indiquer qu'il y avait une file de véhicules (ou des travaux) "
      },
      {
        id: "17.15C",
        vecA: [15],
        vecB: [0],
        total_A: 1,
        total_B: 0,
        commentaire: "Petite définition : l'axe médian est la ligne matérialisée (ligne continue ou discontinue) ou imaginaire (en l'absence de marquage) qui sépare en deux parties égales la portion de chaussée sur laquelle les automobilistes peuvent circuler. Chacun des automobilistes ayant le droit (et le devoir) de circuler sur la moitié de route dans son sens de circulation, tout dépassement de l'axe médian est constitutif d'une faute. Si les deux véhicules empîètent l'axe médian la responsabilité sera partagée à 50/50. Conseil   En l'absence de marquage au sol, il est prudent d'avoir toujours un mètre ruban et une boîte de craies dans son véhicule",
        obs_a: "",
        obs_b: "",
        obs_nota: "Astuce : si le conducteur A qui empîète sur l'axe médian refuse de cocher la case 15, le conducteur du véhicule B devra mettre en observations 'je roulais à ma droite' et indiquer qu'il y avait une file de véhicules (ou des travaux) "
      },
      {
        id: "17.15D",
        vecA: [0],
        vecB: [15, 17],
        total_A: 0,
        total_B: 2,
        commentaire: "Un véhicule ne doit jamais franchir une ligne continue. C'est une faute absolue !",
        obs_a: "Le véhicule B a franchi la ligne continue",
        obs_b: "",
        obs_nota: "Astuce : si le conducteur B qui empîète sur l'axe médian refuse de cocher la case 15, le conducteur du véhicule A devra mettre en observations 'je roulais à ma droite' "
      },
      {
        id: "17.15E",
        vecA: [0],
        vecB: [15],
        total_A: 0,
        total_B: 1,
        commentaire: "Un véhicule qui dérape ou qui, pour une raison quelconque, fait un demi-tour, se retrouve dans la file de la chaussée réservée à la circulation en sens inverse et il dépasse donc l'axe médian.",
        obs_a: "",
        obs_b: "",
        obs_nota: "Astuce : si le conducteur B qui empîète sur l'axe médian refuse de cocher la case 15, le conducteur du véhicule A devra mettre en observations 'je roulais à ma droite' "
      },
      {
        id: "17.16A",
        vecA: [0],
        vecB: [16],
        total_A: 0,
        total_B: 1,
        commentaire: "Si chacun des véhicules est dans dans son couloir de marche, la priorité à droite ne souffre pas d'exception",
        obs_a: "",
        obs_b: "",
        obs_nota: "Astuce : si le conducteur B qui empîète sur l'axe médian refuse de cocher la case 15, le conducteur du véhicule A devra mettre en observations 'je roulais à ma droite' "
      },
      {
        id: "17.16B",
        vecA: [0],
        vecB: [15, 16],
        total_A: 0,
        total_B: 2,
        commentaire: "Le véhicule prioritaire de droite doit circuler dans son couloir de marche. Si ce n'est pas le cas, porte une responsabilité. C'et un cas courant dans les carrefours, les véhicules prioritaires tournant à gauche coupent souvent les axes médians. ",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.16C",
        vecA: [13, 15, 16],
        vecB: [12],
        total_A: 3,
        total_B: 1,
        commentaire: "Attention ! Il n'y a priorité à droite que si les directions se coupent ou se rejoignent. Comme ici les directions des deux véhicules ne se coupent pas et ne se rejoignent pas, c'est leur position par rapport à l'axe médian qui détermine les responsabilités. Le conducteur du véhicule 'A' voudra souvent mettre une croix dans la case 16, mais cela  ne changera rien ",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.16D",
        vecA: [13, 15, 16],
        vecB: [12, 15],
        total_A: 3,
        total_B: 2,
        commentaire: "Attention ! Il n'y a priorité à droite que si les directions se coupent ou se rejoignent. Comme ici les directions des deux véhicules ne se coupent pas et ne se rejoignent pas, c'est leur position par rapport à l'axe médian qui détermine les responsabilités. Ici, ils empiètent tous les deux l'axe médian. ",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.16E",
        vecA: [13, 15],
        vecB: [12],
        total_A: 2,
        total_B: 1,
        commentaire: "Comme les directions des deux véhicules se rejoignent, c'est celui qui empîète sur l'axe médian qui perturbe la circulation",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.17A",
        vecA: [0],
        vecB: [12, 17],
        total_A: 0,
        total_B: 2,
        commentaire: "Une balise ou un stop, il est impératif de les respecter sinon….! Ceci dit, si le véhicule 'B' débiteur de la priorité est déjà intégré à la circulation sur une distance 'confortable' et qu'il est cogné par l'arrière, cela devient un accident de même sens même file avec une croix dans la case N° 8 pour le véhicule 'A'",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.17B",
        vecA: [13, 15, 17],
        vecB: [12, 17],
        total_A: 3,
        total_B: 2,
        commentaire: "Attention ! Deux panneaux identiques s'annulent. En conséquence, c'est comme si les deux véhicules n'avaient pas de balise à respecter. J'ai mis une croix dans les cases 17, mais ce n'est pas indispensable. Il s'agit d'un accident de sens inverse et c'est la position des véhicules par rapport à l'axe médian médian qui prévaut. Ce serait la même chose s'il y avait un stop ou un feu rouge à la place des balises",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.17C",
        vecA: [0],
        vecB: [10, 17],
        total_A: 0,
        total_B: 2,
        commentaire: "Le fléchage au sol, ce n'est pas seulement pour faire 'joli'! Ne pas le respecter constitue une faute ",
        obs_a: "Le véhicule B n'a pas respecté les flèches directionnelles",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.17D",
        vecA: [12, 15],
        vecB: [1],
        total_A: 2,
        total_B: 1,
        commentaire: "Le véhicule qui doit céder le passage n'a pas franchi la limite de la chaussée sur laquelle il circule et il est arrêté au panneau stop ou à la balise. En conséquence, il s'agit d'un accident de sens inverse dans lequel la position des véhicules par rapport à l'axe médian est prépondérante",
        obs_a: "",
        obs_b: "J'étais arrêté au stop (ou balise)",
        obs_nota: ""
      },
      {
        id: "17.17E",
        vecA: [0],
        vecB: [17],
        total_A: 0,
        total_B: 1,
        commentaire: "Oui, cela arrive quelquefois qu'un véhicule circule en sens interdit…!",
        obs_a: "Le véhicule B circulait en sens interdit ",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.18A",
        vecA: [0],
        vecB: [12, 17],
        total_A: 0,
        total_B: 2,
        commentaire: "Quoi dire de plus…! Le feu rouge, il faut le respecter, il sert aussi à vous protéger !",
        obs_a: "Je suis passé au feu vert",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.18B",
        vecA: [0],
        vecB: [12, 16],
        total_A: 0,
        total_B: 2,
        commentaire: "Deux signaux de même valeur s'annulent ! Et on revient aux règles normales de priorité dans un carrefour soit : priorité à droite, présence d'une balise sur une des voies, position des véhicules par rapport à l'axe médian ",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "17.18C",
        vecA: [0],
        vecB: [13, 15],
        total_A: 0,
        total_B: 2,
        commentaire: "Deux signaux de même valeur s'annulent ! Et on revient aux règles normales de priorité dans un carrefour. C'est un accident de sens inverse et c'est la position des véhicules par rapport à l'axe médian qui est déterminante",
        obs_a: "Je suis passé au feu vert",
        obs_b: "Je suis passé au feu vert",
        obs_nota: ""
      },
      {
        id: "17.18D",
        vecA: [0],
        vecB: [12, 17],
        total_A: 0,
        total_B: 2,
        commentaire: "La flèche clignotante ne donne qu'une faculté de passage et non une priorité ! Elle ne permet le franchissement du carrefour que si aucun véhicule ne survient sur la partie de  chaussée qu'il aborde",
        obs_a: "Je suis passé au feu vert",
        obs_b: "Je suis passé à la flèche orange clignotante",
        obs_nota: ""
      },
      {
        id: "17.18E",
        vecA: [0],
        vecB: [16],
        total_A: 0,
        total_B: 1,
        commentaire: "Sauf s'il y a un ou des témoins, difficile de départager les deux versions. Il n'est pas impossible que des feux soient déréglés, mais il faut en apporter la preuve ! Dans la négative, il est toujours difficile de départager  deux automobilistes qui affirment l'un et l'autre  qu'ils sont passés au feu vert…. Sauf  à chercher dans les déclarations qu'ils pourront faire à leurs assureurs respectifs….! Sinon, la priorité à droite s'imposera….",
        obs_a: "Je suis passé au feu vert",
        obs_b: "Je suis passé au feu vert",
        obs_nota: ""
      },
      {
        id: "18.1",
        vecA: [0],
        vecB: [0],
        total_A: 0,
        total_B: 0,
        commentaire: "Lorsqu'un objet quelconque tombe d'un véhicule, son propriétaire est naturellement responsable des dommages causés à d'autres véhicules. La première chose à faire immédiatement est d'identifier le véhicule en cause et si possible prendre l'identité de témoins si le véhicule responsable ne s'arrête pas. Si l'objet tombant ne percute pas directement l'autre véhicule et qu'il se trouve déjà sur la chaussée, cela ne change rien à la manière de rédiger le constat",
        obs_a: "Un objet s'est détaché de mon véhicule et a percuté le véhicule B",
        obs_b: "Un objet s'est détaché du véhicule A et a percuté mon véhicule ",
        obs_nota: ""
      },
      {
        id: "18.2",
        vecA: [0],
        vecB: [0],
        total_A: 0,
        total_B: 0,
        commentaire: "Lorsqu'un objet quelconque est présent sur la chaussée, c'est l'administration ou la société d'autoroute qui est responsable des dommages causés à un véhicule qui circule sur cette chaussée. Là, il est inspensable de prendre les coordonnées d'un ou de plusieurs témoins sinon le recours contre l'organisme responsable est voué à l'échec.",
        obs_a: "Un objet (préciser sa nature) était présent la chaussée et je n'ai pu l'éviter",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "18.3",
        vecA: [0],
        vecB: [0],
        total_A: 0,
        total_B: 0,
        commentaire: "Là, on entend tout et n'importe quoi dans le genre 'sur un parking, il n'y a pas de règle'. Le code de la route s'applique évidemment à tous les véhicules qui circulent sur un parking, qu'il soit public ou privé. Il faut donc respecter  les flèches directionnelles, les balises, les stop, voire les feux tricolores, la priorité à droite, l'axe médian,  etc.",
        obs_a: "",
        obs_b: "",
        obs_nota: "Pour rédiger le constat, reportez-vous aux cas déjà traités qui s'apppliquent suivant les circonstances non respect d'une balise, priorité à droite etc.."
      },
      {
        id: "18.4",
        vecA: [0],
        vecB: [15],
        total_A: 0,
        total_B: 1,
        commentaire: "Se dit manœuvre de sauvetage toute action d'un véhicule visant à éviter un choc avec un autre véhicule, un piéton, un cycliste,un animal un obstacle imprévu. Dans le cas traité d'un véhicule qui sort inopinément d'un lieu privé, il faudra rédiger un second constat avec le véhicule C. Attention !  Rédiger un second constat entre le véhicule B et le véhicule C. Sur ce second constat, le véhicule B ne cochera aucune case alors que le véhicule C cochera la case N° 4. Du côté B il faudra indiquer en observations qu'il a du effectuer une manœuvre de sauvetage et qu'il a percuté le véhicule A (indiquer l'immatriculation de A ) ",
        obs_a: "Un troisième véhicule est sorti brusquement d'une propriété privée",
        obs_b: "Un troisième véhicule est sorti brusquement d'un lieu privé et j'ai braqué à gauche pour l'éviter",
        obs_nota: ""
      },
      {
        id: "18.5",
        vecA: [0],
        vecB: [16],
        total_A: 0,
        total_B: 1,
        commentaire: "Les bandes blanches ou jaunes qui matérialisent les limites d'une chaussée ne sont pas en elles-mêmes des interdictions de franchissement. Dans le cas traité, c'est la priorité à droite qui s'impose. Par contre, lorsqu'elles sont peintes à l'emplacement d'un stop, d'une balise ou d'un feu tricolore, elles constituent la limité à ne pas dépasser elles constituent la limite à ne pas dépasser par le véhicule non prioritaire",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "18.6",
        vecA: [2],
        vecB: [17],
        total_A: 1,
        total_B: 1,
        commentaire: "Un véhicule de transport en commun quittant un arrêt régulier bénéficie d'une priorité pour quitter son arrêt. Les autres véhicules doivent lui céder le passage",
        obs_a: "Je quittais l'arrêt régulier (écrire son nom)",
        obs_b: "",
        obs_nota: ""
      },
      {
        id: "18.7",
        vecA: [0],
        vecB: [0],
        total_A: 0,
        total_B: 0,
        commentaire: "1 - Collision avec un animal domestique :<br> Si l'animal s'est enfui, il n'y a pas grand-chose à faire sinon tenter de l'identifier en questionnant les témoins, les voisins etc. Si l'animal est blessé ou mort, il faut relever son identification sur le collier, sur un tatouage et communiquer ces renseignements à votre assureur. S'il ne comporte pas de moyen d'identification, pévenir les forces de l'ordre. Là encore, il est utile de prendre des témoignages et surtout faire des photos <br> 2 - Collision avec un animal sauvage : <br> Si l'animal est resté sur place, prenez des témoignages, prévenez les forces de l'ordre afin de prouver à votre assureur que vous avez percuté un tel animal. Prenez des photos.<br> 3 - Dans les deux cas :<br> Si vous êtes garanti en 'dommages accidentels', votre assureur vous indemnisera suivant les clauses de votre contrat. Si vous n'avez pas souscrit une telle garantie et que l'animal ne peut pas être identifié comme appartenant à quelqu'un, vous n'avez que vos yeux pour pleurer.Si vous êtes blessé, le FONDS DE GARANTIE pourra prendre en charge votre indemnisation",
        obs_a: "Collision avec un animal sur la chaussée",
        obs_b: "Animal en divagation sur la chaussée",
        obs_nota: ""
      },
      {
        id: "18.8",
        vecA: [0],
        vecB: [0],
        total_A: 0,
        total_B: 0,
        commentaire: "1 - Le piéton n'est pas blessé :<br> Vous rédigez un constat amiable comme si votre adversaire était un véhicule (évidemment, il n'y aura pas de renseignements sur le véhicule à entrer….). Vous indiquez en observations quelle a été l'action du piéton (traversait au feu rouge pour piétons, circulait sur la chaussée hors d'un passage protégé etc…) <br>2 - Le piéton est blessé :  <br> Vous devez demander aux forces de l'ordre de venir établir un constat, sauf si les blessures sont vraiment superficielles auquel cas un constat amiable avec le piéton sera suffisant.<br>3 - Dans les deux cas :<br>Informez votre assureur de l'identité du piéton afin qu'il puisse ouvrir un dossier.",
        obs_a: "Collision avec un piéton qui se trouvait etc…",
        obs_b: "en fonction de l'action du piéton ",
        obs_nota: ""
      },
      {
        id: "18.9",
        vecA: [14],
        vecB: [0],
        total_A: 1,
        total_B: 0,
        commentaire: "Le sens normal de la circulation est en marche avant. Dès lors qu'un véhicule recule, il perturbe la circulation. Ce cas s'applique même si les 2 véhicules sont dans une propriété privée.",
        obs_a: "",
        obs_b: "",
        obs_nota: ""
      }, 
      {
        id: "18.10",
        vecA: [0],
        vecB: [0],
        total_A: 0,
        total_B: 0,
        commentaire: "Les pays de la Communauté Européenne ont adopté un même modèle de constat amiable. Utilisez l'application comme si le véhicule adverse était français et reportez les résultats de l'application sur le constat 'papier' Si l'imprimé que vous utilisez est rédigé en langue étrangère, pour ne pas vous tromper, reportez-vous à celui que vous possèdez en Français pour connaître la traduction de la version étrangère.",
        obs_a: "",
        obs_b: "",
        obs_nota: "Vérifiez bien les documents du véhicule adverse (équivalent de la carte grise, certificat d'assurance etc.)"
      }
    ];


    $rootScope.circonstanceCase = [{
        id: 1,
        libelle: "En stationnement / à l'arrêt"
      },
      {
        id: 2,
        libelle: "Quittait un stationnement / ouvrait une portière"
      },
      {
        id: 3,
        libelle: "Prenait un stationnement"
      },
      {
        id: 4,
        libelle: "sortait d'un parking, d'un lieu privé, d'un chemin de terre"
      },
      {
        id: 5,
        libelle: "s'engageait dans un parking, un lieu privé, un chemin de terre"
      },
      {
        id: 6,
        libelle: "s'engageait sur une place giratoire"
      },
      {
        id: 7,
        libelle: "roulait sur une place à sens giratoire"
      },
      {
        id: 8,
        libelle: "heurtait à l'arrière,en roulant dans le même sens et sur une même file"
      },
      {
        id: 9,
        libelle: "roulait dans le même sens et sur une file différente"
      },
      {
        id: 10,
        libelle: "changeait de file"
      },
      {
        id: 11,
        libelle: "doublait"
      },
      {
        id: 12,
        libelle: "virait à droite"
      },
      {
        id: 13,
        libelle: "virait à gauche"
      },
      {
        id: 14,
        libelle: "reculait"
      },
      {
        id: 15,
        libelle: "empiétait sur une voie réservée à la circulation"
      },
      {
        id: 16,
        libelle: "venait de droite (dans un carefour)"
      },
      {
        id: 17,
        libelle: "n'avait pas observé un signal de priorité ou un feu rouge"
      }

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
      id: {
        value: null
      },
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
      id: {
        value: null
      },
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
      id: {
        value: null
      },
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
      id: {
        value: null
      },
    },
  })

  $urlRouterProvider.otherwise('/home')

});

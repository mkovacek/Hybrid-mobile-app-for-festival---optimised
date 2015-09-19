
angular.module('starter', ['ionic',
    'ui.router',
    'ngStorage',
    'localStorage.services',
    'firebase',
    'firebase.services',
    'data.services',
    'contact.controllers',
    'renaissance.controllers',
    'events.controllers',
    'eventsDetails.controllers',
    'localization.services',
    'pascalprecht.translate',
    'dcbImgFallback',
    'sponsors.controllers',
    'uiGmapgoogle-maps',
    'maps.controllers',
    'mapGeolocation.services'
    ])

    .run(function($ionicPlatform,$ionicPopup,FirebaseService,LocalStorageService,LocalizationService) {
        $ionicPlatform.ready(function() {
            if(LocalStorageService.getData()==null){
                //localization
                LocalizationService.getLanguage()
                    .then(function(data){
                        LocalizationService.setLanguage(data);
                    })
                    .then(function(){
                        //if not exist check internet connection
                        if(window.Connection) {
                            //fetch data
                            if(navigator.connection.type != Connection.NONE) {
                                FirebaseService.getData(LocalStorageService.getLanguage()).then(function(data){
                                    //save data
                                    LocalStorageService.setEvents(data.$getRecord('events'));
                                    LocalStorageService.setRenaissance(data.$getRecord('renaissance'));
                                    LocalStorageService.setContacts(data.$getRecord('contacts'));
                                    LocalStorageService.setSponsors(data.$getRecord('sponsors'));
                                    LocalStorageService.setMapMarkers(data.$getRecord('map'));
                                    LocalStorageService.setData('true');
                                });
                                //alert turn on internet
                            }else{
                                $ionicPopup.alert({
                                    title:"Internet",
                                    content:"{{'content'| translate}}"
                                }).then(function(res){
                                    if(res)
                                        navigator.app.exitApp();
                                });
                            }
                        }
                    })
            }
            //update data
            if(LocalStorageService.getData()!=null){
                LocalizationService.getLanguage()
                    .then(function(data){
                        LocalizationService.setLanguage(data);
                    })
                    .then(function(){
                        if(window.Connection) {
                            if(navigator.connection.type != Connection.NONE) {
                                FirebaseService.getData(LocalStorageService.getLanguage()).then(function(data){
                                    LocalStorageService.setEvents(data.$getRecord('events'));
                                    LocalStorageService.setRenaissance(data.$getRecord('renaissance'));
                                    LocalStorageService.setContacts(data.$getRecord('contacts'));
                                    LocalStorageService.setSponsors(data.$getRecord('sponsors'));
                                    LocalStorageService.setMapMarkers(data.$getRecord('map'));
                                    LocalStorageService.setData('true');
                                });
                            }
                        }
                    })
            }

            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }

        });
    })

    .config(function($stateProvider, $urlRouterProvider, $translateProvider) {
        $stateProvider
            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "js/modules/menu/menu.html"
            })

            .state('app.home', {
                url: "/home",
                views: {
                    'menuContent' :{
                        templateUrl: "js/modules/home/home.html"
                    }
                }
            })

            .state('app.renaissance', {
                url: "/renaissance",
                views: {
                    'menuContent' :{
                        templateUrl: "js/modules/renaissance/renaissance.html",
                        controller: "RenaissanceCtrl as rc"
                    }
                }
            })


            .state('app.events', {
                url: "/events",
                abstract:true,
                views: {
                    'menuContent' :{
                        templateUrl: "js/modules/events/events.html"
                    }
                }
            })

            .state('app.events.day1', {
                url: "/day1/:day",
                views: {
                    'tab-day1' :{
                        templateUrl: "js/modules/events/events-days.html",
                        controller: "EventsCtrl as ec"
                    }
                }
            })


            .state('app.events.day1Details', {
                url: "/day1/:description/:details/:time/:title/:img/:img2",
                views: {
                    'tab-day1' :{
                        templateUrl: "js/modules/events/events-days-details.html",
                        controller: "EventsDetailsCtrl as edc"
                    }
                }
            })

            .state('app.events.day2', {
                url: "/day2/:day",
                views: {
                    'tab-day2' :{
                        templateUrl: "js/modules/events/events-days.html",
                        controller: "EventsCtrl as ec"
                    }
                }
            })

            .state('app.events.day2Details', {
                url: "/day2/:description/:details/:time/:title/:img/:img2",
                views: {
                    'tab-day2' :{
                        templateUrl: "js/modules/events/events-days-details.html",
                        controller: "EventsDetailsCtrl as edc"
                    }
                }
            })

            .state('app.events.day3', {
                url: "/day3/:day",
                views: {
                    'tab-day3' :{
                        templateUrl: "js/modules/events/events-days.html",
                        controller: "EventsCtrl as ec"
                    }
                }
            })

            .state('app.events.day3Details', {
                url: "/day3/:description/:details/:time/:title/:img/:img2",
                views: {
                    'tab-day3' :{
                        templateUrl: "js/modules/events/events-days-details.html",
                        controller: "EventsDetailsCtrl as edc"
                    }
                }
            })

            .state('app.map', {
                url: "/map",
                views: {
                    'menuContent' :{
                        templateUrl: "js/modules/map/map.html",
                        controller: 'MapCtrl as mc'
                    }
                }
            })

            .state('app.sponsors', {
                url: "/sponsors",
                views: {
                    'menuContent' :{
                        templateUrl: "js/modules/sponsors/sponsors.html",
                        controller: 'SponsorsCtrl as sc'
                    }
                }
            })


            .state('app.contact', {
                url: "/contact",
                views: {
                    'menuContent' :{
                        templateUrl: "js/modules/contact/contact.html",
                        controller: 'ContactCtrl as cc'
                    }
                }
            })

            .state('app.help', {
                url: "/help",
                views: {
                    'menuContent' :{
                        templateUrl: "js/modules/help/help.html"
                    }
                }
            })



        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');

        //localization config
        $translateProvider.translations('en', {
            app_name: "Renaissance festival",
            l:"en",
            //menu
            menu_name:"Menu",
            menu_ren_fest: "Renaissance festival",
            menu_about_ren_fest:"About renaissance",
            menu_event:"Events",
            menu_map:"Map",
            menu_sponsors:"Sponsors",
            menu_contact:"Contacts",
            menu_help:"Help",

            //tabs
            day1:"Fri 28.8.",
            day2:"Sat 29.8.",
            day3:"Sun 30.8.",
            exit:"Exit",

            //internet connection popup alert
            title:"Enable internet",
            content:"For first usage please enable internet connection.",

            //event details
            timePlace:"Time and place",
            details:"Description"
        });

        $translateProvider.translations('hr', {
            app_name: "Renesansni festival",
            l:"hr",
            //menu
            menu_name:"Izbornik",
            menu_ren_fest: "Renesansni festival",
            menu_about_ren_fest:"O renesansi",
            menu_event:"Raspored programa",
            menu_map:"Gdje se nalazimo?",
            menu_sponsors:"Sponzori",
            menu_contact:"Kontakt",
            menu_help:"Pomoć",
            //tabs
            day1:"Pet 28.8.",
            day2:"Sub 29.8.",
            day3:"Ned 30.8.",
            exit:"Izlaz",


            //internet connection popup alert
            title:"Uključite internet",
            content:"Prilikom prvog korištenja molimo vas da uključite internet.",

            //event details
            timePlace:"Vrijeme i mjesto:",
            details:"Opis"

        });
        $translateProvider.preferredLanguage("en");
        $translateProvider.fallbackLanguage("en");
    })


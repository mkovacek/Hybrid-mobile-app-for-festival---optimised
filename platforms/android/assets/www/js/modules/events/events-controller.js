(function() {
    "use strict";

    angular.module('events.controllers', []).controller('EventsCtrl', EventsCtrl);

    EventsCtrl.$inject = ['LocalStorageService','DataService','$stateParams'];

    /**
     * @name EventsCtrl
     * @desc Application Controller for Events-day screen. Shows events data for specific day on screen
     */
    function EventsCtrl(LocalStorageService,DataService,$stateParams) {
        this.day=$stateParams.day;
        this.events=DataService.getEventsData(LocalStorageService.getEvents(),this.day)
    }
})();




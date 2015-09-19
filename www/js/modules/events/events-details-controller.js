(function() {
    "use strict";

    angular.module('eventsDetails.controllers', []).controller('EventsDetailsCtrl', EventsDetailsCtrl);

    EventsDetailsCtrl.$inject = ['$stateParams'];

    /**
     * @name EventsDetailsCtrl
     * @desc Application Controller for  events-day-details screen. Shows details about events for on screen
     */
    function EventsDetailsCtrl($stateParams) {
        this.description=$stateParams.description;
        this.img="http://goo.gl/"+$stateParams.img;
        this.img2="http://goo.gl/"+$stateParams.img2;
        this.time=$stateParams.time;
        this.title=$stateParams.title;
        this.details=JSON.parse($stateParams.details);
    }
})();

(function() {
    "use strict";

    angular.module('renaissance.controllers', []).controller('RenaissanceCtrl', RenaissanceCtrl);

    RenaissanceCtrl.$inject = ['LocalStorageService'];

    /**
     * @name RenaissanceCtrl
     * @desc Application Controller for renaissance screen. Shows renaissance data on screen
     */
    function RenaissanceCtrl(LocalStorageService) {
        this.renaissance=LocalStorageService.getRenaissance();
    }
})();
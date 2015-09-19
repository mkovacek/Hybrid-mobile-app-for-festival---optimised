(function() {
    "use strict";

    angular.module('contact.controllers', []).controller('ContactCtrl', ContactCtrl);

    ContactCtrl.$inject = ['LocalStorageService'];

    /**
     * @name ContactCtrl
     * @desc Application Controller for Contact screen. Shows contact data on screen
     */
    function ContactCtrl(LocalStorageService) {
        this.contacts=LocalStorageService.getContacts();
    }
})();


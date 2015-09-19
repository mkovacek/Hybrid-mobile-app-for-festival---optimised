(function() {
    "use strict";
    angular.module('sponsors.controllers', []).controller('SponsorsCtrl', SponsorsCtrl);

    SponsorsCtrl.$inject = ['LocalStorageService','$ionicModal','$scope'];

    /**
     * @name SponsorsCtrl
     * @desc Application Controller for sponsors screen. Shows sponsors data on screen
     *       and sponsors details on modal screen
     */
    function SponsorsCtrl(LocalStorageService,$ionicModal,$scope) {
        var that=this;
        this._$scope=$scope;

        this.sponsors=LocalStorageService.getSponsors();
        $ionicModal.fromTemplateUrl('sponsors-modal.html', {
            scope: that._$scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            that._$scope.modal = modal;
        });
    }

    /**
     * @name openModal
     * @desc It's opening modal
     */
    SponsorsCtrl.prototype.openModal=function(decription,img){
        this.details = {
            description: decription,
            img: img
        };
        this._$scope.modal.show();
    };

    /**
     * @name closeModal
     * @desc It's closing modal
     */
    SponsorsCtrl.prototype.closeModal=function(){
        this._$scope.modal.hide();
    };

})();
(function() {
    "use strict";
    angular.module('maps.controllers', []).controller('MapCtrl', MapCtrl);

    MapCtrl.$inject = ['LocalStorageService', 'MapGeolocationService','$state'];

    /**
     * @name MapCtrl
     * @desc Application Controller for map screen
     */
    function MapCtrl(LocalStorageService, MapGeolocationService,$state) {
        this._LocalStorageService=LocalStorageService;
        this._MapGeolocationService=MapGeolocationService;
        this._$state=$state;
        this.markers=this._LocalStorageService.getMapMarkers();
        var resetLocation= {
            idKey:undefined,
            latitude:undefined,
            longitude:undefined,
            icon: undefined,
            title: undefined
        };
        var userLocation=this._LocalStorageService.getUserLocation()!=null ? this._LocalStorageService.getUserLocation() : resetLocation ;
        this._LocalStorageService.setUserLocation(resetLocation);

        this.options = {
            scrollwheel: false
        };

        this.windowOptions = {
            show: false
        };


        if(userLocation.idKey!=undefined){
            this.markers.push(userLocation);
            this.map = {
                center: {
                    latitude: userLocation.latitude,
                    longitude: userLocation.longitude
                },
                zoom: 16
            };
        }else{
            this.map = {
                center: {
                    latitude: 46.1617581,
                    longitude: 16.8316687
                },
                zoom: 16
            };
        }

    }

    /**
     * @name onClick
     * @desc Open marker
     */
    MapCtrl.prototype.onClick=function(){
        this.windowOptions.show = !this.windowOptions.show;
    };
    /**
     * @name closeClick
     * @desc Close marker
     */
    MapCtrl.prototype.closeClick=function(){
        this.windowOptions.show = false;
    };

    /**
     * @name currentLocation
     * @desc Fetch current user location
     */
    MapCtrl.prototype.currentLocation=function(){
        var that=this;
        this._MapGeolocationService.getLocation().then(function(response){
            that._LocalStorageService.setUserLocation(response);
            that._$state.go(that._$state.current, {}, {reload: true});
        });
    };

})();
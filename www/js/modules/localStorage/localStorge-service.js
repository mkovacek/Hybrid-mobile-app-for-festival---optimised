angular.module('localStorage.services', []).factory('LocalStorageService', LocalStorageService);

LocalStorageService.$inject = ['$localStorage'];

function LocalStorageService($localStorage) {

    return {
        setData:setData,
        getData: getData,
        setContacts:setContacts,
        getContacts:getContacts,
        setRenaissance:setRenaissance,
        getRenaissance:getRenaissance,
        setEvents:setEvents,
        getEvents:getEvents,
        setSponsors:setSponsors,
        getSponsors:getSponsors,
        setMapMarkers:setMapMarkers,
        getMapMarkers:getMapMarkers,
        setUserLocation:setUserLocation,
        getUserLocation:getUserLocation,
        setLanguage:setLanguage,
        getLanguage:getLanguage
    };

    /**
     * @name setData
     * @desc Saving 'true' - representing that data it's in localStorage
     * @param {string} value - true
     */
    function setData(value){
        $localStorage.data=value;
    }

    /**
     * @name getData
     * @desc Looking if data is in localStorage
     * @returns {string} true/false
     */
    function getData(){
        return $localStorage.data;
    }

    /**
     * @name setContacts
     * @desc Saving contacts data to localStorage
     * @param {Object[]|json} value - contacts data in json object
     */
    function setContacts(value){
        $localStorage.contacts=value;
    }

    /**
     * @name getContacts
     * @desc Return contacts data from localStorage
     * @returns {string|list}
     */
    function getContacts(){
        return $localStorage.contacts;
    }

    /**
     * @name setRenaissance
     * @desc Saving renaissance data to localStorage
     * @param {Object[]|json} value - renaissance data in json object
     */
    function setRenaissance(value){
        $localStorage.renaissance=value;
    }

    /**
     * @name getRenaissance
     * @desc Return renaissance data from localStorage
     * @returns {string|list}
     */
    function getRenaissance(){
        return $localStorage.renaissance;
    }

    /**
     * @name setEvents
     * @desc Saving events data to localStorage
     * @param {Object[]|json} value - events data in json object
     */
    function setEvents(value){
        $localStorage.events=value;
    }

    /**
     * @name getEvents
     * @desc Return events data from localStorage
     * @returns {string|list}
     */
    function getEvents(){
        return $localStorage.events;
    }

    /**
     * @name setSponsors
     * @desc Saving sponsors data to localStorage
     * @param {Object[]|json} value - sponsors data in json object
     */
    function setSponsors(value){
        $localStorage.sponsors=value;
    }

    /**
     * @name getSponsors
     * @desc Return sponsors data from localStorage
     * @returns {string|list}
     */
    function getSponsors(){
        return $localStorage.sponsors;
    }

    /**
     * @name setMapMarkers
     * @desc Saving map data to localStorage
     * @param {Object[]|json} value - map data in json object
     */
    function setMapMarkers(value){
        $localStorage.mapMarkers=value;
    }

    /**
     * @name getMapMarkers
     * @desc Return map data from localStorage
     * @returns {string|list}
     */
    function getMapMarkers(){
        return $localStorage.mapMarkers;
    }

    /**
     * @name setUserLocation
     * @desc Saving user location to localStorage
     * @param {string} value - user location (long,lat)
     */
    function setUserLocation(value){
        $localStorage.userLocation=value;
    }

    /**
     * @name getUserLocation
     * @desc Return user location from localStorage
     * @returns {string}
     */
    function getUserLocation(){
        return $localStorage.userLocation;
    }

    /**
     * @name setLanguage
     * @desc Saving smartphone language to localStorage
     * @param {string} value - language value
     */
    function setLanguage(value){
        $localStorage.language=value;
    }

    /**
     * @name getLanguage
     * @desc Return smartphone language from localStorage
     * @returns {string}
     */
    function getLanguage(){
        return $localStorage.language;
    }



}


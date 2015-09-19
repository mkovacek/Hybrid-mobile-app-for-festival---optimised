angular.module('localization.services', []).factory('LocalizationService', LocalizationService);

LocalizationService.$inject = ['$q','$translate','LocalStorageService'];

function LocalizationService($q,$translate,LocalStorageService) {

    return {
        getLanguage:getLanguage,
        setLanguage:setLanguage
    };

    /**
     * @name getLanguage
     * @desc Looking for smartphone language set in settings
     * @returns {string} language that is used on smartphone
     */
    function getLanguage(value){
        var q = $q.defer();
        if (typeof navigator.globalization !== "undefined") {
            navigator.globalization.getPreferredLanguage(function (language)
            {
                $translate.use((language.value).split("-")[0]).then(function (data)
                {
                    q.resolve(data);
                }, function (error) {
                    q.reject(error);
                });
            });
        }
        return q.promise;
    }

    /**
     * @name setLanguage
     * @param {string} lang - language value
     * @desc save smartphone language into localStorage
     */
    function setLanguage(lang){
        switch (lang) {
            case "hr":
                LocalStorageService.setLanguage(lang);
                break;
            default :
                LocalStorageService.setLanguage("en");
        }
    }
}


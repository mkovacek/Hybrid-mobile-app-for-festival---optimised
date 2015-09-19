angular.module('data.services', []).factory('DataService', DataService);

DataService.$inject = [];
/**
 * @name DataService
 * @desc Service for data organization
 */
function DataService() {

    return {
        /**
         * @name getEventsData
         * @desc Organizes events data for some date and push to list
         * @param {string} retrievedData - data about events from local storage
         * @param {string} day - specific day of events
         * @returns {string|list}
         */
        getEventsData:function(retrievedData,day){
            var eventsData;
            switch (day){
                case "day1":
                    eventsData=retrievedData.day1;
                    break;
                case "day2":
                    eventsData=retrievedData.day2;
                    break;
                case "day3":
                    eventsData=retrievedData.day3;
                    break;
            }
            return eventsData;
        }
    };
}


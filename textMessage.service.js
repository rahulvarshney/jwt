(function() {
    'use strict';
    
    angular
        .module('app.core')
        .factory('textMessageService', textMessageService);
        
    textMessageService.$inject = ['$http', 'firebaseDataService', 'SMS_URL'];    
    
    function textMessageService($http, firebaseDataService, SMS_URL) {
        var service = {
            sendTextMessage: sendTextMessage
        };
        
        return service;
        
        //////////////
        
        function sendTextMessage(vasBill, parties) {
            var newTextMessage = {
                phone: vasBill.phone,
                bill: vasBill.$id,
                aptNumber: vasBill.aptNumber,
                rent: vasBill.rent
            };
            
            var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            };            

//            $http.post(SMS_URL, newTextMessage, config)
            $http.post(SMS_URL, vasBill, config)
            .success(function (response, status) {
                console.log(response, status);
                firebaseDataService.textMessages.push(newTextMessage);
                vasBill.notified = true;
            });
        }
    }

    
    
}) ();
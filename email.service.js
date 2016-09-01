(function() {
    'use strict';
    
    angular
        .module('app.core')
        .factory('emailService', emailService);
        
    emailService.$inject = ['$http', 'firebaseDataService', 'EMAIL_URL',
    'SMTP_SERVER', 'SMTP_USERNAME', 'SMTP_PASSWORD', 'COOP_EMAIL',
    'WELCOME_SUBJECT', 'WELCOME_TEXT', 'FBASE_EMAIL_URL'];    
    
    function emailService($http, firebaseDataService, EMAIL_URL,
    SMTP_SERVER, SMTP_USERNAME, SMTP_PASSWORD, COOP_EMAIL, WELCOME_SUBJECT,
    WELCOME_TEXT, FBASE_EMAIL_URL) {
        var service = {
            sendEmail: sendEmail
        };
        
        return service;
        
        //////////////
        
        function sendEmail(email) {

            var emailData = {
                server: SMTP_SERVER,
                username: SMTP_USERNAME,
                password: SMTP_PASSWORD,
                from: COOP_EMAIL,
                to: email,
                subject: WELCOME_SUBJECT,
                text: WELCOME_TEXT,
                fbaseEmailUrl: FBASE_EMAIL_URL
            };

            var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            };

            $http.post(EMAIL_URL, emailData, config)
            .success(function (response, status) {
                console.log(response, status);
            });
        }
    }

    
    
}) ();
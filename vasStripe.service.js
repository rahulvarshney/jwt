(function() {
    'use strict';
    
    angular
        .module('app.core')
        .factory('vasStripeService', vasStripeService);
        
    vasStripeService.$inject = ['$firebaseArray', '$firebaseObject', 'firebaseDataService'];
        
    function vasStripeService($firebaseArray, $firebaseObject, firebaseDataService) {
        
        var vasStripeAccts = null;
        
        var service = {
            StripeRegister: StripeRegister,
            getVasStripeAcctsByUser: getVasStripeAcctsByUser,
            reset: reset
        };
        
        return service;
        
        ////////////
        
        function StripeRegister() {
            
            this.ip = '';
            this.firstName = '';
            this.lastName = '';
            this.entityCity = '';
            this.ssn = '';
            this.routing = '';
            this.account = '';
            this.dobMonth = '';
            this.dobDay = '';
            this.dobYear = '';
            this.rent = '';
            this.done = false;
            this.notified = false;
            this.stripeAcctId = '';
            
        }
        
        function getVasStripeAcctsByUser(uid) {
            if (!vasStripeAccts) {
                console.log('no stripe acct');
                vasStripeAccts = $firebaseArray(firebaseDataService.users.child(uid).child('vasStripeAccts'));
                console.log(vasStripeAccts);
            }
            return vasStripeAccts;
        }
        
        function reset() {
            if (vasStripeAccts) {
                vasStripeAccts.$destroy();
                vasStripeAccts = null;
            }
        }
    }
    
}) ();
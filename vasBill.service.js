(function() {
    'use strict';
    
    angular
        .module('app.core')
        .factory('vasBillService', vasBillService);
        
    vasBillService.$inject = ['$firebaseArray', '$firebaseObject', 'firebaseDataService'];
        
    function vasBillService($firebaseArray, $firebaseObject, firebaseDataService) {
        
        var vasBill = null;
        var vasBills = null;
        var vasPayToAcct = null;
        
        var service = {
            VasBillDraft: VasBillDraft,
            getVasPayToAcct: getVasPayToAcct,
            getVasBillByKey: getVasBillByKey,
            getVasBillsByUser: getVasBillsByUser,
            reset: reset
        };
        
        return service;
        
        ////////////
        
        function VasBillDraft() {
            
            //conditional, if billKey exists, then pre-fill values!
            //first setup defaults here instead of form
            //this will make it easier to test. KISS 
            
            
            this.aptNumber = '';
            this.phone = '';
            this.rent = '';
            this.notified = false;
            this.vasPayToAcct = '';
            this.vasPaymentStatus = 'unpaid';

        }
        
        function getVasPayToAcct(uid) {
            if (!vasPayToAcct) {
//                firebaseDataService.users.child(uid).child('vasStripeAcct').once('value')
//                    .then(function(snapshot) {
//                        vasPayToAcct = snapshot.val();
//                        console.log(snapshot.val());
//                        return vasPayToAcct;
//                    });
                vasPayToAcct = $firebaseObject(firebaseDataService.users.child(uid).child('vasStripeAcct'));
//                vasPayToAcct.$loaded().then(function() {
//                    console.log('loaded record:', vasPayToAcct.$value);
//                });
            }
            return vasPayToAcct;
        }
        
        function getVasBillByKey(vasBillKey) {
            if (!vasBill) {
                 vasBill = $firebaseObject(firebaseDataService.vasBills.child(vasBillKey));
                 console.log(vasBill);
            }
            return vasBill;
        }
        
        function getVasBillsByUser(uid) {
            if (!vasBills) {
                console.log('no bill');
                //NEED TO FIX THIS
                vasBills = $firebaseArray(firebaseDataService.vasBills);
                console.log(vasBills);
            }
            return vasBills;
        }
        
        function reset() {
            if (vasBills) {
                vasBills.$destroy();
                vasBills = null;
            }
        }
    }
    
}) ();
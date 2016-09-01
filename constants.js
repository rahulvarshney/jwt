(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('SMS_URL', 'https://varshneyandsons.webscript.io/textMessage')
    .constant('EMAIL_URL', 'https://varshney.webscript.io/email')
    .constant('SMTP_SERVER', 'smtp.gmail.com')
    .constant('SMTP_USERNAME', '956renter')
    .constant('SMTP_PASSWORD', '956rup33')
    .constant('COOP_EMAIL', '956Renter@Gmail.com')
    .constant('WELCOME_SUBJECT', 'Welcome to Wait and Eat')
    .constant('WELCOME_TEXT', 'Thanks for signing up for Wait and Eat!')
    .constant('FBASE_EMAIL_URL', 'https://rentbyareacode-b1b68.firebaseio.com/emails')
    .constant('CONFIG_JSON', {
      'headers' : {
          'Content-Type': 'application/json'
      }
    })
    .constant('DWOLLA_OAUTH_URL', 'https://varshneyandsons.webscript.io/oauth/dwolla')
    .constant('DWOLLA_OAUTH_USERS_EMAIL_URL', 'https://varshneyandsons.webscript.io/oauth/dwolla/users/email')
    .constant('DWOLLA_OAUTH_CHECKOUT_URL',
      'https://varshneyandsons.webscript.io/oauth/dwolla/checkout')
    .constant('GET_CUSTOM_TOKEN_URL', 'https://varshneyandsons.webscript.io/oauth/token');
})();
'use strict';

angular.module('lapMobile.auth', ['ngOpenFB']).factory('Auth', function ($q, ngFB) {
    var ref = new Firebase("https://lapMobile.firebaseio.com");

    return {
        signInFB: function() {
            ngFB.login({scope: 'email,read_stream,publish_actions'}).then(
                function (response) {
                    if (response.status === 'connected') {
                        console.log('Facebook login succeeded');
                        $scope.closeLogin();
                    } else {
                        alert('Facebook login failed');
                    }
                });
            // ref.authWithOAuthPopup("facebook", function(error, authData) { 
            //     /* Your Code */
            //     console.log(authData);
            // }, {
            //     remember: "sessionOnly",
            //     scope: "email,user_likes"
            // });
        }
    }
});
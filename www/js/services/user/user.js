'use strict';

angular.module('lapMobile.user', []).factory('User', function ($firebaseArray, FIREBASEURL) {
	var itemsRef = new Firebase(FIREBASEURL).child('user');

	var ref, sync, itemsArray;

    var User = {
      getAll: function () {
        return $firebaseArray(itemsRef);
      },
      getLastTen: function () {
      	var query = itemsRef.orderByKey().limitToLast(2);

        return $firebaseArray(query);
      },
      findByUserID: function (topicID) {
        // if (topicID) {
        //   ref = new Firebase(FIREBASE_URL + '/forum/' + topicID);
        //   sync = $firebase(ref);
        //   obj = sync.$asObject();

        //   obj.$loaded().then(function() {

        //   });
        //   return obj;
        // } else {
        //   return null;
        // }
      },
      createUser: function (name, description) {
      	itemsArray = $firebaseArray(itemsRef);
      	return itemsArray.$add({
            'name': name,
            'description': description,
            'timestamp': Date.now()
        });

        // ref = new Firebase(FIREBASE_URL + '/forum/' + topicID + '/messages');
        // sync = $firebase(ref);

        // var createdBy = $rootScope.user.firstname;
        // var createdOn = Date.now();
        // var image = $rootScope.user.image;

        // if (msg) {
        //   sync.$push({ 
        //     createdBy: createdBy,
        //     createdOn: createdOn, 
        //     image: image,
        //     message: msg 
        //    }).then(function() {
        //     ForumIndex.newUpdate(topicID, createdBy, createdOn, image);
        //   }, function(error) {
        //     console.log('Error:', error);
        //   });
        // }
      },
      createFile: function (topicID, filename) {
        // ref = new Firebase(FIREBASE_URL + '/forum/' + topicID + '/messages');
        // sync = $firebase(ref);

        // var createdBy = $rootScope.user.firstname;
        // var createdOn = Date.now();
        // var image = $rootScope.user.image;

        // if (filename) {
        //   sync.$push({ 
        //     createdBy: createdBy,
        //     createdOn: createdOn, 
        //     image: image,
        //     file: filename 
        //    }).then(function() {
        //     ForumIndex.newUpdate(topicID, createdBy, createdOn, image);
        //   }, function(error) {
        //     console.log('Error:', error);
        //   });
        // }
      }
    };

    return User;
});
'use strict';

angular.module('lapMobile.event', []).factory('Event', function ($firebaseArray, FIREBASEURL) {
	var eventRef = new Firebase(FIREBASEURL).child('event');

	var ref, sync, eventArray;

    var Event = {
      getAll: function () {
        return $firebaseArray(eventRef);
      },
      getLastTen: function () {
      	var query = eventRef.orderByKey().limitToLast(2);

        return $firebaseArray(query);
      },
      findByItemID: function (topicID) {
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
      createEvent: function (name, description) {
      	eventArray = $firebaseArray(eventRef);
      	return eventArray.$add({
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

    return Event;
	// return $firebaseArray(eventRef);
});
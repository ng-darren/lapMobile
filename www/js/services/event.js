'use strict';

angular.module('lapMobile.event', []).factory('Event', function ($firebaseArray, FIREBASEURL) {
	var eventRef = new Firebase(FIREBASEURL).child('event');

	var ref, sync, eventArray;

    var Event = {
      getAll: function () {
        return $firebaseArray(eventRef);
      },
      getLastTen: function () {
      	var query = eventRef.orderByKey().limitToLast(4);

        return $firebaseArray(query);
      },
      findByEventID: function (topicID) {
        
      },
      createEvent: function (name, description) {
      	eventArray = $firebaseArray(eventRef);
      	return eventArray.$add({
            'name': name,
            'description': description,
            'timestamp': Date.now(),
            'parent': null,
            'child': {},
            'mediaUrl': {},
            'likes': {},
            'comments': {}
        });
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
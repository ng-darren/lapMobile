'use strict';

angular.module('lapMobile.event', []).factory('Event', function ($firebaseObject, $firebaseArray, FIREBASEURL) {
	var eventsRef = new Firebase(FIREBASEURL).child('event');

	var ref, sync, eventArray;

    var Event = {
      getAll: function () {
        return $firebaseArray(eventsRef);
      },
      getLastTen: function () {
      	var query = eventsRef.orderByKey().limitToLast(4);

        return $firebaseArray(query);
      },
      getByEventId: function (eventId) {
        var eRef = new Firebase(FIREBASEURL).child('event').child(eventId);
        var obj = $firebaseObject(eRef);

        return obj;
      },
      createEvent: function (name, description) {
      	eventArray = $firebaseArray(eventsRef);
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
      createFile: function (eventId, filename) {
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
});
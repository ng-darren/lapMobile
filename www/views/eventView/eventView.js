angular.module('lapMobile.eventView', [])
  .controller('EventCtrl', function($scope, $stateParams, Event) {
    console.log($stateParams);

    $scope.currentEvent = Event.getByEventId($stateParams.eventId);

    
});
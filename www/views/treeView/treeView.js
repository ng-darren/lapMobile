angular.module('lapMobile.treeView', [])
  .controller('TreeCtrl', function($scope, $stateParams, Event) {
    console.log($stateParams);

    $scope.currentEvent = Event.getByEventId($stateParams.eventId);

    
});
angular.module('lapMobile.treeView', [])
  .controller('TreeCtrl', function($scope, $stateParams, $http, $location, $anchorScroll, $window, Event) {
    jsonFlickrFeed = function(data){
        $scope.pics = data.items;
        console.log(data);
        $scope.goBottom();
    }

    $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=cats').success(function (data) {

    });

    $scope.height = { 'height': $window.window.innerHeight + 'px' };
    $scope.width = $window.window.innerWidth;

    $scope.res = {
    	'height': $window.window.innerHeight + 120 + 'px',
    	'width': $window.window.innerWidth + 'px'
    }

    $scope.currentEvent = Event.getByEventId($stateParams.eventId);

    $scope.goBottom = function() {
    	$location.hash('bottom');
    	$anchorScroll();
    };
});
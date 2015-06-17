angular.module('lapMobile.items', []).factory('Items', function ($firebaseArray, FIREBASEURL) {
  var itemsRef = new Firebase(FIREBASEURL + 'items');
  return $firebaseArray(itemsRef);
})
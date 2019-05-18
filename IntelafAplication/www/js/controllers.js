// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCBF-Ve0c9TfK1UvRIyq5H9iqol-zdU-2Y",
  authDomain: "intelaf-980a0.firebaseapp.com",
  databaseURL: "https://intelaf-980a0.firebaseio.com",
  projectId: "intelaf-980a0",
  storageBucket: "intelaf-980a0.appspot.com",
  messagingSenderId: "179333723652",
  appId: "1:179333723652:web:9f9781f70690dc00"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




angular.module('starter.controllers', [])

.controller('categoriasCtrl', function($scope) {

  //categorias
  $scope.categorias = [{
    cat:"Telefonia",
    ico:"fas fa-phone"
  },{
    cat:"Gaming",
    ico:"fas fa-gamepad"
  },{
    cat:"Celulares",
    ico:"fas fa-mobile"
  },{
    cat:"Baterias",
    ico:"fas fa-battery-three-quarters"
  },{
    cat:"Memorias",
    ico:"fab fa-usb"
  },{
    cat:"Televisores",
    ico:"fas fa-tv"
  },{
    cat:"Tablets",
    ico:"fas fa-tablet-alt"
  },{
    cat:"Camaras",
    ico:"fas fa-camera"
  },{
    cat:"Cables",
    ico:"fas fa-network-wired"
  },{
    cat:"Audio",
    ico:"fas fa-volume-up"
  }];



  var starCountRef = firebase.database().ref('Mercaderia/');
  starCountRef.on('value', function(snapshot) {
    console.log(snapshot.val());
  });

})


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

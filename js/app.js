var app=angular.module('myApp',[])
.controller('myCtrl',function($scope){
	 $scope.re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	
	$scope.onSubmit = function(){

      alert("clicked"+$scope.email+$scope.contact);
          $scope.email="";
          $scope.contact="";
	}


})
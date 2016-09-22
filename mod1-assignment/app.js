(function(){
 'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope','$filter'];
    function LunchCheckController($scope,$filter){

      $scope.lunch="";
      $scope.message="";
      $scope.messageColor="";
      $scope.borderColor="";

      $scope.displayMessage=function(){

          var lunchCount=itemsCounter($scope.lunch);
            if(lunchCount==0){
                $scope.message="Please enter data first";
                $scope.messageColor="emptyMessage";
                $scope.borderColor="emptyInput";
            }
            else if(lunchCount<4){
               $scope.message="Enjoy!";
               $scope.messageColor="enjoyMessage";
               $scope.borderColor="enjoyInput";
             }
             else{
               $scope.message="Too much!";
               $scope.messageColor="enjoyMessage";
               $scope.borderColor="enjoyInput";
             }

      };

      //return items number without spaces
      function itemsCounter(string){
        var stringWithoutSpaces=string.split(" ").join("");
        var itemsArray=stringWithoutSpaces.split(',');
        var clearArray=$filter('filter')(itemsArray, Boolean);
        return clearArray.length;
      }
  }
})();

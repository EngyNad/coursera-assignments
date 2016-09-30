(function(){
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject=['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){

    var  toBuyList=this;
    toBuyList.itemName="";
    toBuyList.itemQuantity="";

    toBuyList.items=ShoppingListCheckOffService.getToBuyItems();
    toBuyList.boughtItem=function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    };


  }

  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtList=this;
    boughtList.items=ShoppingListCheckOffService.getBoughtItems();
  //  var shoppingList1=ShoppingListCheckOffService(3);
  }

   function ShoppingListCheckOffService(){
     var service=this;
     var toBuyItems=[
       {
         name:'cookies',
        quantity:10
      },{
          name:'Chips',
          quantity:'1 packet'
      },{
        name:'tomato',
        quantity:'1 k'
      },{
        name:'milk',
        quantity:'1 bottle'
      },{
        name:'juice',
        quantity:'1 bottle'
      }
     ];
     var boughtItems=[];

     service.addItem=function(itemName,quantity){
       var item={
         name:itemName,
         quantity:quantity
       };

       toBuyItems.push(item);

     };

     service.removeItem=function(itemIndex){
       var removedItem=toBuyItems[itemIndex];
         toBuyItems.splice(itemIndex, 1);
         boughtItems.push(removedItem);
     }

     service.getToBuyItems=function(){
       return toBuyItems;
     };

     service.getBoughtItems=function(){
       return boughtItems;
     };


    }

})();

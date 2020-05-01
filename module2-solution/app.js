(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var buyCtrl = this;

    buyCtrl.items = ShoppingListCheckOffService.getItemsToBuy();
    
    buyCtrl.buy = function (index) {
        ShoppingListCheckOffService.buyItem(index);
    }

    buyCtrl.hasItems = function () { 
        return buyCtrl.items.length > 0;
    }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtCtrl = this;

    boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
    
    boughtCtrl.hasItems = function () {
        return boughtCtrl.items.length > 0;
    }
}

function ShoppingListCheckOffService() {
    var service = this;

    var toBuyList = [
        { name: 'cookie', quantity: 10 },
        { name: 'banana', quantity: 3 },
        { name: 'bag of ice', quantity: 2 },
        { name: 'pie', quantity: 1 },
    ];
    var boughtList = [];

    service.getItemsToBuy = function() {
        return toBuyList;
    };

    service.getBoughtItems = function () {
        return boughtList;
    };

    service.buyItem = function (index) {
        var boughtItem = toBuyList.splice(index, 1);
        console.log('bought an item,', boughtItem);
        boughtList.push(...boughtItem);
    }
}
})()
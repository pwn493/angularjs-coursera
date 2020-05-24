(function () {
    "use strict";

    angular.module("public")
    .controller("MyInfoController", MyInfoController);

    MyInfoController.$inject = ["user", "MenuService"];
    function MyInfoController(user, MenuService) {
        var $ctrl = this;
        $ctrl.user = user;
        $ctrl.menuItemDetails = null;

        $ctrl.getMenuItemDetails = function () {
            if ($ctrl.user && $ctrl.user.food) {
                MenuService.getMenuItem($ctrl.user.food).then(function (response) {
                    $ctrl.menuItemDetails = response;
                });
            }
        };

        $ctrl.getMenuItemDetails();
    }
})();
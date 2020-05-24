(function () {
    angular.module("public")
    .controller("NewsletterRegistrationController", NewsletterRegistrationController);

    NewsletterRegistrationController.$inject = ['UserService', 'MenuService'];
    function NewsletterRegistrationController(UserService, MenuService) {
        var ctrl = this;
        ctrl.menuItemError = null;
        ctrl.submitted = false;

        ctrl.submit = function (data) {
            console.log('submitted form data, ', data);
            if (data.food) {
                MenuService.getMenuItem(data.food).then(function (response) {
                    UserService.addUser(data);
                    ctrl.submitted = true;
                    ctrl.menuItemError = null;
                },
                function (error) {
                    console.log(error);
                    ctrl.submitted = false;
                    ctrl.menuItemError = `No such menu number exists (${data.food})`;
                });
            } else {
                UserService.addUser(data);
            }
        };
    }
})();
angular.module('proton.desktopNotifications', [])
.factory('desktopNotifications', function () {
    var notification = {
        status: function() {
            return Push.Permission.get();
        },
        request: function(onGranted, onDenied) {
            Push.Permission.request(onGranted, onDenied);
        },
        create: function(title, params) {
            Push.create(title, params);
        }
    };

    return notification;
});

app.provider('$guestFilter', function () {
    return {
        /** нет необходимоси вохваращть что то. так сервис используется только в config*/
        $get: function () {
            return "$guestFilterProvider";
        },
        
        checkAuth: function () {
            var authCredential = window.localStorage.getItem('sign.authCredential');
            if (authCredential) {
                window.location.href = "/admin"
            }
        }
    }
});
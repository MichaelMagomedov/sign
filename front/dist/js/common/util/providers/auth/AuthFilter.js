app.provider('$authFilter',  function () {
    return {
        /** нет необходимоси вохваращть что то. так сервис используется только в config*/
        $get: function () {
            return "$authFilterProvider";
        },
        checkAuth: function () {
            var authCredential = window.localStorage.getItem('sign.authCredential');
            if (!authCredential) {
                window.location.href = "/auth"
            }
        }
    }
});
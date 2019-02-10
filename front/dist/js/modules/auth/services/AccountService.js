app.service('$accountService', [function () {
    return {
        getMnemonic: function () {
            return eztz.crypto.generateMnemonic();
        },
        generateKeys: function (seed, pass) {
            return eztz.crypto.generateKeys(seed, pass);
        }
    }
}]);

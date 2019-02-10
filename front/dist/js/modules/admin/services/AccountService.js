app.service('$accountService', [function () {
    return {
        getBalance: function (keyHash) {
            return eztz.rpc.getBalance(keyHash);
        }
        
    }
}]);

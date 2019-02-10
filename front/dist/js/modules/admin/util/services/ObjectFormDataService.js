app.service('$objectFormDataService', [function () {
    return {
        push: function (FormData, name, data) {
            var self = this;
            name = name || '';
            if (data != null) {
                if (typeof data === 'object') {
                    
                    Object.keys(data).forEach(function (key) {
                        FormData = self.push(FormData, name + '[' + key + ']', data[key]);
                    });
                    
                } else {
                    FormData.append(name, data);
                }
            }
            return FormData;
        }
        
    }
}]);

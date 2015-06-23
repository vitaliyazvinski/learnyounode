module.exports = function(directoryPath, fileExtension, callback){
    var fs = require('fs');
    var path = require('path');

    fs.readdir(directoryPath, function(err, data){
        if (err) return callback(err);
        data = data.filter(function(value){
            return path.extname(value) == fileExtension
        });
        callback(null, data);
        return data;
    });
}

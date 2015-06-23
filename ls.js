var fs = require('fs');
var path = require('path');
var ls = function (directoryPath, fileExtension, callback) {
    fs.readdir(directoryPath, function (err, data) {
        if (err) return callback(err);
        filteredData = data.filter(function (value) {
            return path.extname(value) == '.'+fileExtension
        });
        callback(null, filteredData);
    });
}

module.exports = ls;
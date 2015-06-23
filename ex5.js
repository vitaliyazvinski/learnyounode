var fs = require('fs');
var path = require('path');

var directoryPath = process.argv[2];
var extString = '.'+process.argv[3];

fs.readdir(directoryPath, function(err, data){
    for(i = 0; i < data.length; i++) {
        if (path.extname(data[i]) == extString)
            console.log(data[i]);
    }
});

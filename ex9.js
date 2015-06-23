var http = require('http');
var bl = require('bl');

for (i = 2; i < process.argv.length; i++) {
    http.get(process.argv[i], function (res) {
        //res.setEncoding('utf-8');
        res.on('error', console.error);
        res.pipe(bl(function (err, data) {
            if (err)
                return console.error(err);
            res.on('end', function () {
                console.log(data.toString());
            });
        }));
    });
}

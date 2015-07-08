var http = require('http');
var bl = require('bl');
var urls = process.argv.slice(2);
var results = [];
var count = 0;

function printContent(){
    for (i = 0; i < results.length; i++){
        console.log(results[i]);
    }
}

urls.map(function(url, index){
    http.get(url, function(res){
        res.pipe(bl(function(err, data){
            if (err) {
                return console.error(err);
            }
            results[index] = data.toString();
            if (++count == urls.length ) {
                printContent();
            }
        }));
    });
});



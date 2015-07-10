var http = require('http');
var url = require('url');

function createHelpResponse(response){
    response.writeHead(200, {'Content-Type': 'text/plain/'});
    return response.end('Use GET request\n' +
        'Pathname must be api/parsetime or api/unixtime\n' +
        '');
}

var apiResponse = function(req, res){
    //var pathname = url.parse(req.url);
    //var query = url.parse(req.url);
    //res.writeHead(200, {'Content-Type': 'application/json'});
    //api/parsetime
    //api/unixtime
    return createHelpResponse(res);
}

var server = http.createServer(function(req, res){
    return apiResponse(req, res);
});
server.listen(4545);
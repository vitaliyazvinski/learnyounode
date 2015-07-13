var http = require('http');
var url = require('url');

function createHelpResponse(response){
    response.writeHead(200, {'Content-Type': 'text/plain/'});
    return response.end('Use GET request\n' +
        'Pathname must be api/parsetime or api/unixtime\n' +
        '');
}

function parseTime(time){
    return JSON.stringify({'hour' : time.getHours(), 'minute' : time.getMinutes(), 'second' : time.getSeconds()});
}

function unixTime(time){
    return JSON.stringify({'unixtime':time.getTime()});
}

var apiResponse = function(req, res){
    var parsedUrl = url.parse(req.url, true);
    var time = new Date(parsedUrl.query['iso']);

    if (parsedUrl.pathname == '/api/parsetime'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        return res.end(parseTime(time));
    }

    if (parsedUrl.pathname == '/api/unixtime'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        return res.end(unixTime(time));
    }

    return createHelpResponse(res);
}

var server = http.createServer(function(req, res){
    return apiResponse(req, res);
});
server.listen(process.argv[2]);
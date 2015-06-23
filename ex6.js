var ls = require('./ls.js');
ls('C:\\Users\\Vitali\\Desktop\\learnyounode', 'js', function(err, data){
    if (err)
    return console.error('There was an error:', err);
    for (var file in data){
        console.log(data[file]);
    }
});
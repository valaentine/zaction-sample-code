module.exports = function (context, params) {
 
    var https = require( 'https' );
    var options = {
        hostname : 'hooks.slack.com' ,
        path     : '/services/***' ,
        method   : 'POST',
        port     : '443'
    };
 
    var payload = {
        "text"       : "New push has come up by " + params.head_commit.author.name + " with commit Id of " + params.head_commit.id
    };
 
    var req = https.request( options , function (res , b , c) {
        res.setEncoding( 'utf8' );
        res.on( 'data' , function (chunk) {
            console.log('Response: ' + chunk);
        } );
    } );
 
    req.on( 'error' , function (e) {
        console.log( 'problem with request: ' + e.message );
    } );
 
    req.write( JSON.stringify( payload ) );
    req.end();
    return {myField: 'hello slack'}
};

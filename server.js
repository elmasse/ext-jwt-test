'use strict';

var express = require('express');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');

var secret = 'Your4w3s0me-S3cr3t';

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(__dirname + '/public/Bookmarks'));

// protect our api
app.use('/api', expressJwt({secret: secret}));

//@endpoint [/authenticate]
app.post('/authenticate', function (req, res) {
    //retrieve here your user from a DB or a third party service
    var username = req.body.username;
    var password = req.body.password;

    if ( !(username === 'hello' && password === 'world') ){
        res.status(401).body('User or password not valid');
    }

    var user = {
        name: 'Hello World',
        email: 'hello@world.com',
        id: 999
    };

    // generate the jwt token with our user info
    var token = jwt.sign(user, secret, {expiresInMinutes: 120});

    // the user object **is** included inside the token!

    res.json({
        user: user, // this is only intended to get a reference in our extjs app
        token: token
    });
});

//@endpoint [/api/news]
//@method GET
app.get('/api/bookmarks', function (req, res) {

    // By default, the decoded token is attached to req.user but can be configured.
    // var userId = req.user.id;

    // now retrieve a list of bookmarks based on the userId
    var bookmarks = [
        {id: 1001, name: 'sencha', url: 'http://www.sencha.com'},
        {id: 1002, name: 'jwt.io', url: 'http://jwt.io'}
    ];

    res.json({data: bookmarks});
});

//define more endpoints here
// ...

app.listen(3000, function() {
    console.log('Express server listening on port 3000');
});

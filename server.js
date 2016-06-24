var express = require('express');
var http = require('http');
var firebase = require("firebase");
// firebase.initializeApp({
//   serviceAccount: {
//     projectId: "The MTO app",
//     clientEmail: "angi3yang@gmail.com",
//     privateKey: "AIzaSyDHlnYt3uuuZLrGHOrd98gCBcxxjhWWhVQ"
//   },
//   databaseURL: "https://the-mto-app-4e5fd.firebaseio.com/"
// });

var port = process.env.PORT || 1337;
var runFolder = "/";

var app = express();

// Static file path.
app.use(express.static(__dirname + runFolder));

var permitStaticNavigation = function(request, response){
    response.sendFile(__dirname + request.url);
};

app.get('/bower_components/**/*.js', permitStaticNavigation);
app.get('/bower_components/**/*.css', permitStaticNavigation);

var permitBuiltNavigation = function(request, response){
    response.sendFile(__dirname + runFolder + request.url);
};

app.get('/styles/**/*.css', permitBuiltNavigation);
app.get('/scripts/**/*.js', permitBuiltNavigation);
app.get('/templates/**/*.html', permitBuiltNavigation);

app.get('*', function(request, response){
    response.sendFile(__dirname + runFolder + '/index.html');
});

app.listen(port);
console.log('server started on port ' + port);
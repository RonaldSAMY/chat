
const express = require('express');
const http = require ('http');
const app = express();
const path = require('path');
const session = require('express-session')({
    secret: 'no secret here ',
    resave: false,
    saveUninitialized: true,
});
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//prot
const port = process.env.PORT || 3000;
const server = http.createServer(app);

require('./socket')(server,session);
//session
app.use(session);
app.use(express.static(path.join(__dirname, '../../chat/dist/')));
require('./routing')(app,path);

serverObj = {
    run : () =>{
        server.listen(3000,()=>{
            console.log('server running');
        });
    }
}

module.exports = serverObj;
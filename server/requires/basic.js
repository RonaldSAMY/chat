
const express = require('express');
const http = require ('http');
const app = express();
const session = require('express-session')({
    secret: 'no secret here ',
    resave: false,
    saveUninitialized: true,
});
//prot
const port = process.env.PORT || 3000;
const server = http.createServer(app);

//session
app.use(session);
require('./routing')(app);

serverObj = {
    run : () =>{
        server.listen(3000,()=>{
            console.log('server running');
        });
    }
}

module.exports = serverObj;
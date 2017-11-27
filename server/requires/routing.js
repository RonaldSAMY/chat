var users = require('./users');
var application = (rout,path)=>{
    
    // check user
    rout.get('/checkUser', (req, res) => {
        if(req.session.user){
            //return res.json({'user':true,'userName':req.session.user,'sessionId':req.session.id});
            var currentUser = users.getUsers()[req.session.user.sessionId];
            return res.json({'user':true,'currentUser':currentUser});
        }
        return res.json({'user':false});

    });

    // login user
    rout.get('/user/:usename', (req, res) => {
        console.log(req.params.usename);
        var user = {
            'name':req.params.usename,
            'sessionId': req.session.id
        }
        req.session.user = user;
        if(req.session.user != ""){
            users.insertUser(req.session.user.sessionId,req.session.user);
            return res.json({'user':true,'userName':req.session.user,'sessionId':req.session.id});
        }
        return res.json({'user':false});
    });

    // logout user
    rout.get('/logout', (req, res) => {
        req.session.destroy((err) => {
            if(err){
                return res.json({'session':true});
            }else{
                return res.json({'session':false});
            }
        });
    });

    rout.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../chat/dist/index.html'));
    });


}

module.exports = application;
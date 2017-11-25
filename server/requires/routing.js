var application = (rout,path)=>{
    
    rout.get('/checkUser', (req, res) => {
        console.log('routing work');
        if(req.session.user){
            return res.json({'user':true,'userName':req.session.user});
        }
        return res.json({'user':false});

    });

    rout.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../chat/dist/index.html'));
    });

}

module.exports = application;
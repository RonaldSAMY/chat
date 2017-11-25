var application = (rout)=>{

    rout.get('/checkUser', (req, res) => {
        console.log('routing work');
        if(req.session.user){
            return res.json({'user':true,'userName':req.session.user});
        }
        return res.json({'user':false});

    });

}

module.exports = application;
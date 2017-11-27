var users = {

    users : {},
    insertUser : (index,user) =>
    {
        users.users[index] = user;
    },

    getUsers : () => {
        return users.users;
    },

    updateUser : (index, param) => {
        if(typeof(users.users[index].socketId) != undefined){
            users.users[index].socketId = param.socketId;
            return true;
        }
        return false;
    }


}

module.exports = users;
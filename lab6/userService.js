var _ = require('lodash')
const users = [
    {
        id: 1,
        name: "John Doe",
        age: 20,
        email: "fakeemail@email.com",
        favoriteSport: "programming"
    },
];

module.exports = {
    getUsers(cb) {
        return new Promise((res, rej) => {
            var usersClone = _.cloneDeep(users);
            setTimeout(() => {
                cb(null, usersClone);
                res(usersClone);
            }, 0);
        });
    },
    getUserByID(id, cb) {
        return new Promise((res, rej) => {
            if(typeof id !== 'number') {
                return setTimeout(() => {
                    cb(new Error('ID should be an int'))
                    rej(new Error('ID should be an int'))
                });
            }
            var user = users.find(u => u.id === id);
            if(user !== null) {
                user = _.cloneDeep(user);
            }
            setTimeout(() => {
                const err = user ? null : new Error('User not found');
                cb(err, user);
                if(err) {
                    return rej(err);
                }
                res(user);
            }, 0);
        });
    },
    addUser(user, cb) {
        return new Promise((res, rej) => {
            var largestID = 0;
            users.forEach(u => {
                largestID = u.id > largestID ? u.id : largestID;
            });
            var newID = largestID + 1;
            user.id = newID;
            users.push(_.cloneDeep(user));
            setTimeout(() => {
                cb(null, user);
                res(user);
            });
        });
    }
} 
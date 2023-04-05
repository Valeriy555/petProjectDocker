const User = require('../dataBase/User');

module.exports = {
    findByParams: async (filter = {}) => {
        return User.find(filter);
    },

    findOneByParams: async (filter = {}) => {
        return User.findOne(filter);
    },
    createOneUser: async (userInfo) => {
        return User.create(userInfo);
    },

    updateOneById: async (userId, newInfo) => {
        return User.findByIdAndUpdate(userId, newInfo, {new:true})
    },

    deleteOneById: async (userId) => {
        return User.deleteOne({_id: userId});
    }
}
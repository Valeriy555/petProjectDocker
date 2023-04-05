const {userServices} = require("../services");

module.exports = {

    getAllUsers: async (req, res, next) => {
        try {
            const users = await userServices.findByParams();

            res.json(users)
        } catch (e) {
            next(e)
        }
    },

    createUsers: async (req, res, next) => {
        try {
            const user = await userServices.createOneUser(req.body);
            res.status(201).json(user)
        } catch (e) {
            next(e);
        }
    },

    updateUserById: async (req, res, next) => {
        try {
            const newUserInfo = req.body;
            const userId = req.params.userId;

            const user = await userServices.updateOneById(userId, newUserInfo);

            res.status(201).json(user);
        }catch (e) {
            next(e);
        }
    },

    deleteUserById: async (req, res, next) => {
        try {
            await userServices.deleteOneById(req.params.userId);

            res.status(204).send('Ok')
        } catch (e) {
            next(e)
        }
    }
}
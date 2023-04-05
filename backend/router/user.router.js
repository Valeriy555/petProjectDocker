const router = require('express').Router();

const UserController = require('../controller/user.controller');
const UserMiddleware = require('../middleware/user.middleware');

router.get('/', UserController.getAllUsers);

router.post('/',
    UserMiddleware.isBodyValidCreate,
    UserMiddleware.userNormalizator,
    UserMiddleware.checkIsEmailUnique,
    UserController.createUsers);

router.put('/:userId',
    UserMiddleware.isBodyValidUpdate,
    UserMiddleware.userNormalizator,
    UserMiddleware.checkIsUserExist,

    UserController.updateUserById);

router.delete('/:userId', UserController.deleteUserById);

module.exports = router;
const ApiError = require("../error/custom.error");
const {userServices} = require("../services");
const {userNormalizator} = require("../normalizator");
module.exports = {

    isBodyValidCreate: (req, res, next) => {
        try {
            const {name, age, email} = req.body;

            if (!name || name.length < 2 || typeof name !== 'string') {
                throw new ApiError('Wrong name', 400);
            }

            if (!age || age < 18 || Number.isNaN(+age)) {
                throw new ApiError('Wrong age', 400);
            }
            // if (!email || !email.includes('@')) {
            //     throw new ApiError('Wrong email', 400);
            // }
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!email || !regex.test(String(email).toLowerCase())) {
                throw new ApiError('Wrong email format', 400);
            }

            next();
        } catch (e) {
            next(e)
        }
    },

    isBodyValidUpdate: (req, res, next) => {  // проверяем на валидность данные пользователя
        try {
            const {name, age, email} = req.body;

            if (name && (name.length < 2 || typeof name !== 'string')) { // валидация name

                throw new ApiError(`Wrong name`, 400);
            }
            if (age && (age < 0 || Number.isNaN(+age))) {   // валидация age

                throw new ApiError(`Wrong age`, 400);
            }
            if (email && !email.includes('@')) {
                throw new ApiError('Wrong email', 400);
            }


            next();
        } catch (e) {
            next(e);
        }
    },

    userNormalizator: (req, res, next) => {
        try {
            const {name, email} = req.body;

            if (name) req.body.name = userNormalizator.name(name);

            if (email) req.body.email = userNormalizator.email(email)// переводит поле email в нижний регистр
            next();
        } catch (e) {
            next(e);
        }
    },
    checkIsEmailUnique: async (req, res, next) => {
        try {
            const {email} = req.body;

            if (!email) {
                throw new ApiError('Email not present', 400);
            }

            const user = await userServices.findOneByParams({email});

            if (user) {
                throw new ApiError('User with this email already exists', 409);
            }
            next();
        } catch (e) {
            next();
        }
    },

    checkIsUserExist: async (req, res, next) => {
        try {
            const {userId} = req.params;

            const user = await userServices.findOneByParams({_id:userId});

            if (!user) {
                throw new ApiError(`User with id ${userId} not found`, 404);
            }

            req.user = user;
            next();
        } catch (e) {
            next(e)
        }
    }
}
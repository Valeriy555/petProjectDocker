import Joi from "joi";

const userValidator = Joi.object({

    name: Joi.string().regex(new RegExp('^[[a-zA-ZА-яёЁіІїЇ]{2,20}$')).required().messages({
        'string.empty': 'Помилка!!name не може бути пустим!!!',
        'string.pattern.base': 'Помилка!! В полі name тільки літери, макс 20 символов'
    }),
    age: Joi.number().min(18).max(100).required().messages({
        'number.base': 'Помилка!! В полі age тільки цифри'
    }),
    email: Joi.string().regex(new RegExp('^[[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')).required().messages({
        'string.empty': 'Помилка!! email не може бути пустим!!!',
        'string.pattern.base': 'Помилка!! не вірний формат email!!!'
    }),
    password: Joi.string().regex(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')).optional().messages({
        'string.empty': 'Помилка!! password не може бути пустим!!!',
        'string.pattern.base': 'Помилка!! Невірний формат password. Пароль повинен містити цифрові та літерні символи і є хоча б одна літера у верхньому регістрі , загалом не меньш ніж 8 символів,' +
            '(приклад Valera1982)'
    }),
});

export {
    userValidator
}
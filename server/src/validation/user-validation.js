import Joi from "joi";


const registerUserValidation = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string()
})

const loginUserValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

export {
    registerUserValidation,
    loginUserValidation
}
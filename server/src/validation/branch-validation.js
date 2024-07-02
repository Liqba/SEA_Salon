import Joi from "joi";

const createBranchValidation = Joi.object({
    name: Joi.string().required(),
    location: Joi.string().required(),
    openingTime: Joi.string().required(),
    closingTime: Joi.string().required()
});

export {
    createBranchValidation
}
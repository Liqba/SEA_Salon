import Joi from "joi";


const createReviewValidation = Joi.object({
    comment: Joi.string().required(),
    rating: Joi.number().required()
});

export {
    createReviewValidation
}
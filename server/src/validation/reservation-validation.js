import Joi from "joi";

const createReservationValidation = Joi.object({
    serviceId: Joi.string().required(),
    dateTime: Joi.string().required()
})

export {
    createReservationValidation
}
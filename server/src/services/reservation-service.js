import { prismaClient } from "../application/database.js";
import { validate } from "../validation/validation.js";
import { createReservationValidation } from "../validation/reservation-validation.js";

const getAll = async () => {
    return prismaClient.service.findMany();
}

const getReservationByUser = async (userId) => {
    return prismaClient.reservation.findMany({
        where: {
            userId: userId
        }
    })
}

const createReservation = async (data) => {
    const reservation = validate(createReservationValidation, data);

    return prismaClient.reservation.create({
        data: reservation
    })
}

const updateReservation = async (reservationId, data) => {
    await prismaClient.reservation.update({
        where: {
            id: reservationId
        },
        data: data
    })

    return "success"
}

const deleteReservation = async (reservationId) => {
    await prismaClient.reservation.delete({
        where: {
            id: reservationId
        }
    })

    return "success"
}

export default {
    getAll,
    getReservationByUser,
    createReservation,
    updateReservation,
    deleteReservation
}
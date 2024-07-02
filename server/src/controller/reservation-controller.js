import reservationService from "../services/reservation-service.js";

const getAllReservations = async (req, res, next) => {
    try {
        const result = await reservationService.getAll();
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const getReservationByUser = async (req, res, next) => {
    try {
        const result = await reservationService.getReservationByUser(req.user.email);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const createReservation = async (req, res, next) => {
    try {
        const result = await reservationService.createReservation(req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const updateReservation = async (req, res, next) => {
    try {
        const result = await reservationService.updateReservation(req.params.id, req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const deleteReservation = async (req, res, next) => {
    try {
        const result = await reservationService.deleteReservation(req.params.id);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

export default {
    getAllReservations,
    getReservationByUser,
    createReservation,
    updateReservation,
    deleteReservation
}
import express from "express";
import userController from "../controller/user-controller.js";
import reviewController from "../controller/review-controller.js";
import reservationController from "../controller/reservation-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";


const userRouter = new express.Router();
userRouter.use(authMiddleware);

userRouter.get('/api/users/current', userController.current);

userRouter.post('api/reviews/create', reviewController.createReview);

userRouter.post('api/reservations/create', reservationController.createReservation);
userRouter.get('api/reservations/get', reservationController.getReservationByUser);
userRouter.put('api/reservations/:id/update', reservationController.updateReservation);
userRouter.delete('api/reservations/:id/delete', reservationController.deleteReservation);

export {
    userRouter
}
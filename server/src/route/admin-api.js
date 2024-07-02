import express from "express";
import { authAdminMiddleware } from "../middleware/adminAuth-middlware.js";
import serviceController from "../controller/service-controller.js";
import reservationController from "../controller/reservation-controller.js";
import branchController from "../controller/branch-controller.js";

const adminRouter = new express.Router();
adminRouter.use(authAdminMiddleware);

adminRouter.post('/api/services/create', serviceController.createServices);
adminRouter.put('/api/services/:id/update', serviceController.updateService);
adminRouter.delete('/api/services/:id/delete', serviceController.deleteService);

adminRouter.get('/api/reservations/get', reservationController.getAllReservations);

adminRouter.post('/api/branches/create', branchController.createBranch);
adminRouter.put('/api/branches/:id/update', branchController.updateBranch);
adminRouter.delete('/api/branches/:id/delete', branchController.deleteBranch);

export {
    adminRouter
}
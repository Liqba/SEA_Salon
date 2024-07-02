import express from "express";
import userController from "../controller/user-controller.js";
import serviceController from "../controller/service-controller.js";
import reviewController from "../controller/review-controller.js";
import branchController from "../controller/branch-controller.js";

const publicRouter = new express.Router();

publicRouter.post('/api/users/register', userController.register);
publicRouter.post('/api/users/login', userController.login);

publicRouter.get('/api/services/get', serviceController.getAllServices);
publicRouter.get('/api/services/:id/get/', serviceController.getServicesByBranch);

publicRouter.get('/api/reviews/get', reviewController.getAllReviews);

publicRouter.get('/api/branches/get', branchController.getAllBranches);
publicRouter.get('/api/branches/:id/get', branchController.getBranchById);

export {
    publicRouter
}
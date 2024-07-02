import reviewService from "../services/review-service.js";

const getAllReviews = async (req, res, next) => {
    try {
        const result = await reviewService.getAllReviews();
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const createReview = async (req, res, next) => {
    try {
        const result = await reviewService.createReview(req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}


export default {
    getAllReviews,
    createReview,
}
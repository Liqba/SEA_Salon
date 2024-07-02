import { prismaClient } from "../application/database.js";
import { validate } from "../validation/validation.js";
import { createReviewValidation } from "../validation/review-validation.js";

const getAllReviews = async () => {
    return prismaClient.review.findMany();
}

const createReview = async (data) => {
    const review = validate(createReviewValidation, data);
    return prismaClient.review.create({
        data: review
    })
}
export default {
    getAllReviews,
    createReview
}
import { prismaClient } from "../application/database.js";
import { validate } from "../validation/validation.js";
import { createReviewValidation } from "../validation/review-validation.js";

const getAllReviews = async () => {
    return prismaClient.review.findMany({
        select: {
            id: true,
            comment: true,
            rating: true,
            customer: {
                select: {
                    fullName: true
                }
            }
        }
    });
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
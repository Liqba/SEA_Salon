import api from "./api";

export const getReviews = async () => {
  try {
    const response = await api.get("/api/reviews/get");
    return response;
  } catch (error) {
    throw error;
  }
};

export const createReview = async (data) => {
  try {
    const response = await api.post("/api/reviews/create", data);
    return response;
  } catch (error) {
    throw error;
  }
}
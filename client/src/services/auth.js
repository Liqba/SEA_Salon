import api from "./api";

export const login = async (email, password) => {
  try {
    const response = await api.post("/api/users/login", { email, password });

    localStorage.setItem("token", response.data.accessToken);
    console.log(response.data.accessToken);
    return response;
  } catch (error) {
    throw error;
  }
};

export const register = async (fullName, email, phoneNumber, password) => {
    try {
      const response = await api.post("/api/users/register", { fullName, email, phoneNumber, password });
      return response;
    } catch (error) {
      throw error;
    }
  }

export const logout = async () => {
  try {

    localStorage.removeItem("token");

    return "success";
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await api.get("/api/users/current");
    return response.data;
  } catch (error) {
    throw error;
  }
};


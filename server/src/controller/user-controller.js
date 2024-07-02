import userService from "../services/user-service.js";


const register = async (req, res, next) => {
    try {
        const result = await userService.register(req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}


const login = async (req, res, next) => {
    try {
        const result = await userService.login(req.body);
        res.cookie("accessToken", result.accessToken);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const current = async (req, res, next) => {
    try {
        const result = await userService.current(req);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

export default {
    register,
    login,
    current
}
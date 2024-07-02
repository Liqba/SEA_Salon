import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import { validate } from "../validation/validation.js";
import { registerUserValidation, loginUserValidation } from "../validation/user-validation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import { v4 as uuid } from "uuid";


const register = async (request) => {
    const user = validate(registerUserValidation, request);

    const countUser = await prismaClient.user.count({
        where: {
            email: user.email
        }
    })

    if (countUser > 0) {
        throw new ResponseError(400, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);

    user.password = hashedPassword;

    return prismaClient.user.create({
        data: user,
        select: {
            email: true
        }
    });
}

const login = async (request) => {
    const user = validate(loginUserValidation, request);

    const userExist = await prismaClient.user.findUnique({
        where: {
            email: user.email
        },
        select: {
            email: true,
            password: true
        }
    })

    if (!userExist) {
        throw new ResponseError(400, "Wrong email or password");
    }

    const isPasswordValid = await bcrypt.compare(user.password, userExist.password);

    if (!isPasswordValid) {
        throw new ResponseError(400, "Wrong email or password");
    }

    const accessToken = generateAccessToken({email: userExist.email});

    return { accessToken }
}

const current = async (request) => {
    return request.user
}

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '7d' })
}

export default {
    register,
    login,
    current
}


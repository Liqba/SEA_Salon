import {prismaClient} from "../application/database.js";
import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers['authorization'];

    const bearerToken = authHeader && authHeader.split(' ')[1];

    if (!bearerToken) {
        res.status(401).json({
            errors: "Unauthorized"
        }).end();
    } else {

        const token = bearerToken

        const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                return null
            }
            return user
        });
        if (!user) {
            res.status(401).json({
                errors: "Unauthorized"
            }).end();
        } else {
            req.user = await prismaClient.user.findUnique({
                where: {
                    email: user.email
                }
            });
            next();
        }
    }   
}
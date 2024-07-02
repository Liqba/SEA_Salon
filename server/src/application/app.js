import express from "express";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { publicRouter } from "../route/public-api.js";
import { userRouter } from "../route/api.js";
import { adminRouter } from "../route/admin-api.js";
// import cookieParser from "cookie-parser";
// import cors from "cors";

const app = express();

app.use(express.json());
// app.use(cookieParser());
// app.use(cors({
//     origin: true,
//     credentials: true
// })
// );
app.use(publicRouter);
app.use(userRouter);
app.use(adminRouter);
app.use(errorMiddleware)

export {app};
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
const app = express();

//morgan은 milldeware이다.
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);




//use -> 누군가가 /user 로 접근해오면 userRouter router 전체를 사용하겠다는 의미.
app.use("/user", userRouter)

//누군가 내 파일을 불러올때 (import) app object를 주겠다.
export default app;
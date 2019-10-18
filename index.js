import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);;

const handleHome = (req, res) => res.send('Heollo  from my home');

const handleProfile = (req, res) => res.send("you are on my profile");


//morgan은 milldeware이다.
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(helmet());
app.use(morgan("dev"));


app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);


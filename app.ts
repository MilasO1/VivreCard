import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import express, { urlencoded, type Application } from "express";

const app: Application = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

// Cors
const corsOptions = {
    origin: process.env.CLIENT_URL, // adresse du frontend
    credentials: true,
};
app.use(cors(corsOptions));

// Helmet
app.use(helmet());

// Rate limit (max 100 requêtes toutes les 15 minutes)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limite chaque IP à 100 requêtes
    message: "Trop de requêtes, réessayez plus tard.",
});
app.use(limiter);

app.use("/uploads/images", express.static("uploads/images"));

export default app;

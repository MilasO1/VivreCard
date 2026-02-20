import express, { urlencoded, type Application } from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const app: Application = express();

// 1. Sécurité HTTP (Headers)
app.use(helmet());

// 2. Limiteur de requêtes (Anti-DoS)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true, // Retourne les infos de limite dans les headers Ratelimit-*
    legacyHeaders: false, // Désactive les headers X-RateLimit-*
    message: "Trop de requêtes, réessayez plus tard.",
});
app.use(limiter);

// 3. Configuration CORS
const corsOptions = {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
};
app.use(cors(corsOptions));

// 4. Parsing (Analyse du corps des requêtes)
app.use(express.json());
app.use(urlencoded({ extended: true }));

// 5. Fichiers statiques
app.use("/uploads", express.static("uploads"));

// 6. Route de test (Health check)
app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});

export default app;

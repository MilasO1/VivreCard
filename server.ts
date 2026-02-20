import app from "./app";
import { testConnection } from "./src/config/database";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await testConnection(); // On vérifie la DB avant de lancer
    app.listen(PORT, () => {
        console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
    });
};

startServer();

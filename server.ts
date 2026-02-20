import app from "./app";

const PORT: number = Number.parseInt(process.env.PORT || "3000");

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur ${process.env.BACKEND_URL}`);
});

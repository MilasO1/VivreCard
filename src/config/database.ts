import mysql, { type Pool, type PoolOptions } from "mysql2/promise";

const poolOptions: PoolOptions = {
    host: process.env.DB_HOST || "localhost",
    port: Number.parseInt(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || "vivrecard",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};

const pool: Pool = mysql.createPool(poolOptions);

// Test function
export const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log("✅ Connexion à la base de données : OK");
        connection.release();
    } catch (error) {
        console.error("❌ Connexion à la base de donnée : Echec", error);
        process.exit(1);
    }
};

export default pool;

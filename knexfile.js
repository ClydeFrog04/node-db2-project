require("dotenv").config();

module.exports = {
    development: {
        client: "pg",
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT,
            ssl: {
                sslmode: "require",
                rejectUnauthorized: false,
            }
        },
        pool: {min: 0, max: 7},
        useNullAsDefault: true,

        //gives a directory to generate migrations in
        migrations: {
            directory: './data/migrations'
        }
    }
};
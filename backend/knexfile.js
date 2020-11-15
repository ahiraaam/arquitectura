const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.DB_DEVELOPMENT_HOST || "localhost",
      port: process.env.DB_DEVELOPMENT_PORT || "3306",
      database: process.env.DB_DEVELOPMENT_NAME || "my_database",
      user: process.env.DB_DEVELOPMENT_USER || "root",
      password: process.env.DB_DEVELOPMENT_PASSWORD || "",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  production: {
    client: "mysql",
    connection: {
      host: process.env.DB_PRODUCTION_HOST || "localhost",
      port: process.env.DB_PRODUCTION_PORT || "3306",
      database: process.env.DB_PRODUCTION_NAME || "my_database",
      user: process.env.DB_PRODUCTION_USER || "root",
      password: process.env.DB_PRODUCTION_PASSWORD || "",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

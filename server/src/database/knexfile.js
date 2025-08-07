"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// was unable to read .env since this was nested ?_?, unsure why that is
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const DB = process.env.DATABASE_URL;
if (!DB)
    throw new Error("missing DB URL");
console.log("DB", DB);
const configs = {
    development: {
        client: "pg",
        connection: DB,
        debug: true,
        migrations: {
            directory: "./migrations",
            tableName: "knex_migrations",
        },
        seeds: {
            directory: "./seeds",
        },
    },
    production: {
        client: "pg",
        connection: DB + "?ssl=true",
        migrations: {
            directory: "./migrations",
            tableName: "knex_migrations",
        },
        pool: {
            min: 0,
            max: 7,
            acquireTimeoutMillis: 300000,
            createTimeoutMillis: 300000,
            destroyTimeoutMillis: 50000,
            idleTimeoutMillis: 300000,
            reapIntervalMillis: 10000,
            createRetryIntervalMillis: 2000,
            propagateCreateError: false,
        },
        acquireConnectionTimeout: 600000,
    },
};
exports.default = configs;
//# sourceMappingURL=knexfile.js.map
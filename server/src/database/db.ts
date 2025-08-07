import knex from "knex";
import configs from "./knexfile";

const config = configs[process.env.DB_ENV || "development"];
if (!config) throw new Error("missing db config!!");

const db = knex(config);

export default db;

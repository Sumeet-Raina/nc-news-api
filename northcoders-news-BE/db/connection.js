const { Pool } = require("pg");

const ENV = process.env.NODE_ENV || "development";
console.log(__dirname, "<=====");
require("dotenv").config({ path: `${__dirname}/.env.${ENV}` });

const db = new Pool();

if (!process.env.PGDATABASE) {
  console.log(process.env);
  throw new Error("No PGDATABASE configured");
} else {
  console.log(`Connected to ${process.env.PGDATABASE}`);
}

module.exports = db;

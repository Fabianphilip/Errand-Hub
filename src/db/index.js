/* Code modified from a file obtained from https://github.com/olawalejarvis/reflection_app_server */
import { Pool } from 'pg';
import dotenv from 'dotenv';
// import dbconfig from './config';

dotenv.config(); // Loading environment variables from a .env file into process.env

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGNDATABASE,
  port: process.env.PGPORT,
  password: process.env.PGPASSWORD,
});

function query(text, params) {
  return new Promise((resolve, reject) => {
    // Executing a query using the pool connection
    pool.query(text, params)
      .then((res) => {
        resolve(res); // Resolving with the result of the query
      })
      .catch((err) => {
        reject(err); // Rejecting with the error if the query fails
      });
  });
}
export default {
  query,
};
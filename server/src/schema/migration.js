import 'babel-polyfill';
import pool from '../../db-config/database_connection';

const Migration = {
  async migrate() {
    console.log("Creating table products");
    await pool.query(`
CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    price INTEGER NOT NULL,
    quantity_in_inventory INTEGER NOT NULL
);
      `);

    console.log("Creating table sales");
    await pool.query(`

CREATE TABLE sales(
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(40) NOT NULL,
    quantity_sold INTEGER NOT NULL
);
    `);
  }
};

export default Migration;

Migration.migrate();

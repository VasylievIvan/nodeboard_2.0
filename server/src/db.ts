import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    password: 'password123',
    database: 'nodeboard_db',
    host: 'localhost',
    port: 5432,
});

export default pool;
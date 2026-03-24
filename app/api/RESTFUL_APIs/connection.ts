import mysql from "mysql2/promise";

const connection = mysql.createPool({
    database: 'next_js_Api',
    user: 'rrot'
})
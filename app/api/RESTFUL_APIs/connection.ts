import mysql from "mysql2/promise";

const connection = mysql.createPool({
    host: 'localhost',
    database: 'Next_js_api',
    user: 'root',
    password: ''
});

async function testConnection() {
    try {
       const conn = await connection.getConnection();
       console.log("Connected successfully");
       conn.release();
   }  catch (err) {
    console.log("Expected error", err);
   }
}

testConnection();

export default connection;
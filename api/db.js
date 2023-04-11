import mysql from "mysql"

export const db = mysql.createConnection({
    // host: "127.0.0.1",
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "blog"
})
import mysql from "mysql"

export const db = mysql.createConnection({
    host: "127.0.0.1",
    // host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "blog"
})

db.connect((err) => {
    if (err) {
      console.error('Ошибка соединения:', err);
      return;
    }
    console.log('Соединение успешно установлено');
  });
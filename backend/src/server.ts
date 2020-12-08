import app from './app';
import database from './database';

database.sync();
console.log('Database runing at 3001')


app.listen(3001);
console.log("Server runing at 3001")
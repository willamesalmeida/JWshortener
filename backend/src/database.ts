import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql:root:root@localhost:3306/jwshortener');

export default sequelize;
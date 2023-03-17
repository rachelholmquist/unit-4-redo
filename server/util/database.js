require('dotenv').config()
// const {CONNECTION_STRING} = process.env;
const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://niqixfcmshuvdq:7c023c8fcec115c4f97a28032f0d80cfa16baf3ed5e6f99f3304c105bbbe58cb@ec2-52-21-136-176.compute-1.amazonaws.com:5432/d1s3og1gksmncd', {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    sequelize
}
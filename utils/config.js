module.exports = {
  db: {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  api: {
    port: process.env.API_PORT,
    secret: process.env.API_SECRET,
    url: process.env.API_URL,
  },
};

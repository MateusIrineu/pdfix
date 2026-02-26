module.exports = {
  development: {
    username: process.env.DB_USER || 'sa',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'database_development',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: process.env.DB_DIALECT || 'mssql'
  },
  test: {
    username: process.env.DB_USER || 'sa',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'database_test',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: process.env.DB_DIALECT || 'mssql'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'mssql'
  }
};
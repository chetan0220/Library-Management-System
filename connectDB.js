const oracledb = require('oracledb');

async function connectToOracle() {
  try {
      const dbConfig = {
      user: 'sys',
      password: 'sys123',
      connectString: 'localhost:1521/xe',
      privilege: oracledb.SYSDBA
    };

    const connection = await oracledb.getConnection(dbConfig);

    console.log('Successfully connected to Oracle Database\n-------------------------------------------------');

    return connection;
  } catch (error) {
    console.error('Error connecting to Oracle Database:', error);
    throw error;
  }
}

module.exports = {connectToOracle}
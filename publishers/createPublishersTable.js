async function createPublishersTable(connection) {
    try {
      const createTableSQL = `
        CREATE TABLE Publishers (
          publisher_id NUMBER GENERATED ALWAYS AS IDENTITY,
          publisher_name VARCHAR2(255) NOT NULL,
          address VARCHAR2(255),
          email VARCHAR2(100),
          PRIMARY KEY (publisher_id)
        )
      `;
      await connection.execute(createTableSQL);
  
      console.log('Table "Publishers" created successfully');
    } catch (error) {
      console.error('Error creating "Publishers" table:', error);
      throw error;
    }
  }
  
  module.exports = { createPublishersTable };
  
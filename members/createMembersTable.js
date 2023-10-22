async function createMembersTable(connection) {
    try {
      const createTableSQL = `
        CREATE TABLE members (
          member_id NUMBER GENERATED ALWAYS AS IDENTITY,
          first_name VARCHAR2(50),
          last_name VARCHAR2(50),
          address VARCHAR2(100),
          ph_no VARCHAR2(15),
          PRIMARY KEY (member_id)
        )
      `;
      await connection.execute(createTableSQL);
  
      console.log('Table "members" created successfully');
    } catch (error) {
      console.error('Error creating "members" table:', error);
      throw error;
    }
  }
  
  module.exports = { createMembersTable };
  
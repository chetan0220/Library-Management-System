async function addPublishers(connection, pubName, address, email) {
    try {
      const insertSQL = `
        INSERT INTO publishers (publisher_name, address, email)
        VALUES (:pubName, :address, :email)
      `;
  
      const bindParams = {
        pubName,
        address,
        email,
      };
  
      const result = await connection.execute(insertSQL, bindParams);
      await connection.commit();
      console.log('Publisher added successfully');
    } catch (error) {
      console.error('Error adding publisher:', error);
      throw error;
    }
  }
  
  module.exports = { addPublishers };
  
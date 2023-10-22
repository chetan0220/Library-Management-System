async function addMembers(connection, first_name, last_name, address, ph_no) {
    try {
      const insertSQL = `
        INSERT INTO members (first_name, last_name, address, ph_no)
        VALUES (:first_name, :last_name, :address, :ph_no)
      `;
  
      const bindParams = {
        first_name, 
        last_name, 
        address, 
        ph_no
      };
  
      const result = await connection.execute(insertSQL, bindParams);
      await connection.commit();
  
      console.log('Member added successfully');
    } catch (error) {
      console.error('Error adding member:', error);
      throw error;
    }
  }

  module.exports = {addMembers}
  
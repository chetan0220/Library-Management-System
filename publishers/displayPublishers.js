async function displayPublishers(connection) {
    try {
      const selectSQL = `
        SELECT publisher_id, publisher_name, address, email
        FROM publishers
      `;
  
      const result = await connection.execute(selectSQL);
  
      if (result.rows.length === 0) {
        console.log('No publishers found in the database.');
        return;
      }
  
      console.log('Publishers List');
      console.log('--------------------------------------------------------------------------------------------------');
      console.log('Publisher ID\tPublisher Name\tAddress\t\tEmail');
      console.log('--------------------------------------------------------------------------------------------------');
  
      for (const row of result.rows) {
        const [pub_id, pub_name, address, email] = row;
        console.log(`${pub_id}\t\t${pub_name}\t\t${address}\t\t${email}`);
      }
    } catch (error) {
      console.error('Error displaying publishers:', error);
      throw error;
    }
  }
  
  module.exports = { displayPublishers };
  
async function searchPublishers(connection, publisherName) {
    try {
      const selectSQL = `
        SELECT publisher_id, publisher_name, address, email
        FROM publishers
        WHERE UPPER(publisher_name) LIKE UPPER(:name)
      `;
  
      const bindParams = {
        name: `%${publisherName}%`,
      };
  
      const result = await connection.execute(selectSQL, bindParams);
  
      if (result.rows.length === 0) {
        console.log(`No publishers found with the name containing "${publisherName}".`);
        return;
      }
  
      console.log(`Publishers with name containing "${publisherName}"`);
      console.log('--------------------------------------------------------------------------------------------------');
      console.log('Publisher ID\tPublisher Name\tAddress\t\tEmail');
      console.log('--------------------------------------------------------------------------------------------------');
  
      for (const row of result.rows) {
        const [pub_id, pub_name, address, email] = row;
        console.log(`${pub_id}\t\t${pub_name}\t\t${address}\t\t${email}`);
      }
    } catch (error) {
      console.error('Error searching publishers by name:', error);
      throw error;
    }
  }
  
  module.exports = { searchPublishers };
  
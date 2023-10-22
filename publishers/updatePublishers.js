async function updatePublishers(connection, pubId, newPubName, newAddress, newEmail) {
    try {
      const updateSQL = `
        UPDATE publishers
        SET publisher_name = :newPubName, address = :newAddress, email = :newEmail
        WHERE publisher_id = :pubId
      `;
  
      const bindParams = {
        pubId: pubId,
        newPubName: newPubName,
        newAddress: newAddress,
        newEmail: newEmail,
      };
  
      const result = await connection.execute(updateSQL, bindParams);
  
      if (result.rowsAffected === 0) {
        console.log(`No publisher found with ID ${pubId}. Nothing to update.`);
        return;
      }
      
      await connection.commit();

      console.log(`Publisher with ID ${pubId} updated successfully.`);
    } catch (error) {
      console.error('Error updating publisher:', error);
      throw error;
    }
  }
  
  module.exports = { updatePublishers };
  
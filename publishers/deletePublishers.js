const { displayPublishers } = require("./displayPublishers");

async function deletePublishers(connection, pubId) {
    try {
      const deleteSQL = `
        DELETE FROM publishers
        WHERE publisher_id = :pubId
      `;
    
      const bindParams = {
        pubId: pubId,
      };
    
      const result = await connection.execute(deleteSQL, bindParams);
      await connection.commit();
      console.log(`Publisher with ID ${pubId} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting publisher:', error);
      throw error;
    }
  }
  
  module.exports = { deletePublishers };
  
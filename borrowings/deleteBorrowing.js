async function deleteBorrowing(connection, borrowingId) {
    try {
      const deleteSQL = `
        DELETE FROM borrowings
        WHERE borrowing_id = :borrowingId
      `;
  
      const bindParams = {
        borrowingId: borrowingId,
      };
  
      const result = await connection.execute(deleteSQL, bindParams);
  
      await connection.commit();
      console.log(`Borrowing with ID ${borrowingId} has been deleted successfully.`);
    } catch (error) {
      console.error('Error deleting borrowing:', error);
      throw error;
    }
  }
  
  module.exports = { deleteBorrowing };
  
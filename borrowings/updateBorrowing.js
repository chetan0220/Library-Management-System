async function updateBorrowing(connection, borrowingId, dueDate, returned) {
    try {
      const updateSQL = `
        UPDATE borrowings
        SET due_date = :dueDate, returned = :returned
        WHERE borrowing_id = :borrowingId
      `;
  
      const bindParams = {
        dueDate: dueDate,
        returned: returned,
        borrowingId: borrowingId,
      };
  
      const result = await connection.execute(updateSQL, bindParams);
  
      if (result.rowsAffected === 0) {
        console.log(`No borrowing found with ID ${borrowingId}.`);
      } else {
        await connection.commit();
        console.log(`Borrowing with ID ${borrowingId} updated successfully.`);
      }
    } catch (error) {
      console.error('Error updating borrowing:', error);
      throw error;
    }
  }
  
module.exports={updateBorrowing}
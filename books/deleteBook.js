async function deleteBook(connection, idToDelete) {
    try {
      const checkQuery = `
        SELECT * FROM books
        WHERE book_id = :idToDelete
      `;
  
      const checkParams = {
        idToDelete: idToDelete,
      };
  
      const checkResult = await connection.execute(checkQuery, checkParams);
  
      if (checkResult.rows.length === 0) {
        console.log(`No book found with ID ${idToDelete}. Nothing to delete.`);
        return;
      }
  
      const deleteQuery = `
        DELETE FROM books
        WHERE book_id = :idToDelete
      `;
  
      const deleteParams = {
        idToDelete: idToDelete,
      };
  
      const deleteResult = await connection.execute(deleteQuery, deleteParams);
      await connection.commit();

      console.log(`Book with ID ${idToDelete} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting book:', error);
      throw error; 
    }
  }

  module.exports = {deleteBook}
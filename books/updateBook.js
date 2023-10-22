const ps = require("prompt-sync");
const prompt = ps();

async function updateBook(connection, idToUpdate) {
    try {
      const checkQuery = `
        SELECT * FROM books
        WHERE book_id = :idToUpdate
      `;
  
      const checkParams = {
        idToUpdate: idToUpdate,
      };
  
      const checkResult = await connection.execute(checkQuery, checkParams);
  
      if (checkResult.rows.length === 0) {
        console.log(`No book found with ID ${idToUpdate}.`);
        return;
      }
  
      const updatedTitle = prompt('Enter the updated book title: ');
      const updatedAuthor = prompt('Enter the updated author: ');
      const updatedPublicationYear = parseInt(prompt('Enter the updated publication year: '));
      const updatedGenre = prompt('Enter the updated genre: ');
      const updatedPublisherId = parseInt(prompt('Enter the updated publisher ID: '));
  
      const updateQuery = `
        UPDATE books
        SET title = :title, author = :author, publication_year = :publication_year, genre = :genre, publisher_id = :publisher_id
        WHERE book_id = :idToUpdate
      `;
  
      const updateParams = {
        title: updatedTitle,
        author: updatedAuthor,
        publication_year: updatedPublicationYear,
        genre: updatedGenre,
        publisher_id: updatedPublisherId,
        idToUpdate: idToUpdate
      };
  
      const updateResult = await connection.execute(updateQuery, updateParams);
      await connection.commit();

      console.log(`Book with ID ${idToUpdate} updated successfully.`);
    } catch (error) {
      console.error('Error updating book:', error);
      throw error; 
    }
}

module.exports = {updateBook}

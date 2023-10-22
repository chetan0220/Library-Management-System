async function displayPublisherBooks(connection) {
    try {
      const query = `
        SELECT p.publisher_name, b.title, b.author
        FROM publishers p
        JOIN books b ON p.publisher_id = b.publisher_id
      `;
  
      const result = await connection.execute(query);
  
      if (result.rows.length === 0) {
        console.log('No books found for the specified publishers.');
        return;
      }
  
      console.log('Publisher'.padEnd(30) + 'Title'.padEnd(30) + 'Author');
      console.log('--------------------------------------------------------------------------------------------------');
  
      result.rows.forEach((row) => {
        const [publisherName, title, author] = row;
        console.log(`${publisherName.padEnd(30)}${title.padEnd(30)}${author}`);
      });
    } catch (error) {
      console.error('Error displaying publisher books:', error);
      throw error;
    }
  }
  
  module.exports = { displayPublisherBooks };
  
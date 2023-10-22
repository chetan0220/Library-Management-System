async function addBook(connection, title, author, publicationYear, genre, publisher_id) {
  try {
    const insertSQL = `
      INSERT INTO books (title, author, publication_year, genre, publisher_id)
      VALUES (:title, :author, :publicationYear, :genre, :publisher_id)
    `;

    const bindParams = {
      title,
      author,
      publicationYear,
      genre,
      publisher_id,
    };

    const result = await connection.execute(insertSQL, bindParams);

    await connection.commit();
    console.log('Book added successfully');
  } catch (error) {
    console.error('Error adding book:', error);
    throw error; 
  }
}

module.exports = {addBook}

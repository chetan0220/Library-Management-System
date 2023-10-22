async function displayBooks(connection) {
  try {
    const selectSQL = 'SELECT book_id, title, author, genre, publication_year, publisher_id FROM books';
    const result = await connection.execute(selectSQL);

    const columnWidths = [5, 25, 20, 15, 15, 15];

    console.log('ID'.padEnd(columnWidths[0]) +
                'Title'.padEnd(columnWidths[1]) +
                'Author'.padEnd(columnWidths[2]) +
                'Genre'.padEnd(columnWidths[3]) +
                'Publication Year'.padEnd(columnWidths[4]) +
                'Publisher ID'.padEnd(columnWidths[5]));

    console.log('--------------------------------------------------------------------------------------------------');

    for (const row of result.rows) {
      const [bookId, title, author, genre, publicationYear, publisherId] = row;
      const formattedRow = [
        bookId.toString().padEnd(columnWidths[0]),
        title.padEnd(columnWidths[1]),
        author.padEnd(columnWidths[2]),
        genre.padEnd(columnWidths[3]),
        publicationYear.toString().padEnd(columnWidths[4]),
        publisherId.toString().padEnd(columnWidths[5])
      ];
      console.log(formattedRow.join(''));
    }
  } catch (error) {
    console.error('Error displaying records:', error);
  }
}


async function displayByYear(connection, year) {
  try {
    const query = `
      SELECT b.book_id, b.title, b.author, p.publisher_id
      FROM books b
      LEFT JOIN publishers p ON b.publisher_id = p.publisher_id
      WHERE b.publication_year = :year
    `;

    const bindParams = {
      year: year,
    };

    const result = await connection.execute(query, bindParams);

    if (result.rows.length === 0) {
      console.log('No books found for the specified year.');
      return;
    }

    const columnWidths = [5, 25, 20, 15, 15, 15];

    console.log('ID'.padEnd(columnWidths[0]) +
                'Title'.padEnd(columnWidths[1]) +
                'Author'.padEnd(columnWidths[2]) +
                'Publisher ID'.padEnd(columnWidths[3]));

    console.log('--------------------------------------------------------------------------------------------------');

    for (const row of result.rows) {
      const [bookId, title, author, publisherId] = row;
      const formattedRow = [
        bookId.toString().padEnd(columnWidths[0]),
        title.padEnd(columnWidths[1]),
        author.padEnd(columnWidths[2]),
        publisherId.toString().padEnd(columnWidths[3])
      ];
      console.log(formattedRow.join(''));
    }
  } catch (error) {
    console.error('Error displaying books by year:', error);
    throw error;
  }
}




async function displayByGenre(connection, genre) {
  try {
    const query = `
      SELECT b.book_id, b.title, b.author, p.publisher_id
      FROM books b
      LEFT JOIN publishers p ON b.publisher_id = p.publisher_id
      WHERE LOWER(b.genre) = LOWER(:genre)
    `;

    const bindParams = {
      genre: genre,
    };

    const result = await connection.execute(query, bindParams);

    if (result.rows.length === 0) {
      console.log('No books found for the specified genre.');
      return;
    }

    const columnWidths = [5, 25, 20, 15, 15, 15];

    console.log('ID'.padEnd(columnWidths[0]) +
                'Title'.padEnd(columnWidths[1]) +
                'Author'.padEnd(columnWidths[2]) +
                'Publisher ID'.padEnd(columnWidths[3]));

    console.log('--------------------------------------------------------------------------------------------------');

    for (const row of result.rows) {
      const [bookId, title, author, publisherId] = row;
      const formattedRow = [
        bookId.toString().padEnd(columnWidths[0]),
        title.padEnd(columnWidths[1]),
        author.padEnd(columnWidths[2]),
        publisherId.toString().padEnd(columnWidths[3])
      ];
      console.log(formattedRow.join(''));
    }
  } catch (error) {
    console.error('Error displaying books by genre:', error);
    throw error;
  }
}



module.exports = {displayBooks, displayByYear, displayByGenre};

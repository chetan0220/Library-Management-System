async function createBooksTable(connection) {
  try {
    const createTableSQL = `
      CREATE TABLE books (
        book_id NUMBER GENERATED ALWAYS AS IDENTITY,
        title VARCHAR2(255) NOT NULL,
        author VARCHAR2(255),
        publication_year NUMBER,
        genre VARCHAR2(255),
        publisher_id NUMBER,
        PRIMARY KEY (book_id),
        FOREIGN KEY (publisher_id) REFERENCES publishers(publisher_id)
      )
    `;
    await connection.execute(createTableSQL);

    console.log('Table "books" created successfully');
  } catch (error) {
    console.error('Error creating "books" table:', error);
    throw error; 
  }
}

module.exports = {createBooksTable};

async function createBorrowingsTable(connection) {
    try {
      const createTableSQL = `
        CREATE TABLE borrowings (
          borrowing_id NUMBER GENERATED ALWAYS AS IDENTITY,
          member_id NUMBER NOT NULL,
          book_id NUMBER NOT NULL,
          borrowing_date DATE NOT NULL,
          due_date DATE NOT NULL,
          returned VARCHAR(5),
          PRIMARY KEY (borrowing_id),
          FOREIGN KEY (member_id) REFERENCES members(member_id),
          FOREIGN KEY (book_id) REFERENCES books(book_id)
        )
      `;
      await connection.execute(createTableSQL);
  
      console.log('Table "borrowings" created successfully');
    } catch (error) {
      console.error('Error creating "borrowings" table:', error);
      throw error; 
    }
  }
  
  module.exports = { createBorrowingsTable };
  
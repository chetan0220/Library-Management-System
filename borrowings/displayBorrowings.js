async function displayBorrowings(connection) {
    try {
      const selectSQL = `
        SELECT borrowing_id, member_id, book_id, borrowing_date, due_date, returned
        FROM borrowings
      `;
  
      const result = await connection.execute(selectSQL);
  
      const columnWidths = [15, 10, 10, 15, 15, 10];
  
      console.log('--------------------------------------------------------------------------------------------------');
      console.log('Borrowing ID'.padEnd(columnWidths[0]) +
                  'Member ID'.padEnd(columnWidths[1]) +
                  'Book ID'.padEnd(columnWidths[2]) +
                  'Borrowing Date'.padEnd(columnWidths[3]) +
                  'Due Date'.padEnd(columnWidths[4]) +
                  'Returned'.padEnd(columnWidths[5]));
      console.log('--------------------------------------------------------------------------------------------------');
  
      for (const row of result.rows) {
        const [borrowingId, memberId, bookId, borrowingDate, dueDate, returned] = row;
        const formattedRow = [
          borrowingId.toString().padEnd(columnWidths[0]),
          memberId.toString().padEnd(columnWidths[1]),
          bookId.toString().padEnd(columnWidths[2]),
          borrowingDate.toISOString().slice(0, 10).padEnd(columnWidths[3]),
          dueDate.toISOString().slice(0, 10).padEnd(columnWidths[4]),
          returned.padEnd(columnWidths[5]),
        ];
        console.log(formattedRow.join(''));
      }
    } catch (error) {
      console.error('Error displaying borrowings:', error);
      throw error;
    }
  }
  
  module.exports = { displayBorrowings };
  
async function searchBorrowingsByDueDate(connection, dueDate) {
    try {
      const query = `
        SELECT b.borrowing_id, m.first_name, m.last_name, b.due_date
        FROM borrowings b
        LEFT JOIN members m ON b.member_id = m.member_id
        WHERE TRUNC(b.due_date) = TO_DATE(:dueDate, 'YYYY-MM-DD')
      `;
  
      const bindParams = {
        dueDate: dueDate,
      };
  
      const result = await connection.execute(query, bindParams);
  
      if (result.rows.length === 0) {
        console.log('No borrowings found with the specified due date.');
        return;
      }
  
      console.log(`Borrowings with Due Date: ${dueDate}`);
      console.log('--------------------------------------------------------------------------------------------------');
      console.log('Borrowing ID\tFirst Name\tLast Name\tDue Date');
  
      result.rows.forEach((row) => {
        const [borrowingId, firstName, lastName, dueDate] = row;
        console.log(`${borrowingId}\t\t${firstName}\t\t${lastName}\t\t${dueDate.toDateString()}`);
      });
    } catch (error) {
      console.error('Error searching borrowings by due date:', error);
      throw error;
    }
  }
  
  module.exports = { searchBorrowingsByDueDate };
  
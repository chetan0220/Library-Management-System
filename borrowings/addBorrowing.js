async function addBorrowing(connection, memberId, bookId, borrowingDate, dueDate, returned) {
  try {
    const insertSQL = `
      INSERT INTO borrowings (member_id, book_id, borrowing_date, due_date, returned)
      VALUES (:memberId, :bookId, :borrowingDate, :dueDate, :returned)
    `;

    const bindParams = {
      memberId,
      bookId,
      borrowingDate,
      dueDate,
      returned
    };

    const result = await connection.execute(insertSQL, bindParams);

    await connection.commit();
    console.log('Borrowing record added successfully');
  } catch (error) {
    console.error('Error adding borrowing record:', error);
    throw error;
  }
}

module.exports = { addBorrowing };

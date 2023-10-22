async function displayMembers(connection) {
    try {
      const selectSQL = `
        SELECT member_id, first_name, last_name, address, ph_no
        FROM members
      `;
  
      const result = await connection.execute(selectSQL);
  
      if (result.rows.length === 0) {
        console.log('No members found in the database.');
        return;
      }
  
      console.log('Members List');
      console.log('--------------------------------------------------------------------------------------------------');
      console.log('Member ID\tFirst Name\tLast Name\tAddress\t\tPhone Number');
      console.log('--------------------------------------------------------------------------------------------------');
  
      for (const row of result.rows) {
        const [member_id, first_name, last_name, address, ph_no] = row;
        console.log(`${member_id}\t\t${first_name}\t\t${last_name}\t\t${address}\t\t${ph_no}`);
      }
    } catch (error) {
      console.error('Error displaying members:', error);
      throw error;
    }
  }

  module.exports = {displayMembers}
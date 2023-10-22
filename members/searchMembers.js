async function searchMembers(connection, firstName, lastName) {
    try {
      const query = `
        SELECT * FROM members
        WHERE first_name = :firstName AND last_name = :lastName
      `;
  
      const bindParams = {
        firstName: firstName,
        lastName: lastName,
      };
  
      const result = await connection.execute(query, bindParams);
  
      if (result.rows.length === 0) {
        console.log('No member found with the given name.');
        return;
      }
  
      console.log('Member Details');
      console.log('----------------------------------------------------------------------------');
      result.rows.forEach((row) => {
        console.log(`Member ID: ${row[0]}`);
        console.log(`First Name: ${row[1]}`);
        console.log(`Last Name: ${row[2]}`);
        console.log(`Address: ${row[3]}`);
        console.log(`Phone Number: ${row[4]}`);
      });
    } catch (error) {
      console.error('Error searching for a member by name:', error);
      throw error;
    }
  }

  module.exports = {searchMembers}
  
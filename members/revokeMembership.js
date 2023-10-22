async function revokeMembership(connection, memberID) {
    try {
      const checkQuery = `
        SELECT * FROM members
        WHERE member_id = :memberID
      `;
  
      const checkParams = {
        memberID: memberID,
      };
  
      const checkResult = await connection.execute(checkQuery, checkParams);
  
      if (checkResult.rows.length === 0) {
        console.log(`No member found with ID ${memberID}.`);
        return;
      }
  
      const deleteQuery = `
        DELETE FROM members
        WHERE member_id = :memberID
      `;
  
      const deleteParams = {
        memberID: memberID,
      };
  
      const deleteResult = await connection.execute(deleteQuery, deleteParams);
            
      await connection.commit();
      console.log(`Membership revoked for member with ID ${memberID}. Member record deleted.`);
    } catch (error) {
      console.error('Error revoking membership:', error);
      throw error;
    }
  }
  
  module.exports = { revokeMembership };
  
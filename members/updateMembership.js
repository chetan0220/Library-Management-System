async function updateMemberDetails(connection, memberId, newFirstName, newLastName, newAddress, newPhoneNumber) {
    try {
      const checkQuery = `
        SELECT * FROM members
        WHERE member_id = :memberId
      `;
  
      const checkParams = {
        memberId: memberId,
      };
  
      const checkResult = await connection.execute(checkQuery, checkParams);
  
      if (checkResult.rows.length === 0) {
        console.log(`No member found with ID ${memberId}.`);
        return;
      }
  
      const updateQuery = `
        UPDATE members
        SET first_name = :newFirstName, last_name = :newLastName, address = :newAddress, ph_no = :newPhoneNumber
        WHERE member_id = :memberId
      `;
  
      const updateParams = {
        newFirstName: newFirstName,
        newLastName: newLastName,
        newAddress: newAddress,
        newPhoneNumber: newPhoneNumber,
        memberId: memberId,
      };
  
      const updateResult = await connection.execute(updateQuery, updateParams);
      await connection.commit();
      console.log(`Details for member with ID ${memberId} updated successfully.`);
    } catch (error) {
      console.error('Error updating member details:', error);
      throw error;
    }
  }
  
  module.exports = { updateMemberDetails };
  
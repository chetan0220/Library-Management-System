const ps = require("prompt-sync");
const prompt = ps();
const readline = require("readline");
const { connectToOracle } = require('./connectDB');
const { addBook } = require('./books/addBook');
const { createBooksTable } = require('./books/createTableBooks');
const { deleteBook } = require('./books/deleteBook');
const { displayBooks, displayByYear, displayByPublication, displayByISBN, displayByGenre } = require('./books/displayBooks');
const { updateBook } = require('./books/updateBook');
const { createMembersTable } = require("./members/createMembersTable");
const { createPublishersTable } = require("./publishers/createPublishersTable");
const { addMembers } = require("./members/addMembers");
const { displayMembers } = require("./members/displayMembers");
const { searchMembers } = require("./members/searchMembers");
const { updateMemberDetails } = require("./members/updateMembership");
const { revokeMembership } = require("./members/revokeMembership");
const { addPublishers } = require("./publishers/addPublishers");
const { displayPublishers } = require("./publishers/displayPublishers");
const { searchPublishers } = require("./publishers/searchPublishers");
const { updatePublishers } = require("./publishers/updatePublishers");
const { deletePublishers } = require("./publishers/deletePublishers");
const { createBorrowingsTable } = require("./borrowings/createTableBorrowings");
const { displayBorrowings } = require("./borrowings/displayBorrowings");
const { addBorrowing } = require("./borrowings/addBorrowing");
const { searchBorrowingsByDueDate } = require("./borrowings/searchBorrowing");
const { updateBorrowing } = require("./borrowings/updateBorrowing");
const { deleteBorrowing } = require("./borrowings/deleteBorrowing");
const { displayPublisherBooks } = require("./publisherBooks/displayPublihserBooks");

async function main() {
    const connection = await connectToOracle();
    //await createPublishersTable(connection);
    //await createBooksTable(connection);
    //await createMembersTable(connection);
    //await createBorrowingsTable(connection);
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    async function selectOption() {
        rl.question("Select an option\nPublisher\nBook\nMember\nBorrowing\nPublisher-Books\nExit\nEnter your choice : ", async (option) => {
            switch (option) {
                case "Book":
                    bookOptions()
                    break;
                
                case "Member":
                    memberOptions();
                    break;
                        
                case "Publisher":
                    publisherOptions();
                    break;
                
                case "Borrowing":
                    borrowingOptions();
                    break;
                
                case "Publisher-Books":
                    publisherBooksOptions();
                    break;

                case "Exit":
                    console.log("Exiting...");
                    rl.close();
                    process.exit(0);
                        
                default:
                    console.log("Invalid option selected.");
                    selectOption();
                }   
            }
        );
    }
                

    async function bookOptions() {
        while(true)
        {
            console.log('--------------------------------------------------------------------------------------------------\nBook Menu\n--------------------------------------------------------------------------------------------------');
            console.log('1. Add Book');
            console.log('2. Display All Books');
            console.log('3. Display Books by Publication Year');
            console.log('4. Display Books by Genre');
            console.log('5. Update Book');
            console.log('6. Delete Book');
            console.log('7. Exit');
            console.log('--------------------------------------------------------------------------------------------------');
            const choice = parseInt(prompt('Enter your choice: '));
            
            switch (choice) {
                case 1:{
                    const title = prompt('Enter the Book Title : ');
                    const author = prompt('Enter the Author : ');
                    const publicationYear = parseInt(prompt('Enter the publication year : '));
                    const genre = prompt('Enter the Genre : ');
                    const publisherId = parseInt(prompt('Enter the publisher ID : '));
                    await addBook(connection, title, author, publicationYear, genre, publisherId);
                    break;
                }
                
                case 2:
                    await displayBooks(connection);
                    break;
                
                    
                case 3:{
                    const yearToSearch = parseInt(prompt('Enter the publication year to search for : '))
                    await displayByYear(connection, yearToSearch);
                    break;
                }
            
                case 4:
                    const genre = prompt('Enter the genre to search for: ');
                    await displayByGenre(connection, genre);
                    break;
                
                case 5:
                    const idToUpdate = prompt('Enter the ID of the book to update: ');
                    await updateBook(connection, idToUpdate);
                    break;
                
                case 6:
                    const idToDelete = prompt('Enter the ID of the book to delete: ');
                    await deleteBook(connection, idToDelete);
                    break;
                    
                case 7:
                    console.log('--------------------------------------------------------------------------------------------------\nExiting...\n--------------------------------------------------------------------------------------------------');
                    await connection.close(); 
                    process.exit(0);
                
                default:
                    console.log('Invalid choice. Please try again.');
                    break;
            }
        }
    }

    async function memberOptions() {
        while (true) {
            console.log('--------------------------------------------------------------------------------------------------\nMember Menu\n--------------------------------------------------------------------------------------------------');
            console.log('1. Add Member');
            console.log('2. Display All Members');
            console.log('3. Search Member by name');
            console.log('4. Update Membership');
            console.log('5. Revoke Membership');
            console.log('6. Exit');
            console.log('--------------------------------------------------------------------------------------------------');
            const choice = parseInt(prompt('Enter your choice: '));
          
            switch (choice) {
              case 1: {
                const first_name = prompt('Enter First Name: ');
                const last_name = prompt('Enter Last Name: ');
                const address = prompt('Enter Address: ');
                const ph_no = parseInt(prompt('Enter the Member Age: '));
                await addMembers(connection, first_name, last_name, address, ph_no);
                break;
              }
          
              case 2: 
                await displayMembers(connection);
                break;
              
          
              case 3: {
                const firstName = prompt('Enter first name of Member to search: ');
                const lastName = prompt('Enter last name of Member to search: ');
                await searchMembers(connection, firstName, lastName);
                break;
              }
          
              case 4: {
                const memberId = prompt('Enter the ID of the member to update: ');
                const newFirstName = prompt('Enter the new first name: ');
                const newLastName = prompt('Enter the new last name: ');
                const newAddress = prompt('Enter the new address: ');
                const newPhoneNumber = prompt('Enter the new phone number: ');
                await updateMemberDetails(connection, memberId, newFirstName, newLastName, newAddress, newPhoneNumber);
                break;
            }
            
            case 5:
                memberIDToRevoke = parseInt(prompt('Enter the ID of the member to revoke membership: '));
                await revokeMembership(connection, memberIDToRevoke);
                break;
          
              case 6: 
                console.log('--------------------------------------------------------------------------------------------------\nExiting Member Menu\n--------------------------------------------------------------------------------------------------');
                await connection.close(); 
                process.exit(0);
              
              default: 
                console.log('Invalid choice. Please try again.');
                break;
              
            }
          }
          
    }

    async function publisherOptions() {
        while(true)
        {
            console.log('--------------------------------------------------------------------------------------------------\nPublisher Menu\n--------------------------------------------------------------------------------------------------');
            console.log('1. Add Publisher');
            console.log('2. Display All Publishers');
            console.log('3. Search Publisher by name');
            console.log('4. Update Publisher');
            console.log('5. Delete Publisher');
            console.log('6. Exit');
            console.log('--------------------------------------------------------------------------------------------------');
            const choice = parseInt(prompt('Enter your choice: '));
            
            switch (choice) {
                case 1:{
                    const pubName = prompt('Enter publication name: ');
                    const address = prompt('Enter address: ');
                    const email = prompt('Enter email: ');
                    await addPublishers(connection, pubName, address, email)
                    break;
                }
                
                case 2:
                    await displayPublishers(connection);
                    break;
                
                    
                case 3:{
                    const pubName = prompt('Enter publication name to be searched: ');
                    await searchPublishers(connection, pubName);
                    break;
                }
            
                case 4:{
                        const pubId = parseInt(prompt('Enter the Publisher ID to update: '));
                        const newPubName = prompt('Enter the new Publisher Name: ');
                        const newAddress = prompt('Enter the new Address: ');
                        const newEmail = prompt('Enter the new Email: ');
                        await updatePublishers(connection, pubId, newPubName, newAddress, newEmail);
                        break;
                    }
                      
                case 5:{
                        const pubId = parseInt(prompt('Enter the Publisher ID to delete: '));
                        await deletePublishers(connection, pubId);
                        break;
                      }
                      
                    
                case 6:
                    console.log('--------------------------------------------------------------------------------------------------\nExiting...\n--------------------------------------------------------------------------------------------------');
                    await connection.close(); 
                    process.exit(0);
                
                default:
                    console.log('Invalid choice. Please try again.');
                    break;
            }
        }
    }


    async function borrowingOptions(){
        while(true)
        {
            console.log('--------------------------------------------------------------------------------------------------\nBorrowing Menu\n--------------------------------------------------------------------------------------------------');
            console.log('1. Add Borrowing');
            console.log('2. Display All Borrowings');
            console.log('3. Search Borrowing by due date');
            console.log('4. Update Borrowing');
            console.log('5. Delete Borrowing');
            console.log('6. Exit');
            console.log('--------------------------------------------------------------------------------------------------');
            const choice = parseInt(prompt('Enter your choice: '));
            
            switch (choice) {
                case 1:{
                    const memberId = parseInt(prompt('Enter Member ID: '));
                    const bookId = parseInt(prompt('Enter Book ID: '));
                    const borrowingDateInput = prompt('Enter Borrowing Date (YYYY-MM-DD): ');
                    const borrowingDate = new Date(borrowingDateInput);
                    const dueDate = new Date(borrowingDate);
                    dueDate.setDate(dueDate.getDate() + 30);
                    const returned = "No";
                    await addBorrowing(connection, memberId, bookId, borrowingDate, dueDate, returned);
                    break;
                }
                
                case 2:
                    await displayBorrowings(connection);
                    break;
                
                    
                case 3:{
                    const dueDate = prompt('Enter the due date to search for (YYYY-MM-DD): ');
                    await searchBorrowingsByDueDate(connection, dueDate);
                    break;
                }
            
                case 4:{
                    const borrowingId = parseInt(prompt('Enter Borrowing ID: '));
                    const newDueDateInput = prompt('Enter New Due Date (YYYY-MM-DD): ');
                    const newReturnedStatus = prompt('Has the Book been Returned? (Yes/No): ');
                    const newDueDate = new Date(newDueDateInput);
                    await updateBorrowing(connection, borrowingId, newDueDate, newReturnedStatus);
                    break;
                }
                      
                case 5:{
                        const borrowingId = parseInt(prompt('Enter the Borrowing ID to delete: '));
                        await deleteBorrowing(connection, borrowingId);
                        break;
                      }
                      
                    
                case 6:
                    console.log('--------------------------------------------------------------------------------------------------\nExiting...\n--------------------------------------------------------------------------------------------------');
                    await connection.close(); 
                    process.exit(0);
                
                default:
                    console.log('Invalid choice. Please try again.');
                    break;
            }
        }
    }

    async function publisherBooksOptions(){
        displayPublisherBooks(connection);
    }

    
    selectOption();

}

main();

# DBMS Mini Project: Library Management System.
A simple Oracle Database Management System (DBMS) mini project implemented using Node.js and the `oracledb` package. This project allows users to manage data related to books, members, publishers, and borrowings, as well as relationships between them.


**ER Diagram**<br>
<br><img width="557" alt="libraryERD" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/9bc856bb-9505-4a1f-8f1e-86777bba2f6e">

Features Available
- Books  
	- Add a new Book<br>
  	<img width="280" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/b8b5322f-b41d-4bc6-b2f9-5cabd2d9a323"><br>

	- Display all Books<br>
 	<img width="586" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/0531ce8e-8ec4-4472-8062-4d290d20f046"><br>

	- Display Books according to publication year<br>
 	<img width="408" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/d2b4b566-ef8c-4980-8db8-15e6121eaa5f"><br>

	- Display Books according to genre<br>
 	<img width="370" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/1fc13a89-e959-4813-834f-3dabf8dd1340"><br>

	- Update Book<br>
 	<img width="272" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/8ef9318f-04a3-4b94-9805-77241e8ca631"><br>

	- Delete Book<br>
 	<img width="224" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/38c696ed-c8ee-4641-9973-e0b9457c0f27"><br>

- Members
	- Add new Member <br>
 	<img width="209" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/15473c5c-ad4f-45dd-9bd5-3b9a7375c4ca"><br>

	- Display All Members<br>
 	<img width="445" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/e8eda524-4fa2-4f4b-9646-4889a3aae995"><br>

	- Search Member by name<br>
 	<img width="258" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/29bd0d50-0ee1-4cd7-bc5e-d298f82cd95a"><br>

	- Update Membership<br>
 	<img width="296" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/54590dab-0c46-48b3-89a7-937bf214e3ce"><br>

	- Revoke Membership<br>
 	<img width="364" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/1ed26027-a1a6-4002-95ea-0f5dbc09d85b"><br>

- Publishers
	- Add Publisher<br>
 	<img width="229" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/af6c4300-fc12-4481-a08d-db84b88741fd"><br>

	- Display All Publishers<br>
 	<img width="381" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/6be25cde-f3c2-4dd8-b597-79108e1443db"><br>

	- Search Publisher by name<br>
 	<img width="383" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/3e4128e7-1d63-465c-9ee9-3777f22e72b0"><br>

	- Update Publisher<br>
 	<img width="239" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/a68a2bb3-72a6-4633-8655-2702a04608e3"><br>

	- Delete Publisher<br>
 	<img width="254" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/5347d0c0-1f2c-44a2-80fd-bb0d7e0acafc"><br>

- Borrow  a Book
	- Add Borrowing<br>
 	<img width="267" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/8e2b7740-5f9a-4f95-8794-89beddc1000f"><br>

	- Display All Borrowings<br>
 	<img width="470" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/955ce00c-a0c6-4a76-a8b2-1326a362198d"><br>

	- Search Borrowing by due date<br>
 	<img width="362" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/579fe472-0d09-4044-ba4d-46a351a338d2"><br>

	- Update Borrowing<br>
 	<img width="285" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/27ba2e02-7a19-410e-ae6d-66a274c058c1"><br>

	- Delete Borrowing<br>
 	<img width="306" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/c101e697-cae9-45a7-b6d4-46ceaf140e12"><br>

- View Publisher-Books Table<br>
	<img width="573" alt="image" src="https://github.com/chetan0220/DBMS-Mini-Project/assets/97821311/24fa9690-9d03-4998-9c0f-bb2e77955301"><br>
---
**Installation Instructions**<br>
1. Clone this repository<br>
```
git clone https://github.com/chetan0220/DBMS-Mini-Project.git
cd dbms-mini-project
```
2. Run index.js
```
node index.js
```
---
**Usage**<br>
Run the application by following the installation instructions.
Select one of the available options:
- Book: Manage book records.
- Member: Manage member records.
- Publisher: Manage publisher records.
- Author: Manage author records.
- Exit: Quit the application.

---
If you have any query, feedback or suggestion feel free to drop a mail at chetan.mahale0220@gmail.com :) 


import bcrypt from "bcrypt";
const usersData= [{
        name: 'Admin User',
        email: 'admin@example.com',
        password:bcrypt.hashSync('123456', 10),
        isAdmin: true,
      },
      {
        name: 'John Doe',
        email: 'john@example.com',
        password:bcrypt.hashSync('123456', 10)
      },
      {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password:bcrypt.hashSync('123456', 10),
      }];

export default usersData;
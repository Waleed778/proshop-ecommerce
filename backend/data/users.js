import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Nadeem Taj',
        email: 'nadeem@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Durra Khan',
        email: 'durra@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    }
];

export default users;
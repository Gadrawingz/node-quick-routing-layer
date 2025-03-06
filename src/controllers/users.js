// 01. User data to simulate DB
let users = [
    { id: 1, name: 'Alice', email: 'alice@gad.com' },
    { id: 2, name: 'Bob', email: 'bob@gad.com' },
    { id: 3, name: 'Harry Kane', email: 'harry.kane@epl.com' },
    { id: 4, name: 'Kevin De Bruyne', email: 'kevin.debruyne@epl.com' },
    { id: 5, name: 'Mohamed Salah', email: 'mohamed.salah@epl.com' },
    { id: 6, name: 'Bruno Fernandes', email: 'bruno.fernandes@epl.com' },
    { id: 7, name: 'Virgil van Dijk', email: 'virgil.vandijk@epl.com' },
    { id: 8, name: 'Raheem Sterling', email: 'raheem.sterling@epl.com' },
    { id: 9, name: 'Sadio Mane', email: 'sadio.mane@epl.com' },
    { id: 10, name: 'Marcus Rashford', email: 'marcus.rashford@epl.com' },
    { id: 11, name: 'Pierre-Emerick Aubameyang', email: 'pierre.aubameyang@epl.com' },
    { id: 12, name: 'Jamie Vardy', email: 'jamie.vardy@epl.com' },
    { id: 13, name: 'Son Heung-min', email: 'son.heungmin@epl.com' },
    { id: 14, name: 'NGolo Kante', email: 'ngolo.kante@epl.com' },
    { id: 15, name: 'Riyad Mahrez', email: 'riyad.mahrez@epl.com' },
    { id: 16, name: 'Jack Grealish', email: 'jack.grealish@epl.com' },
    { id: 17, name: 'Ederson Moraes', email: 'ederson.moraes@epl.com' },
    { id: 18, name: 'Trent Alexander-Arnold', email: 'trent.alexanderarnold@epl.com' },
    { id: 19, name: 'Paul Pogba', email: 'paul.pogba@epl.com' },
    { id: 20, name: 'Timo Werner', email: 'timo.werner@epl.com' }
];

const UserController = {
    getUsers: (req, res) => {
        res.json({
            message: "List of all users",
            data: users
        });
    },

    getUser: (req, res) => {
        const { userId } = req.params;
        const user = users.find(user => user.id === parseInt(userId));

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json({
            message: "User details",
            data: user
        });
    },

    createUser: (req, res) => {
        const { name, email } = req.body;
        const id = users.length + 1;
        const newUser = { id, name, email };

        users.push(newUser);

        res.status(201).json({
            message: "User created successfully",
            data: newUser
        });
    },

    updateUser: (req, res) => {
        const { userId } = req.params;
        const { name, email } = req.body;
        const user = users.find(user => user.id === parseInt(userId));

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        user.name = name;
        user.email = email;

        res.json({
            message: "User updated successfully",
            data: user
        });
    },
    
    deleteUser: (req, res) => {
        const { userId } = req.params;
        users = users.filter(user => user.id !== parseInt(userId));

        res.json({
            message: "User deleted successfully"
        });
    },
}

module.exports = { UserController, users};
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

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


// 02. Define Games
let games = [
    {
        id: 1,
        title: 'Game of Thrones',
        description: 'Amazing game for Programmers',
        users: [1, 2, 3],
    },
    {
        id: 2,
        title: 'The Witcher',
        description: 'Amazing game for Programmers',
        users: [4, 5, 6],
    },
    {
        id: 3,
        title: 'Cyberpunk 2077',
        description: 'Amazing game for Programmers',
        users: [7, 8, 9],
    },
    {
        id: 4,
        title: 'Red Dead Redemption 2',
        description: 'Amazing game for Programmers',
        users: [10, 11, 12],
    },
    {
        id: 5,
        title: 'Assassins Creed Valhalla',
        description: 'Amazing game for Programmers',
        users: [13, 14, 15],
    },
    {
        id: 6,
        title: 'FIFA 21',
        description: 'Amazing game for Programmers',
        users: [16, 17, 18],
    },
    {
        id: 7,
        title: 'PES 2021',
        description: 'Amazing game for Programmers',
        users: [19, 20, 1],
    },
    {
        id: 8,
        title: 'Call of Duty',
        description: 'Amazing game for Programmers',
        users: [2, 3, 4],
    },
]


// 03. Greetings APIs
app.get('/api/v1/greet/good-morning', (req, res) => {
    res.send('Good morning developers!');
});

app.get('/api/v1/greet/good-afternoon', (req, res) => {
    res.send('Good afternoon developers!');
});

app.get('/api/v1/greet/good-evening', (req, res) => {
    res.send('Good evening developers!');
});

app.get('/api/v1/greet/:userId', (req, res) => {
    const { userId } = req.params.userId;
    const user = users.find(user => user.id === parseInt(userId));

    if (!user) {
        return res.status(404).json({ message: 'User not found'});
    }

    res.json({message: `Hello ${user.name}, Welcome to the Game app!`});
});

// 04. CRUD Endpoints for Users

// 04A. Get all users
app.get('/api/v1/users', (req, res) => {
    res.json(users);
});

// 04B. Get a single user
app.get('/api/v1/users/:userId', (req, res) => {
    const id = req.params.userId;
    const user = users.find(user => user.id === parseInt(id));

    if (!user) {
        return res.status(404).json({ message: 'User not found'});
    }

    res.json({user: user}); // OR: res.json({user});
});

// 04C. Create a new user
app.post('/api/v1/users', (req, res) => {
    const {name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Please provide name and email'});
    }

    const id = users.length + 1;
    const newUser = { id, name, email };
    users.push(newUser);
    res.status(201).json({user: newUser});
});

// 04D. Update a user
app.put('/api/v1/users/:userId', (req, res) => {
    const id = req.params.userId;
    const {name, email } = req.body;

    const user = users.find(user => user.id === parseInt(id));

    if (!user) {
        return res.status(404).json({ message: 'User not found'});
    }

    user.name = name;
    user.email = email;

    res.json({user});
});

// 04E. Delete a user
app.delete('/api/v1/users/:userId', (req, res) => {
    const id = req.params.userId;
    users = users.filter(user => user.id !== parseInt(id));
    res.status(204).send();
});

// 05. CRUD Endpoints for Games
app.get('/api/v1/games/:gameId/users', (req, res) => {
    const gameId = req.params.gameId;
    const game = games.find(game => game.id === parseInt(gameId));

    if (!game) {
        return res.status(404).json({ message: 'Game not found'});
    }

    const gameUsers = game.users.map(userId => users.find(user => user.id === userId));
    res.json({users: gameUsers});
})

// 06. Start the server on port 3001
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Comment here how to text app in Postman
// 01. Open Postman
// 02. Create a new request
// 03. Set the request type to GET
// 04. Enter the URL: http://localhost:3001/api/v1/greet/good-morning
// 05. Click on the Send button
// 06. You should see the response in the body section
// 07. You can test other APIs by changing the URL
// 08. You can test POST, PUT, DELETE APIs as well

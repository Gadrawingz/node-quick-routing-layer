/**
 * @fileoverview This file contains the implementation of an Express server with various endpoints for greeting messages, user management, and game management.
 * 
 * @requires express
 */

/**
 * Express application instance.
 * @const {Object}
 */
const app = express();

/**
 * Port number for the server.
 * @const {number}
 */
const port = 3001;

/**
 * Middleware to parse JSON request bodies.
 * @function
 */
app.use(express.json());

/**
 * Simulated database of users.
 * @type {Array<Object>}
 */
let users = [
    // User objects with id, name, and email properties
];

/**
 * Simulated database of games.
 * @type {Array<Object>}
 */
let games = [
    // Game objects with id, title, description, and users properties
];

/**
 * GET /api/v1/greet/good-morning
 * Sends a good morning greeting message.
 * @name get/api/v1/greet/good-morning
 * @function
 * @memberof module:routes/greet
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get('/api/v1/greet/good-morning', (req, res) => {
    res.send('Good morning developers!');
});

/**
 * GET /api/v1/greet/good-afternoon
 * Sends a good afternoon greeting message.
 * @name get/api/v1/greet/good-afternoon
 * @function
 * @memberof module:routes/greet
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get('/api/v1/greet/good-afternoon', (req, res) => {
    res.send('Good afternoon developers!');
});

/**
 * GET /api/v1/greet/good-evening
 * Sends a good evening greeting message.
 * @name get/api/v1/greet/good-evening
 * @function
 * @memberof module:routes/greet
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get('/api/v1/greet/good-evening', (req, res) => {
    res.send('Good evening developers!');
});

/**
 * GET /api/v1/greet/:userId
 * Sends a personalized greeting message to a user.
 * @name get/api/v1/greet/:userId
 * @function
 * @memberof module:routes/greet
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get('/api/v1/greet/:userId', (req, res) => {
    const { userId } = req.params.userId;
    const user = users.find(user => user.id === parseInt(userId));

    if (!user) {
        return res.status(404).json({ message: 'User not found'});
    }

    res.json({message: `Hello ${user.name}, Welcome to the Game app!`});
});

/**
 * GET /api/v1/users
 * Retrieves all users.
 * @name get/api/v1/users
 * @function
 * @memberof module:routes/users
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get('/api/v1/users', (req, res) => {
    res.json(users);
});

/**
 * GET /api/v1/users/:userId
 * Retrieves a single user by ID.
 * @name get/api/v1/users/:userId
 * @function
 * @memberof module:routes/users
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get('/api/v1/users/:userId', (req, res) => {
    const id = req.params.userId;
    const user = users.find(user => user.id === parseInt(id));

    if (!user) {
        return res.status(404).json({ message: 'User not found'});
    }

    res.json({user: user});
});

/**
 * POST /api/v1/users
 * Creates a new user.
 * @name post/api/v1/users
 * @function
 * @memberof module:routes/users
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
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

/**
 * PUT /api/v1/users/:userId
 * Updates an existing user.
 * @name put/api/v1/users/:userId
 * @function
 * @memberof module:routes/users
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
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

/**
 * DELETE /api/v1/users/:userId
 * Deletes a user by ID.
 * @name delete/api/v1/users/:userId
 * @function
 * @memberof module:routes/users
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.delete('/api/v1/users/:userId', (req, res) => {
    const id = req.params.userId;
    users = users.filter(user => user.id !== parseInt(id));
    res.status(204).send();
});

/**
 * GET /api/v1/games/:gameId/users
 * Retrieves users associated with a specific game.
 * @name get/api/v1/games/:gameId/users
 * @function
 * @memberof module:routes/games
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get('/api/v1/games/:gameId/users', (req, res) => {
    const gameId = req.params.gameId;
    const game = games.find(game => game.id === parseInt(gameId));

    if (!game) {
        return res.status(404).json({ message: 'Game not found'});
    }

    const gameUsers = game.users.map(userId => users.find(user => user.id === userId));
    res.json({users: gameUsers});
});

/**
 * Starts the server on the specified port.
 * @function
 */
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
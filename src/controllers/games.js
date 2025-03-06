// 02. Data for games
let games = [
  {
    id: 1,
    title: "Game of Thrones",
    description: "Amazing game for Programmers",
    users: [1, 2, 3],
  },
  {
    id: 2,
    title: "The Witcher",
    description: "Amazing game for Programmers",
    users: [4, 5, 6],
  },
  {
    id: 3,
    title: "Cyberpunk 2077",
    description: "Amazing game for Programmers",
    users: [7, 8, 9],
  },
  {
    id: 4,
    title: "Red Dead Redemption 2",
    description: "Amazing game for Programmers",
    users: [10, 11, 12],
  },
  {
    id: 5,
    title: "Assassins Creed Valhalla",
    description: "Amazing game for Programmers",
    users: [13, 14, 15],
  },
  {
    id: 6,
    title: "FIFA 21",
    description: "Amazing game for Programmers",
    users: [16, 17, 18],
  },
  {
    id: 7,
    title: "PES 2021",
    description: "Amazing game for Programmers",
    users: [19, 20, 1],
  },
  {
    id: 8,
    title: "Call of Duty",
    description: "Amazing game for Programmers",
    users: [2, 3, 4],
  },
];

const GameController = {
  getAllGames: (req, res) => {
    res.json({
      message: "List of all games",
      data: games,
    });
  },

  getGameById: (req, res) => {
    const { gameId } = req.params;
    const game = games.find((game) => game.id === parseInt(gameId));

    if (!game) {
      return res.status(404).json({
        message: "Game not found",
      });
    }

    res.json({
      message: "Game details",
      data: game,
    });
  },

  getUsersFromGame: (req, res) => {
    const { gameId } = req.params;
    const game = games.find((game) => game.id === parseInt(gameId));

    if (!game) {
      return res.status(404).json({
        message: "Game not found",
      });
    }

    const gameUsers = users.filter((user) => game.users.includes(user.id));

    /*
    const gameUsers = game.users.map(userId => users.find(user => user.id === userId));
    res.json({
        message: "List of all users in a game",
        data: gameUsers
    });
    */

    res.json({
      message: "List of all users in a game",
      data: gameUsers,
    });
  },
};

module.exports = { GameController };
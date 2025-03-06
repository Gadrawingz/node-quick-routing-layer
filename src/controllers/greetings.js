const { users } = require("./users");

const GreetingController = {
  goodMorning: (req, res) => {
    res.json({
      message: "Good morning developers!",
    });
  },

  goodAfternoon: (req, res) => {
    res.json({
      message: "Good afternoon developers!",
    });
  },

  goodEvening: (req, res) => {
    res.json({
      message: "Good evening developers!",
    });
  },

  goodNight: (req, res) => {
    res.json({
      message: "Good night developers!",
    });
  },

  // Hello user
  helloUser: (req, res) => {
    const userId = req.params.userId;
    const user = users.find((user) => user.id === parseInt(userId));

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json({
      message: `Hello ${user.name}, Welcome to the Game app!`
    });
  },
};

module.exports = { GreetingController }; 
// export default GreetingController; // ES6
// module.exports = GreetingController; // CommonJS
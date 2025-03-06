const { Router } = require("express");
const { GreetingController } = require("../controllers/greetings");

const router = new Router();

router.get("/api/v1/greetings/morning", GreetingController.goodMorning);
router.get("/api/v1/greetings/afternoon", GreetingController.goodAfternoon);
router.get("/api/v1/greetings/evening", GreetingController.goodEvening);
router.get("/api/v1/greetings/night", GreetingController.goodNight);
router.get("/api/v1/greetings/users/:userId", GreetingController.helloUser);

module.exports = { router };

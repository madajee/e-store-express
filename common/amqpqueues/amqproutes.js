const router = require("express").Router();

const amqpPublishController = require("./amqpPublishController");

router.get("/send-msg", amqpPublishController.publishmsg);

module.exports = router;
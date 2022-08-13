const express = require("express");
const router = express.Router();
const service = require("../controllers/service");

router.get("/city", service.listCity);

module.exports = router;
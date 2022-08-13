const express = require("express");
const router = express.Router();
const driver = require("../controllers/driver");


module.exports = router;

router.get("/", driver.listDrivers);
router.get("/:id", driver.detailDriver);
router.post("/", driver.createDriver);
router.put("/:id", driver.updateDriver);

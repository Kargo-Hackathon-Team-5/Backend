const express = require("express");
const router = express.Router();
const truck = require("../controllers/truck");

router.get("/", truck.listTrucks);
router.get("/:id", truck.detailTrucks);

module.exports = router;
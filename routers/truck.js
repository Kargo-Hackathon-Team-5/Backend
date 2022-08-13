const express = require("express");
const router = express.Router();
const truck = require("../controllers/truck");

router.get("/", truck.listTrucks);
router.get("/:id", truck.detailTrucks);
router.post("/", truck.addTruck);
router.put("/:id", truck.updateTruck);

module.exports = router;
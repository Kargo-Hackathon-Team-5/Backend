const express = require("express");
const router = express.Router();
const shipment = require("../controllers/shipment");

router.get("/", shipment.listShipments);
router.get("/:id", shipment.detailShipment);
router.post("/", shipment.createShipment);
router.put("/:id", shipment.updateShipment);

module.exports = router;
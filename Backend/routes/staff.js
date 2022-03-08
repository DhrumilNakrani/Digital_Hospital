const express = require("express");
//const { check } = require("express-validator");
const router = express.Router();
const staffController = require("../controllers/staff-controllers");

router.post("/login", staffController.postLogin);
router.delete("/delete", staffController.postDelete);
router.post("/signup", staffController.postSingup);
router.put("/update/:staffId", staffController.updateInformation);
router.get("/detail/:staffId", staffController.getStaff)

module.exports = router;
const express = require("express");
const router = express.Router();
const Controller = require("../controllers/storesInfo.controller");




const {
  create,
  update,
  deletee,
  Read
  
} =  Controller;

router.post("/create", create);
router.put("/update/:id",update);
router.delete("/delete/:id",deletee);
router.get("/:id",Read);


module.exports = router;
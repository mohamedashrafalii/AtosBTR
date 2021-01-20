const express = require("express");
const router = express.Router();
const Controller = require("../controllers/storesInfo.controller");
const verify = require("../controllers/verifyToken.controller")



const {
  create,
  update,
  deletee
  
} =  Controller;

router.post("/create",verify, create);
router.put("/update/:id",verify,update);
router.delete("/delete/:id",verify,deletee);


module.exports = router;
const express = require("express");
const router = express.Router();
const Controller = require("../controllers/storesInfo.controller");


const {
  create,
  update,
  deletee,
  Read,
  SendMail
} =  Controller;

router.post("/create", create);
// router.put("/update/:id",update); //Will be used in future release
// router.delete("/delete/:id",deletee); //Will be used in future release
router.get("/:id",Read);
router.post("/sendMail", SendMail);


module.exports = router;
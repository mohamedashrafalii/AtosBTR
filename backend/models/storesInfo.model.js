const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//offer schema
const storesInfo = new Schema(
  {
   branchNumber:type=Number,
   phoneNumbers:[Number],
   address:String,
   storeName:String,
   category:String


   
  },
  {
    timestamps: true
  }
);
storesInfo.index({
  "$**": "text"
});

module.exports = StoresInfo = mongoose.model("StoresInfo", storesInfo);

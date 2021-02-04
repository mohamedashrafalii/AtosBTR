const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const storesInfo = new Schema(
  {
   branchNumber:type=Number,
   phoneNumbers:[Number],
   address:String,
   storeName:String,
   mail:String,
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

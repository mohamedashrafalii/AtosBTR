const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Receipt schema
const receiptSchema = new Schema(
  {
   
    receipt: type=Object,
    barcode: type=String,
    qrCode: type=String,
    storeId :
    {
        type : Schema.Types.ObjectId,
        ref:'storesInfo'
    }

  },
  {
    timestamps: true
  }
);
receiptSchema.index({
  "$**": "text"
});

module.exports = Receipt = mongoose.model("Receipt", receiptSchema);

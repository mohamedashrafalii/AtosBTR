const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//offer schema
const receiptSchema = new Schema(
  {
   
    receipt: [JSON],
    barcode: type=Number,
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

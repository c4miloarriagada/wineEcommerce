const { Schema, model } = require("mongoose");

const PurchaseSchema = Schema({
  status: {
    type: String,
    enum: ["APROVED", "PENDING", "FAILED"],
  },
  cart: {
    type: Array,
    default: [],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  payment_id:{
    type: String,
    require: true
  }
});

PurchaseSchema.methods.toJSON = function () {
  const { ...data } = this.toObject();
  return data;
};

module.exports = model("Purchase", PurchaseSchema);

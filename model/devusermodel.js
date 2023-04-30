const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectIdSchema = Schema.Types.ObjectId;

const devUser = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    require: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("admitData", devUser);

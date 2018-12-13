const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  username: { type: String, required: true },
  name: { type: String, required: true },
  fullName: {type:String, require: true},
  phoneNumber: { type: number, required: true },
  devices: {
    deviceType: {type: String, require: true},
    deviceModel: {type: String, required: true},
    name: {type: String, required: true},
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;

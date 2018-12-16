const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  userName: { type: String, required: true },
  fullName: {type:String, require: true},
  phoneNumber: { type: Number, required: true },
  device : { type: String, required: true}
  // device: [{
  //   deviceType: {type: String, require: true},
  //   deviceModel: {type: String, required: true},
  //   name: {type: String, required: true},
  // }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
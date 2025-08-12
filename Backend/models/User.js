import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  name: {type: String ,required: true},
  email: {type: String,unique: true},
});
export default mongoose.model("User", UserSchema);
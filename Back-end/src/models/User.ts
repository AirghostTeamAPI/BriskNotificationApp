import { model, Schema } from "mongoose";

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true
  },
  login: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  equipment: {
    type: String,
    required: true
  },
  pushToken: {
    type: String
  }
});

const User = model("Users", UserSchema);

export default User;

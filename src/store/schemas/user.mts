import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  address: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
});

const User = model("User", UserSchema);

export default User;
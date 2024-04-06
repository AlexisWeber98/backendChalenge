import { UUID } from "mongodb";
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  id: {
    type: UUID,
    require: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

model("User",UserSchema);

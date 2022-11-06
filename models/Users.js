import { Schema, model } from 'mongoose';

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const User = model('user', UserSchema);

export default User;
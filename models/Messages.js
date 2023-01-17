import { Schema, model } from 'mongoose';

// Create Schema
const MessagesSchema = new Schema({
  msg: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Messages = model('message', ItemSchema);

export default Messages;
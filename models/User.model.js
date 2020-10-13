const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true]
    },

    email: {
      type: String,
      required: [true],
      unique: true,
      lowercase: true,
      trim: true
    },

    passwordHash: {
      type: String,
      required: [true]
    },
    image: {
      type: String,
      default: ''
    }
  },
  { timestamps: true }
);

module.exports = model('User', UserSchema);

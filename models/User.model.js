const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true]
    },

    lastName: {
      type: String,
      trim: true,
      required: [false]
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

    location: {
      type: String,
      trim: false
    },

    image: {
      type: String,
      default: ''
    },

    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post'
      }
    ]
  },
  { timestamps: true }
);

module.exports = model('User', UserSchema);

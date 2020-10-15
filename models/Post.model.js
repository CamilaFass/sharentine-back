const { Schema, model } = require("mongoose");

const PostSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
    },

    content: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true],
    },

    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    
    image: {
      type: String,
      default: ''
    }
  },
  { timestamps: true }
);

module.exports = model("Post", PostSchema);

import mongoose from "mongoose";

const { Schema } = mongoose;
let Post;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

try {
  // Try to retrieve the existing model
  Post = mongoose.model('Post');
} catch (error) {
  // Define the model if it doesn't exist
  Post = mongoose.model('Post', postSchema);
}

export default Post;


// 1: 54 - 2:10
import mongoose from "mongoose";

const {Schema} = mongoose;
let User;
const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {timeseries: true})

try {
    // Try to retrieve the existing model
    User = mongoose.model('User');
  } catch (error) {
    // Define the model if it doesn't exist
    User = mongoose.model('User', userSchema);
  }

  export default User;
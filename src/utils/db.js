const mongoose = require('mongoose');

const connection = async () => {

// Replace 'your_database_uri' with the actual URI of your MongoDB database
const databaseURI = process.env.MONGO;

await mongoose.connect(databaseURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

};

export default connection;

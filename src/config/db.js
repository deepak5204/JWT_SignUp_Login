import mongoose from 'mongoose';

// Connection URI
const uri = 'mongodb://localhost:27017/myDatabase';

// Connect to the MongoDB server
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB successfully');

    // Perform operations here (e.g., define models, perform queries)

    // Close the connection
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

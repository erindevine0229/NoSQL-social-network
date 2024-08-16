// connect to the database
const connection = require('../config/connection');
// import in the models
const { User, Thought } = require('../models');

const { users, thoughts } = require('./data');

connection.on('error', (err) => {
    console.error('Database connection error:', err);
    process.exit(1); // Exit the process if there is a connection error
  });
  
  connection.once('open', async () => {
    console.log('Connected to the database');
  
    try {
      // Clear existing data
      await Thought.deleteMany({});
      await User.deleteMany({});
  
      // Seed users
      const createdUsers = await User.create(users);
      console.log(`${createdUsers.length} users inserted!`);
  
      // Seed thoughts
      const createdThoughts = await Thought.create(thoughts);
      console.log(`${createdThoughts.length} thoughts inserted!`);
  
      console.info('Seeding complete! 🌱');
    } catch (error) {
      console.error('Error seeding data:', error);
    } finally {
      process.exit(0); // Exit the process after seeding
    }
  });
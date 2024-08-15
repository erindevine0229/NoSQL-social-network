// connect to the database
const connection = require('../config/connection');
// import in the models
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    try {
        console.log("You are connected");
        await Thought
    }
})
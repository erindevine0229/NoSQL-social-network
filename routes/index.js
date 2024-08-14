// Create the router using express package
const router = require('express').Router();

const apiRoutes = require('./api');

// Import routes using pathing to api folder if URL has /api

router.use('/api', apiRoutes);

// Default error message if no matching routes are found
router.use((req, res) => {
    return res.send("Unable to find specified route!");
});

// Export the router for use
module.exports = router;
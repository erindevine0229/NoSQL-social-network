const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);




// Ask server to start listening once the database is opened. 
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
});
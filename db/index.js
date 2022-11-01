// Creating a PG Client that is able to interact with our postgres DB

// Step 1: Import pg dependency
const pg = require("pg");

// Step 2: Create a new pg.Client instance
const client = new pg.client(`postgres://localhost:5432/pgPairDatabase`);
    // const client = new pg.Client(urlOfPostgresDatabaseHere)
    // This is the format
    
// STEP 3: Export our client variable 
module.exports = {
    client
}
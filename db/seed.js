// Seed.js will be used to create init seed data for db as well as creating & dropping our tables

// Step 1: Import client from index.js
const {client} = require("./index");

// Step 2: Connect Database;
    // Write asynchronous fn that are able to run SQL queries and interact with db
async function addNewTVShow() {
    try {
        // In order for our client to actually be able to interact with our database, we have to actually connect our client using the .connect() method
        client.connect();
        const { rows } = await client.query(`
            INSERT INTO TVShows("Breaking Bad", "Crime Drama", 2008, 2013)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `, [name, description, yearStarted, yearEnded])
        console.log("Results of adding new tvShow: ", rows); 
    } catch (error) {
        console.log(error); 
    }
}

async function fetchTVShowData() {
    try {
        await client.querry()
    } catch (error) {
        console.log(error);     
    }
}


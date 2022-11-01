// Seed.js will be used to create init seed data for db as well as creating & dropping our tables

// Step 1: Import client from index.js
const {client} = require("./index");

// Step 2: Connect Database;
    // Write asynchronous fn that are able to run SQL queries and interact with db
async function addNewTVShow() {
    try {
        // Step 2a: Write client query that will interact with db 
            // Method querry allows us to write SQL queries directly into VScode
        await client.query(`
            CREATE TABLE foods(
                id SERIAL,
                name VARCHAR(255) NOT NULL,
                price NUMBERIC DEFAULT 0,
                description TEXT DEFAULT 'no text'
            );
        `)
    } catch (error) {
        console.log(error);
    }
}
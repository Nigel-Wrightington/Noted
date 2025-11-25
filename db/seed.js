

import db from "#db/client.js";



await db.connect();
await seed();
await db.end();
console.log("Database Seeded");

async function seed() {
    console.log("test seeding");
}
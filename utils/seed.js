const thought = require("../models/thoughts");
const User = require("../models/users");
const { getRandomReaction, getRandomName } = require("./data");

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }

    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
      await connection.dropCollection('users');
    }


  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add users to the user array
  for (let i = 0; i < 20; i++) {
    // Get some random reaction objects using a helper function that we imported from ./data
    const reactions = getRandomReaction(20);
    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];


    users.push({
      first,
      last,
      reactions,
    });
  }

  // Add users to the collection and await the results
  const userData = await User.create(users);

  // Add thoughts to the collection and await the results
  await thought.create({
thoughtName: 'My thought',
users: [...userData.map(({_id}) => _id)],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

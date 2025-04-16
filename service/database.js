const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('pokemonPC');
const userCollection = db.collection('user');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
    try {
      await db.command({ ping: 1 });
      console.log(`Connect to database`);
    } catch (ex) {
      console.log(`Unable to connect to database with ${url} because ${ex.message}`);
      process.exit(1);
    }
  })();
  function getUser(email) {
    return userCollection.findOne({ username: username });
  }
  
  function getUserByToken(token) {
    return userCollection.findOne({ token: token });
  }
  
  async function addUser(user) {
    await userCollection.insertOne(user);
  }
  
  async function updateUser(user) {
    await userCollection.updateOne({ username: user.username }, { $set: user });
  }
  async function getPokemonByUsername(username) {
    const db = client.db('pokemonPC');
    return await db.collection('pokemon').find({ username }).toArray();
  }
  async function addPokemonToUser(username, pokemon) {
    const db = client.db('pokemonPC');
    await db.collection('pokemon').insertOne({ username, ...pokemon });
  }
  module.exports = {
    getUser,
    getUserByToken,
    addUser,
    updateUser,
    getPokemonByUsername,
    addPokemonToUser
  };